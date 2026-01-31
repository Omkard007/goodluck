'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/reviews"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Hours
            </h4>
            <p className="text-foreground/70 text-sm">Open Daily</p>
            <p className="text-foreground/70 text-sm">
              Morning to Evening
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Connect
            </h4>
            <p className="text-foreground/70 text-sm">
              Fergusson College Rd
              <br />
              Deccan Gymkhana, Pune
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Goodluck Cafe. Crafted with warmth.
          </p>
        </div>
      </div>
    </footer>
  )
}
