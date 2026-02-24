import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function SocialLinks() {
  return (
    <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-5 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}

export function EmailLink() {
  return (
    <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center gap-5 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
      <a
        href="mailto:gangesh@example.com"
        className="font-mono text-xs text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
      >
        gangesh@example.com
      </a>
    </div>
  )
}
