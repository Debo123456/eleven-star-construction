"use client"
import { useEffect, useState } from "react"

const RulerProgressBar = ({ show }: { show: boolean }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(scrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[9998] h-8 bg-transparent pointer-events-none transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Ruler background */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-yellow-200/60 to-yellow-100/40 border-b-2 border-yellow-600/60 flex items-end">
        {/* Tick marks */}
        <div className="w-full h-full flex">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="h-full flex flex-col justify-end"
              style={{ width: "2%" }}
            >
              <div
                className={`${
                  i % 5 === 0
                    ? "h-6 bg-yellow-700/60"
                    : "h-3 bg-yellow-500/40"
                } w-0.5 mx-auto rounded`}
              />
              {i % 10 === 0 && (
                <span className="text-xs text-yellow-900/80 font-bold mt-0.5 block text-center select-none">
                  {i}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Spirit level bubble (progress) */}
      <div
        className="absolute top-0 left-0 h-8"
        style={{
          width: `${progress * 100}%`,
          transition: "width 0.2s cubic-bezier(.4,2,.6,1)",
        }}
      >
        <div className="h-8 bg-green-400/40 border-l-4 border-green-700/60 rounded-r-full shadow-lg relative">
          {/* Bubble (spirit level) */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 bg-green-200/70 border-2 border-green-700/70 rounded-full shadow"
            style={{
              boxShadow: "0 0 8px 2px #bef26480, 0 0 0 2px #a3e63580 inset",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
      {/* Accessible progress bar for screen readers */}
      <div
        className="sr-only"
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {Math.round(progress * 100)}% scrolled
      </div>
    </div>
  )
}

export default RulerProgressBar
