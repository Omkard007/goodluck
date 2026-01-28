import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Goodluck Cafe - Iconic Irani Café in Pune',
  description: 'Experience the warmth and heritage of Goodluck Cafe, an iconic Irani café in Pune since mid-20th century. Famous for Bun Maska, Irani Chai, and authentic comfort food. Rated 4.2/5 with 51,000+ reviews.',
  generator: 'v0.app',
  keywords: 'Goodluck Cafe, Irani Cafe Pune, Bun Maska, Irani Chai, Deccan Gymkhana, café Pune',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
