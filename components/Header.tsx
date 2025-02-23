"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.svg"
            alt="Eleven Star Construction"
            className="h-8 w-auto text-gray-900"
            height={32}
            width={160}
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  )
} 