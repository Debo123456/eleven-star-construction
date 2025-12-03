"use client"

import { ReactNode, useEffect } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Add class to body to identify admin pages
    document.body.classList.add('admin-page')
    
    return () => {
      document.body.classList.remove('admin-page')
    }
  }, [])

  return <>{children}</>
}
