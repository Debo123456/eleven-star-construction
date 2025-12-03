"use client"
import Hero from "@/components/Hero"
import SectionGlance from "@/components/SectionGlance"
import SectionFeaturedProjects from "@/components/SectionFeaturedProjects"
import SectionWhy from "@/components/SectionWhy"
import SectionSectors from "@/components/SectionSectors"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-px bg-slate-200/70"></div>
      <SectionGlance />
      <div className="w-full h-px bg-slate-200/70"></div>
      <SectionFeaturedProjects />
      <div className="w-full h-px bg-slate-200/70"></div>
      <SectionWhy />
      <div className="w-full h-px bg-slate-200/70"></div>
      <SectionSectors />
    </>
  )
}
