import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/home/Navbar"
import { Footer } from "../components/home/Footer"
import  Cta  from "../components/home/cta"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Goodluck Cafe - Iconic Irani Café in Pune",
  description:
    "Experience the warmth and heritage of Goodluck Cafe, an iconic Irani café in Pune since mid-20th century.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />

        {/* MAIN CONTENT PUSHES FOOTER DOWN */}
        <main className="flex-1">
          {children}
        </main>

        <Analytics />
        <Cta />
        <Footer />
      </body>
    </html>
  )
}
