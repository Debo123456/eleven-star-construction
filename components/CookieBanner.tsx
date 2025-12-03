"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div data-cookie-banner className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="mb-2 md:mb-0">
        We use cookies to analyze website traffic and optimize your experience.
      </p>
      <div className="space-x-2">
        <Button onClick={() => setVisible(false)}>I Agree</Button>
        <Button variant="outline" onClick={() => alert("Settings clicked")}>
          Settings
        </Button>
      </div>
    </div>
  )
} 