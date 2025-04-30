"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with priority loading */}
      <Image
        src="/images/hero/hero-construction-1.webp"
        alt="Aerial view of a major infrastructure construction site with cranes and steel framework, showcasing Eleven Star Construction's expertise in large-scale projects"
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
        quality={90}
      />
      
      {/* Blueprint pattern overlay */}
      <div className="absolute inset-0 z-[5] opacity-10 bg-blueprint animate-blueprint-pan" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-[8]" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/30 to-transparent animate-gradient-shift z-[9]" />
      
      {/* Dark overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">
          Building Your Dream from Concept to Creation
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          Eleven Star Construction brings your vision to life with expert craftsmanship 
          in residential, commercial, and industrial projects. Quality construction, 
          delivered with precision and care.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-10 items-center"
        >
          <Button
            size="lg"
            className="bg-brand-green text-white hover:bg-brand-green-light text-[1.2rem] px-8 py-6 
            relative shadow-sm hover:shadow-lg transition-all duration-300 font-medium w-full sm:w-auto
            before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_20px_rgba(0,166,81,0.5)]
            before:animate-glow-subtle before:z-[-1]
            hover:before:shadow-[0_0_30px_rgba(0,166,81,0.7)]
            hover:scale-[1.02] hover:-translate-y-0.5"
            asChild
          >
            <a href="/projects">View Our Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-3 border-white bg-black/20 text-white hover:bg-white hover:text-black text-[1.2rem] px-8 py-6
            relative shadow-sm hover:shadow-lg transition-all duration-300 font-medium w-full sm:w-auto
            before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_20px_rgba(255,255,255,0.3)]
            before:animate-glow-subtle before:z-[-1]
            hover:before:shadow-[0_0_30px_rgba(255,255,255,0.5)]
            hover:scale-[1.02] hover:-translate-y-0.5"
            asChild
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
        <p className="text-gray-200 mt-6 text-lg italic">
          Get started with a consultation today!
        </p>
      </motion.div>
    </section>
  )
} 