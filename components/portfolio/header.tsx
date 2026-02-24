"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled
          ? "py-3 bg-background/90 backdrop-blur-md shadow-lg shadow-background/20 border-b border-border/50"
          : "py-6 bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        <a
          href="#hero"
          className="text-primary font-bold text-xl font-mono hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          {"<G />"}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <span className="text-primary mr-1">
                  {`0${i + 1}.`}
                </span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="border border-primary text-primary rounded-sm px-4 py-2 font-mono text-sm transition-colors duration-200 hover:bg-primary/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-md flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-primary p-1"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" />
          </button>
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-lg text-foreground"
                >
                  <span className="text-primary block text-center text-sm mb-1">
                    {`0${i + 1}.`}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="border border-primary text-primary rounded-sm px-6 py-3 font-mono text-sm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
