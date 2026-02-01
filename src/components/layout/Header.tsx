"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "グロサプについて" },
  { href: "/flow", label: "利用の流れ" },
  { href: "/documents", label: "資料一覧" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-600"
              >
                <rect
                  x="2"
                  y="2"
                  width="16"
                  height="16"
                  fill="currentColor"
                />
                <rect
                  x="22"
                  y="2"
                  width="16"
                  height="16"
                  fill="currentColor"
                  fillOpacity="0.6"
                />
                <rect
                  x="2"
                  y="22"
                  width="16"
                  height="16"
                  fill="currentColor"
                  fillOpacity="0.6"
                />
                <rect
                  x="22"
                  y="22"
                  width="16"
                  height="16"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-gray-900 tracking-tight">
                GROWTH
              </span>
              <span className="text-sm font-bold text-gray-900 tracking-tight">
                SUPPORT
              </span>
              <span className="text-[10px] text-gray-500 tracking-wider">
                ALLIANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
