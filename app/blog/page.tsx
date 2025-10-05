"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

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
  featured?: boolean
}

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories: { value: string; label: Record<BlogLanguage, string> }[] = [
    { value: "all", label: { pt: "Todos", en: "All", uk: "Усі" } },
    { value: "windows", label: { pt: "Janelas", en: "Windows", uk: "Вікна" } },
    { value: "doors", label: { pt: "Portas", en: "Doors", uk: "Двері" } },
    { value: "installation", label: { pt: "Instalação", en: "Installation", uk: "Встановлення" } },
    { value: "maintenance", label: { pt: "Manutenção", en: "Maintenance", uk: "Обслуговування" } },
    { value: "design", label: { pt: "Design", en: "Design", uk: "Дизайн" } },
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          author,
          mainImage,
          categories,
          publishedAt,
          excerpt,
          featured
        }`
        const data = await client.fetch(query)
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.categories?.includes(selectedCategory))

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== "all")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#493F0B] to-[#6B5E0F] pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 py-24 md:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('blog.title')}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              {t('blog.description')}
            </p>
          </div>
        </div>

      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "all" && (
        <section className="container mx-auto max-w-7xl py-16 px-4">
          <div className="bg-[#d3d3d3]/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] lg:h-full">
                {featuredPost.mainImage ? (
                  <Image
                    src={urlFor(featuredPost.mainImage).url()}
                    alt={featuredPost.mainImage.alt || featuredPost.title[language]}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#493F0B]/10 flex items-center justify-center">
                    <span className="text-[#493F0B]/40 text-xl">No Image</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-[#493F0B] text-white px-4 py-2 rounded-md text-sm font-medium">
                  {t('blog.featured')}
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.categories?.map(cat => (
                    <span key={cat} className="bg-[#493F0B]/10 text-[#493F0B] px-3 py-1 rounded-full text-sm">
                      {categories.find(c => c.value === cat)?.label[language] || cat}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#493F0B] mb-4">
                  {featuredPost.title[language]}
                </h2>
                
                {featuredPost.excerpt && (
                  <p className="text-gray-700 text-lg mb-6">
                    {featuredPost.excerpt[language]}
                  </p>
                )}
                
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  {featuredPost.author && <span>Por {featuredPost.author}</span>}
                  <span>•</span>
                  <span>{new Date(featuredPost.publishedAt).toLocaleDateString(language)}</span>
                </div>
                
                <Link href={`/blog/${featuredPost.slug.current}`}>
                  <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t('blog.readMore')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === cat.value
                  ? "bg-[#493F0B] text-white"
                  : "bg-[#d3d3d3]/30 text-[#493F0B] hover:bg-[#d3d3d3]/50"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto max-w-7xl px-4 pb-24">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">{t('blog.loading')}</p>
          </div>
        ) : regularPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              {t('blog.noArticles')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <article key={post._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#d3d3d3]/30">
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="relative h-[250px]">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.mainImage.alt || post.title[language]}
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
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories?.slice(0, 2).map(cat => (
                        <span key={cat} className="bg-[#493F0B]/10 text-[#493F0B] px-3 py-1 rounded-full text-xs">
                          {categories.find(c => c.value === cat)?.label[language] || cat}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#493F0B] mb-3 line-clamp-2 hover:text-[#493F0B]/80 transition-colors">
                      {post.title[language]}
                    </h3>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt[language]}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      {post.author && <span>{post.author}</span>}
                      {post.author && <span>•</span>}
                      <span>{new Date(post.publishedAt).toLocaleDateString(language)}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}