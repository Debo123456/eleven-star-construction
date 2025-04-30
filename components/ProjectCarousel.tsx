"use client"

import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStartIndex, setModalStartIndex] = useState(0)
  
  const autoplay = useRef(
    AutoPlay({ playOnInit: false, stopOnInteraction: false })
  )
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current])
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
    autoplay.current.play()
  }, [])

  const handleMouseLeave = useCallback(() => {
    autoplay.current.stop()
  }, [])

  const openModal = useCallback((index: number) => {
    setModalStartIndex(index)
    setIsModalOpen(true)
  }, [])

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
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
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
                    <Image
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-contain"
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