"use client"

import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { useState, useCallback, useEffect, useRef } from 'react'
import CloudinaryImage from '@/components/CloudinaryImage'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStartIndex, setModalStartIndex] = useState(0)
  
  // Only initialize autoplay if we have images
  const autoplay = useRef(
    images && images.length > 0 
      ? AutoPlay({ playOnInit: false, stopOnInteraction: false })
      : null
  )
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    autoplay.current ? [autoplay.current] : []
  )
  const [emblaModalRef, emblaModalApi] = useEmblaCarousel({ loop: true, startIndex: modalStartIndex })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Sync modal carousel with selected index when opened
  useEffect(() => {
    if (emblaModalApi && isModalOpen) {
      emblaModalApi.scrollTo(modalStartIndex)
    }
  }, [isModalOpen, modalStartIndex, emblaModalApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollModalPrev = useCallback(() => emblaModalApi?.scrollPrev(), [emblaModalApi])
  const scrollModalNext = useCallback(() => emblaModalApi?.scrollNext(), [emblaModalApi])

  const handleMouseEnter = useCallback(() => {
    if (autoplay.current && emblaApi) {
      try {
        autoplay.current.play()
      } catch (error) {
        // Silently fail if autoplay isn't ready
        console.warn('Autoplay not ready:', error)
      }
    }
  }, [emblaApi])

  const handleMouseLeave = useCallback(() => {
    if (autoplay.current) {
      try {
        autoplay.current.stop()
      } catch (error) {
        // Silently fail if autoplay isn't ready
        console.warn('Autoplay stop failed:', error)
      }
    }
  }, [])

  const openModal = useCallback((index: number) => {
    setModalStartIndex(index)
    setIsModalOpen(true)
  }, [])

  // Early return if no images
  if (!images || images.length === 0) {
    return (
      <div className="relative h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  return (
    <>
      <div 
        className="relative group" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 flex-[0_0_100%] cursor-pointer"
                onClick={() => openModal(index)}
              >
                <CloudinaryImage
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Thumbnail Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
          disabled={!canScrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
          disabled={!canScrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots navigation */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal Carousel */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-black">
          <DialogHeader className="sr-only">
            <DialogTitle>{title} - Image Gallery</DialogTitle>
          </DialogHeader>
          <div className="relative h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-50 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="h-full overflow-hidden" ref={emblaModalRef}>
              <div className="flex h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full flex-[0_0_100%] h-full"
                  >
                    <CloudinaryImage
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="95vw"
                      quality="auto:best"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Navigation Arrows */}
            <button
              onClick={scrollModalPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-full"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={scrollModalNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-full"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 