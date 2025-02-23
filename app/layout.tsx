import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieBanner from "@/components/CookieBanner" // If needed
import { Inter } from "next/font/google"
import Schema from "./schema"
import Analytics from "./analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eleven Star Construction | Expert Infrastructure Builders",
  description: "Eleven Star Construction delivers innovative engineering solutions for highways, bridges, tunnels, and more—driving sustainable infrastructure development.",
  keywords: "construction, infrastructure, highways, bridges, tunnels, engineering",
  openGraph: {
    title: "Eleven Star Construction | Expert Infrastructure Builders",
    description: "Leading infrastructure development with innovative engineering solutions.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <Schema />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
