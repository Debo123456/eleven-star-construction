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
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">
          Building Your Dream from Concept to Creation
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Eleven Star Construction brings your vision to life with expert craftsmanship 
          in residential, commercial, and industrial projects. Quality construction, 
          delivered with precision and care.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 items-center">
          <Button
            size="lg"
            className="bg-[#0066CC] text-white hover:bg-[#0077EE] text-[1.2rem] px-8 py-6 
            shadow-sm hover:shadow-lg transition-all duration-300 font-medium w-full sm:w-auto"
            asChild
          >
            <a href="/projects">View Our Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-3 border-white bg-black/20 text-white hover:bg-white hover:text-black text-[1.2rem] px-8 py-6
            shadow-sm hover:shadow-lg transition-all duration-300 font-medium w-full sm:w-auto"
            asChild
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
        <p className="text-gray-200 mt-6 text-lg italic">
          Get started with a consultation today!
        </p>
      </div>
    </section>
  )
} 