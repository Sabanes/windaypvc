"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

type BlogLanguage = "pt" | "en" | "uk";

interface BlogPost {
  _id: string
  title: Record<BlogLanguage, string>;
  slug: {
    current: string;
  };
  author?: string;
  mainImage?: any;
  categories?: string[];
  publishedAt: string;
  excerpt?: Record<BlogLanguage, string>;
  body?: Record<BlogLanguage, any[]>;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { language, t } = useLanguage()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  const categories: { value: string; label: Record<BlogLanguage, string> }[] = [
    { value: "windows", label: { pt: "Janelas", en: "Windows", uk: "Вікна" } },
    { value: "doors", label: { pt: "Portas", en: "Doors", uk: "Двері" } },
    { value: "installation", label: { pt: "Instalação", en: "Installation", uk: "Встановлення" } },
    { value: "maintenance", label: { pt: "Manutenção", en: "Maintenance", uk: "Обслуговування" } },
    { value: "design", label: { pt: "Design", en: "Design", uk: "Дизайн" } },
  ]

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          author,
          mainImage,
          categories,
          publishedAt,
          excerpt,
          body
        }`
        const data = await client.fetch(query, { slug: params.slug })
        setPost(data)

        // Fetch related posts
        if (data?.categories?.length > 0) {
          const relatedQuery = `*[_type == "post" && _id != $id && count((categories[])[@ in $categories]) > 0] | order(publishedAt desc) [0...3] {
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            excerpt
          }`
          const related = await client.fetch(relatedQuery, { 
            id: data._id, 
            categories: data.categories 
          })
          setRelatedPosts(related)
        }
      } catch (error) {
        console.error("Error fetching post:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  const portableTextComponents = {
    types: {
      image: ({value}: any) => (
        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    block: {
      h2: ({children}: any) => <h2 className="text-3xl font-bold text-[#493F0B] mt-12 mb-6">{children}</h2>,
      h3: ({children}: any) => <h3 className="text-2xl font-bold text-[#493F0B] mt-8 mb-4">{children}</h3>,
      h4: ({children}: any) => <h4 className="text-xl font-bold text-[#493F0B] mt-6 mb-3">{children}</h4>,
      normal: ({children}: any) => <p className="text-gray-700 text-lg leading-relaxed mb-6">{children}</p>,
      blockquote: ({children}: any) => (
        <blockquote className="border-l-4 border-[#493F0B] pl-6 py-2 my-8 italic text-gray-600 bg-[#d3d3d3]/10">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({children}: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">{children}</ul>,
      number: ({children}: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">{children}</ol>,
    },
    marks: {
      strong: ({children}: any) => <strong className="font-bold text-[#493F0B]">{children}</strong>,
      em: ({children}: any) => <em className="italic">{children}</em>,
      link: ({children, value}: any) => (
        <a href={value.href} className="text-[#493F0B] hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">{t('blog.loading')}</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#493F0B] mb-4">
            {t('blog.post.notFound')}
          </h1>
          <Link href="/blog">
            <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90">
              {t('blog.post.back')}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title[language]}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#493F0B] to-[#6B5E0F]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto max-w-4xl px-4 pb-12">
          <Link href="/blog">
            <Button variant="outline" className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('blog.post.backButton')}
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories?.map(cat => (
              <span key={cat} className="bg-[#493F0B] text-white px-4 py-2 rounded-full text-sm font-medium">
                {categories.find(c => c.value === cat)?.label[language] || cat}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title[language]}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString(language, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto max-w-4xl px-4 py-16">
        {post.excerpt && (
          <div className="text-xl text-gray-600 leading-relaxed mb-12 pb-12 border-b-2 border-[#d3d3d3]/30">
            {post.excerpt[language]}
          </div>
        )}

        {post.body && (
          <div className="prose prose-lg max-w-none">
            <PortableText 
              value={post.body[language]} 
              components={portableTextComponents}
            />
          </div>
        )}

        {/* Share Section */}
        <div className="mt-16 pt-12 border-t-2 border-[#d3d3d3]/30">
          <div className="bg-[#d3d3d3]/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#493F0B] mb-4">
              {t('blog.post.share.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('blog.post.share.description')}
            </p>
            <Link href="/contacto">
              <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white px-8 py-6">
                {t('blog.post.share.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#d3d3d3]/10 py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#493F0B] mb-12 text-center">
              {t('blog.relatedArticles')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Link href={`/blog/${relatedPost.slug.current}`}>
                    <div className="relative h-[200px]">
                      {relatedPost.mainImage ? (
                        <Image
                          src={urlFor(relatedPost.mainImage).url()}
                          alt={relatedPost.mainImage.alt || relatedPost.title[language]}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#493F0B]/10 flex items-center justify-center">
                          <span className="text-[#493F0B]/40">No Image</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#493F0B] mb-3 line-clamp-2 hover:text-[#493F0B]/80 transition-colors">
                        {relatedPost.title[language]}
                      </h3>
                      
                      {relatedPost.excerpt && (
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {relatedPost.excerpt[language]}
                        </p>
                      )}
                      
                      <span className="text-[#493F0B] text-sm font-medium hover:underline">
                        {t('blog.readMoreLink')}
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}