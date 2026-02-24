import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 text-center">
      <p className="font-mono text-primary text-sm mb-4">
        <span>04.</span> {"What\u2019s Next?"}
      </p>
      <h3 className="text-4xl font-bold text-foreground mb-6 text-balance">
        Get In Touch
      </h3>
      <p className="max-w-lg mx-auto text-muted-foreground leading-relaxed mb-10">
        {
          "I'm currently open to new opportunities and my inbox is always open. Whether you have a question, a project idea, or just want to say hi \u2014 I\u2019ll try my best to get back to you!"
        }
      </p>
      <a
        href="mailto:gangesh@example.com"
        className="inline-flex items-center gap-2 border border-primary text-primary rounded-sm px-8 py-4 font-mono text-sm transition-colors duration-300 hover:bg-primary/10"
      >
        <Mail className="h-4 w-4" />
        Say Hello
      </a>
    </section>
  )
}
