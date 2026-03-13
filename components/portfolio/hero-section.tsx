import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <p className="font-mono text-primary text-sm mb-4 tracking-wider">
        {"Hi, my name is"}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
        Gangesh.
      </h1>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl lg:text-5xl text-balance">
        I build things for the web.
      </h2>
      <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
        {
          "I'm a software engineer specializing in building and designing exceptional digital experiences. Currently focused on creating scalable, high-performance applications and robust backend systems."
        }
      </p>
      <div className="mt-10">
        <a
          href="#about"
          className="group inline-flex items-center gap-2 border border-primary text-primary rounded-sm px-6 py-3 font-mono text-sm transition-colors duration-300 hover:bg-primary/10"
        >
          Explore my work
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  )
}
