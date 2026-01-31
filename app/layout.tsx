import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "../components/home/Footer"
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
      

        {/* MAIN CONTENT PUSHES FOOTER DOWN */}
        <main className="flex-1">
          {children}
        </main>

        <Analytics />
        
        <Footer />
      </body>
    </html>
  )
}
