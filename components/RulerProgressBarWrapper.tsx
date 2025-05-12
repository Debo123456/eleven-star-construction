"use client"
import { useRef, useEffect, useState } from "react"
import RulerProgressBar from "./RulerProgressBar"
import Header from "./Header"

const RulerProgressBarWrapper = () => {
  const navRef = useRef<HTMLDivElement>(null)
  const [showRuler, setShowRuler] = useState(false)

  useEffect(() => {
    if (!navRef.current) return
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowRuler(!entry.isIntersecting)
      },
      { threshold: 0 }
    )
    observer.observe(navRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={navRef}>
        <Header />
      </div>
      <RulerProgressBar show={showRuler} />
    </>
  )
}

export default RulerProgressBarWrapper
