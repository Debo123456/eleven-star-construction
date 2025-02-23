"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with priority loading */}
      <Image
        src="/images/hero/hero-construction.jpg"
        alt="Aerial view of a major infrastructure construction site with cranes and steel framework, showcasing Eleven Star Construction's expertise in large-scale projects"
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
        quality={90}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building Tomorrow's Infrastructure Today
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Eleven Star Construction delivers innovative engineering solutions 
          for highways, bridges, and critical infrastructure projects across America.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-colors"
            asChild
          >
            <a href="/projects">View Our Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-colors"
            asChild
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  )
} 