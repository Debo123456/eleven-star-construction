"use client"

import { Button } from "@/components/ui/button"
import CloudinaryImage from "@/components/CloudinaryImage"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with priority loading */}
      <CloudinaryImage
        src="eleven-star/hero/hero-construction-1"
        alt="Aerial view of a major infrastructure construction site with cranes and steel framework, showcasing Eleven Star Construction's expertise in large-scale projects"
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
        quality="auto:good"
        crop="fill"
        gravity="center"
      />
      
      {/* Darker overlay for razor-sharp text - increased opacity to 0.5+ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 z-[8]" />
      
      {/* Subtle side gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-[9]" />
      
      {/* Content - razor-sharp text, no shadows or glows */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Vision. Built with Precision.
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-white mb-8 max-w-prose mx-auto text-center font-light leading-relaxed"
        >
          Jamaica's trusted construction experts — from residential to commercial
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12 items-center"
        >
          <a 
            href="/projects"
            className="bg-brand-green text-white hover:bg-brand-green-light text-lg px-10 py-4 
            rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-center
            hover:scale-105 hover:-translate-y-0.5"
          >
            View Our Projects
          </a>
          <a
            href="/contact"
            className="border-2 border-white/80 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-4
            rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-center
            hover:scale-105 hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </motion.div>
        <p className="text-white/80 mt-8 text-base font-light">
          Get started with a consultation today
        </p>
      </motion.div>
    </section>
  )
}
