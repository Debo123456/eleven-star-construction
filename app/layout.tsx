import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import Footer from "@/components/Footer"
import CookieBanner from "@/components/CookieBanner" // If needed
import { Inter, Poppins } from "next/font/google"
import Schema from "./schema"
import Analytics from "./analytics"
import QuoteButton from "@/components/QuoteButton"
import SiteLoader from "@/components/SiteLoader"
import Header from "@/components/Header"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

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
      <body className={`${inter.variable} ${poppins.variable} ${inter.className}`}>
        <Analytics />
        <Schema />
        <Header />
        <SiteLoader />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
        <QuoteButton />
      </body>
    </html>
  )
}
