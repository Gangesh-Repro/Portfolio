"use client"

import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
}

export function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        onClick()
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: "smooth" })
      }}
      className={cn(
        "group flex items-center gap-4 py-2 transition-all duration-300",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <span
        className={cn(
          "h-px transition-all duration-300",
          isActive ? "w-16 bg-foreground" : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
        )}
      />
      <span className="text-xs font-semibold uppercase tracking-widest">
        {label}
      </span>
    </a>
  )
}
