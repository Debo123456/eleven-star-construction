"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.svg"
              alt="Eleven Star Construction"
              className="h-8 w-auto text-gray-900"
              height={32}
              width={160}
              priority
            />
          </Link>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/who-we-are" className="text-gray-700 hover:text-gray-900">Who We Are</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50`}
        >
          <nav className="flex flex-col px-4 py-2">
            <Link
              href="/who-we-are"
              className="py-3 text-gray-700 hover:text-gray-900 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              href="/services"
              className="py-3 text-gray-700 hover:text-gray-900 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="py-3 text-gray-700 hover:text-gray-900 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="py-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 