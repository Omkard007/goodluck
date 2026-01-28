'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-muted">
          Goodluck Cafe
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-12 items-center">
          <Link href="/" className="text-muted/90 hover:text-muted transition-colors font-medium text-sm">
            Menu
          </Link>
          <Link href="/about" className="text-muted/90 hover:text-muted transition-colors font-medium text-sm">
            About Us
          </Link>
          <Link href="/contact" className="text-muted/90 hover:text-muted transition-colors font-medium text-sm">
            Contact
          </Link>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 text-muted">
          <Phone size={16} />
          <span className="font-medium text-sm">+91 98 1234 5678</span>
        </div>
      </div>
    </nav>
  )
}
