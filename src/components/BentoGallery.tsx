"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface MediaItem {
  id: string
  src: string
  alt: string
  title?: string
}

interface ProcessedMediaItem extends MediaItem {
  type: "image" | "video"
  span: "small" | "medium" | "large" | "wide" | "tall"
  aspectRatio?: number
}

interface BentoGalleryProps {
  media: MediaItem[]
  className?: string
  autoDetectLayout?: boolean
}

const spanClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-2",
  large: "col-span-3 row-span-3",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
}

const detectMediaType = (src: string): "image" | "video" => {
  const extension = src.toLowerCase().split(".").pop()
  return extension === "mp4" ? "video" : "image"
}

const getSpanFromAspectRatio = (aspectRatio: number): ProcessedMediaItem["span"] => {
  if (aspectRatio > 2) return "wide" // Very wide images/videos
  if (aspectRatio > 1.5) return "wide" // Wide landscape
  if (aspectRatio > 0.8) return "medium" // Square-ish
  if (aspectRatio > 0.5) return "tall" // Portrait
  return "tall" // Very tall
}

const useMediaDimensions = (mediaItems: MediaItem[], autoDetect: boolean) => {
  const [processedMedia, setProcessedMedia] = useState<ProcessedMediaItem[]>([])

  useEffect(() => {
    if (!autoDetect) {
      // Use existing pattern-based assignment if auto-detect is disabled
      const patterns = ["medium", "small", "wide", "tall", "small", "medium", "small", "wide", "tall", "small"]
      const processed = mediaItems.map((item, index) => {
        const span = patterns[index % patterns.length] as ProcessedMediaItem["span"]
        return {
          ...item,
          type: detectMediaType(item.src),
          span,
        }
      })
      setProcessedMedia(processed)
      return
    }

    const loadMediaDimensions = async () => {
      const processed = await Promise.all(
        mediaItems.map(async (item, index) => {
          const type = detectMediaType(item.src)

          try {
            let aspectRatio: number

            if (type === "image") {
              aspectRatio = await new Promise<number>((resolve) => {
                const img = new window.Image()
                img.onload = () => resolve(img.width / img.height)
                img.onerror = () => resolve(1) // Default to square if error
                img.src = item.src
              })
            } else {
              // For videos
              aspectRatio = await new Promise<number>((resolve) => {
                const video = document.createElement("video")
                video.onloadedmetadata = () => resolve(video.videoWidth / video.videoHeight)
                video.onerror = () => resolve(16 / 9) // Default to 16:9 if error
                video.src = item.src
              })
            }

            const autoSpan = getSpanFromAspectRatio(aspectRatio)
            return {
              ...item,
              type,
              aspectRatio,
              span: autoSpan,
            }
          } catch {
            // Fallback to pattern-based assignment
            const patterns = ["medium", "small", "wide", "tall", "small", "medium"]
            const span = patterns[index % patterns.length] as ProcessedMediaItem["span"]
            return { ...item, type, span }
          }
        }),
      )
      setProcessedMedia(processed)
    }

    loadMediaDimensions()
  }, [mediaItems, autoDetect])

  return processedMedia
}

export function BentoGallery({ media, className, autoDetectLayout = true }: BentoGalleryProps) {
  const processedMedia = useMediaDimensions(media, autoDetectLayout)
  const [selectedMedia, setSelectedMedia] = useState<ProcessedMediaItem | null>(null)

  const getGridCols = () => {
    const count = media?.length || 0
    if (count <= 2) return "grid-cols-2"
    if (count <= 4) return "grid-cols-2 md:grid-cols-4"
    if (count <= 8) return "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    return "grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
  }

  const getMinRows = () => {
    return "auto-rows-fr"
  }

  if (!media || media.length === 0) {
    return (
      <div className={cn("w-full bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8", className)}>
        <div className="text-center text-gray-500 py-12">No media items to display</div>
      </div>
    )
  }

  return (
    <>
      <div className={cn("w-full bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8", className)}>
        <div className={cn("grid gap-3 md:gap-4 auto-rows-[minmax(200px,auto)]", getGridCols())}>
          {processedMedia.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "relative overflow-hidden rounded-xl bg-gray-200 group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-10",
                spanClasses[item.span],
                "animate-in fade-in slide-in-from-bottom-4",
                "min-h-[200px]",
              )}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src || `/placeholder.svg?height=400&width=400&query=gallery image ${index + 1}`}
                  alt={item.alt}
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  priority={index < 4}
                  quality={95}
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 p-2"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  preload={index < 4 ? "metadata" : "none"}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 ring-1 ring-black/10 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium truncate">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src || "/placeholder.svg"}
                  alt={selectedMedia.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  quality={100}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  loop
                />
              )}

              {selectedMedia.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <p className="text-white text-lg font-medium">{selectedMedia.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
