"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GoodluckCafeNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Menu", link: "/menu" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Reviews", link: "/reviews" },
  ];

  return (
    <Navbar className="top-2">
      {/* ================= DESKTOP ================= */}
      <NavBody>
        {/* Logo */}
        <NavbarLogo />

        {/* Center Links */}
        <NavItems items={navItems} />

        {/* Phone Button */}
        <NavbarButton
          variant="secondary"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <Phone size={16} />
          +91 98 1234 5678
        </NavbarButton>
      </NavBody>

      {/* ================= MOBILE ================= */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-neutral-700 dark:text-neutral-300"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Phone */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium">
            <Phone size={16} />
            +91 98 1234 5678
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
