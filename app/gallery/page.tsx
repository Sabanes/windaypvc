"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, X, ZoomIn, Play, Pause } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { useLanguage } from "@/contexts/language-context"

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

type GalleryVideo = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  category: string;
  duration?: number;
}

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null)
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [galleryVideos, setGalleryVideos] = useState<GalleryVideo[]>([])
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set())
  const videoRefs = useRef<{[key: string]: HTMLVideoElement}>({})

  useEffect(() => {
    // Fetch gallery images from Sanity
    client.fetch<GalleryImage[]>(groq`
      *[_type == "galleryImage"]{
        _id,
        "id": _id,
        "src": image.asset->url,
        alt,
        category,
        title,
        description
      }
    `).then((data) => {
      setGalleryImages(data)
    })

    // Fetch gallery videos from Sanity
    client.fetch<GalleryVideo[]>(groq`
      *[_type == "galleryVideo"]{
        _id,
        "id": _id,
        title,
        description,
        "videoUrl": videoFile.asset->url,
        "thumbnailUrl": thumbnail.asset->url,
        category,
        duration
      }
    `).then((data) => {
      setGalleryVideos(data)
    })
  }, [])

  const filteredImages: GalleryImage[] = galleryImages
  const filteredVideos: GalleryVideo[] = galleryVideos

  const openImageLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const openVideoLightbox = (video: GalleryVideo) => {
    setSelectedVideo(video)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedVideo(null)
  }

  const toggleVideoPlay = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    if (playingVideos.has(videoId)) {
      video.pause()
      setPlayingVideos(prev => {
        const newSet = new Set(prev)
        newSet.delete(videoId)
        return newSet
      })
    } else {
      video.play()
      setPlayingVideos(prev => new Set(prev).add(videoId))
    }
  }

  const formatDuration = (seconds?: number) => {
    if (!seconds) return ''
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/sgpymxzvpqzmjo7t2x5n"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto max-w-7xl relative z-10 px-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-white/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("gallery.hero.back")}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("gallery.hero.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            {t("gallery.hero.description")}
          </p>
        </div>
      </section>

      {/* Images Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-8 text-center">
            {t("gallery.images.title") || "Project Images"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image: GalleryImage) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openImageLightbox(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-[#493F0B]/60 text-lg">{t("gallery.images.empty") || "No images available"}</p>
            </div>
          )}
        </div>
      </section>

      {/* Videos Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-8 text-center">
            {t("gallery.videos.title") || "Project Videos"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video: GalleryVideo) => (
              <div
                key={video.id}
                className="group relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-black">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[video.id] = el
                    }}
                    className="w-full h-full object-cover"
                    poster={video.thumbnailUrl}
                    muted
                    loop
                    playsInline
                    autoPlay
                    onPlay={() => setPlayingVideos(prev => new Set(prev).add(video.id))}
                    onPause={() => setPlayingVideos(prev => {
                      const newSet = new Set(prev)
                      newSet.delete(video.id)
                      return newSet
                    })}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <button
                      onClick={() => toggleVideoPlay(video.id)}
                      className="bg-white/90 hover:bg-white text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {playingVideos.has(video.id) ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6 ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => openVideoLightbox(video)}
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  {/* Duration badge */}
                  {video.duration && (
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {formatDuration(video.duration)}
                    </div>
                  )}
                </div>

                {/* Video Info */}
{/*                 <div className="p-4">
                  <h3 className="font-semibold text-[#493F0B] mb-1">{video.title}</h3>
                  {video.description && (
                    <p className="text-sm text-[#493F0B]/70 line-clamp-2">{video.description}</p>
                  )}
                  {video.category && (
                    <span className="inline-block mt-2 px-2 py-1 bg-[#493F0B]/10 text-[#493F0B] text-xs rounded">
                      {video.category}
                    </span>
                  )}
                </div> */}
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-8">
              <p className="text-[#493F0B]/60 text-lg">{t("gallery.videos.empty") || "No videos available"}</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#d3d3d3]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">500+</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.projects")}</div>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">15+</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.years")}</div>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">100%</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.satisfaction")}</div>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">24/7</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.support")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("gallery.cta.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">
            {t("gallery.cta.description")}
          </p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              {t("gallery.cta.button")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                className="w-full max-h-[80vh] object-contain"
                controls
                autoPlay
                poster={selectedVideo.thumbnailUrl}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Video info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg mb-1">{selectedVideo.title}</h3>
                {selectedVideo.description && (
                  <p className="text-white/80 text-sm">{selectedVideo.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}