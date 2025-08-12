"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectImage {
  id: string
  src: string
  alt: string
  title?: string
}

interface ProjectGalleryProps {
  images: ProjectImage[]
  projectTitle: string
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return

    if (direction === "prev") {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)
    } else {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  // Dynamic grid layout based on number of images
  const getGridLayout = (count: number) => {
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-1 md:grid-cols-2"
    if (count === 3) return "grid-cols-1 md:grid-cols-3"
    if (count === 4) return "grid-cols-2 md:grid-cols-2"
    if (count === 5) return "grid-cols-2 md:grid-cols-3"
    if (count === 6) return "grid-cols-2 md:grid-cols-3"
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  }

  // Dynamic span classes for bento grid effect
  const getImageSpan = (index: number, total: number) => {
    if (total === 1) return "col-span-1 row-span-2"
    if (total === 2) return "col-span-1 row-span-1"
    if (total === 3) {
      if (index === 0) return "col-span-1 md:col-span-2 row-span-1"
      return "col-span-1 row-span-1"
    }
    if (total === 4) {
      return "col-span-1 row-span-1"
    }
    if (total === 5) {
      if (index === 0) return "col-span-2 md:col-span-2 row-span-2"
      return "col-span-1 row-span-1"
    }
    if (total === 6) {
      if (index === 0 || index === 1) return "col-span-1 md:col-span-1 row-span-2"
      return "col-span-1 row-span-1"
    }
    // For 7+ images, create varied spans
    if (index % 5 === 0) return "col-span-2 row-span-2"
    if (index % 3 === 0) return "col-span-1 row-span-2"
    return "col-span-1 row-span-1"
  }

  const getImageHeight = (index: number, total: number) => {
    if (total === 1) return "h-96"
    if (total <= 4) return "h-48 md:h-64"

    const span = getImageSpan(index, total)
    if (span.includes("row-span-2")) return "h-48 md:h-80"
    return "h-32 md:h-40"
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No images available for this project.</p>
      </div>
    )
  }

  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent mb-2">
            {projectTitle} Gallery
          </h2>
          <p className="text-gray-600">
            {images.length} image{images.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className={`grid ${getGridLayout(images.length)} gap-4 auto-rows-min`}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${getImageSpan(index, images.length)} group cursor-pointer`}
              onClick={() => openModal(index)}
            >
              <div
                className={`relative ${getImageHeight(index, images.length)} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title && <p className="text-sm font-medium truncate">{image.title}</p>}
                  <p className="text-xs text-gray-200">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-screen image viewing */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main image */}
            <div className="relative max-w-full max-h-full">
              <img
                src={images[selectedImageIndex].src || "/placeholder.svg"}
                alt={images[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <div className="text-white">
                  {images[selectedImageIndex].title && (
                    <h3 className="text-xl font-semibold mb-1">{images[selectedImageIndex].title}</h3>
                  )}
                  <p className="text-gray-300 text-sm">
                    {selectedImageIndex + 1} of {images.length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  )
}
