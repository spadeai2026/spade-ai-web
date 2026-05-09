'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'Home',       href: '/'           },
  { name: 'About',      href: '#about'      },
  { name: 'Impact',     href: '#impact'     },
  { name: 'Innovation', href: '#innovation' },
  { name: 'Team',       href: '#team'       },
];

export default function Navbar() {
  const [isOpen,  setIsOpen ] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-earth-900 border-b border-earth-700">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">

          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <span className="text-xs font-sans font-medium uppercase tracking-brand text-earth-400">
              Research Initiative
            </span>
            <span className="text-earth-600 text-sm">·</span>
            <span className="text-brand font-serif font-semibold text-white tracking-snug">
              SPADE-AI
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative inline-block px-3 py-1 text-nav font-sans no-underline transition-colors duration-150"
                style={{ color: hovered === link.name ? '#ffffff' : '#9ca3af' }}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {link.name}
                <span
                  className="absolute bottom-0 left-3 right-3 h-px bg-white transition-transform duration-200 origin-left"
                  style={{ transform: hovered === link.name ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-earth-400 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-earth-700 bg-earth-800">
          <div className="max-w-4xl mx-auto px-6 py-3 flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-nav font-sans text-earth-300 no-underline py-2.5 ${
                  i < navLinks.length - 1 ? "border-b border-earth-700" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}