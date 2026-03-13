import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="py-6 text-center">
      <div className="flex justify-center gap-5 mb-4 lg:hidden">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built by Gangesh
      </p>
    </footer>
  )
}
