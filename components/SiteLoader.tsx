"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const SiteLoader = () => {
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setVisible(true)
    const timeout = setTimeout(() => setVisible(false), 900)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 transition-opacity duration-700 pointer-events-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-live="polite"
      aria-label="Site loading"
    >
      <div className="w-32 h-32">
        <DotLottieReact
          src="/construction-loader.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  )
}

export default SiteLoader
