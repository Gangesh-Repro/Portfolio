export function AboutSection() {
  const technologies = [
    "JavaScript (ES6+)",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "Fast API",
    "MySQL",
    "MongoDB",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Docker",
  ]

  return (
    <section id="about" className="py-24">
      <h3 className="flex items-center gap-4 text-xl font-bold text-foreground mb-10">
        <span className="font-mono text-primary text-base">01.</span>
        About
        <span className="h-px flex-1 max-w-[300px] bg-border" />
      </h3>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            {
              "Hello! I'm Gangesh, a software engineer who enjoys building things that live on the internet. My interest in software development started back when I first explored how websites work \u2014 which quickly led me into learning everything about building robust web applications."
            }
          </p>
          <p>
            {
              "Fast-forward to today, I've had the privilege of working across diverse environments \u2014 from startups to larger organizations. My main focus these days is building accessible, scalable products and creating efficient backend architectures."
            }
          </p>
          <p>
            {"Here are a few technologies I\u2019ve been working with recently:"}
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 font-mono text-sm">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-primary">{"▹"}</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="relative group w-64 h-64">
            <div className="absolute inset-0 rounded-sm border-2 border-primary translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative w-full h-full rounded-sm bg-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
              <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-primary">
                G
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
