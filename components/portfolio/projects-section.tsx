import { ExternalLink, Github, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with a focus on performance and scalability.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "#",
    external: "#",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative project management tool featuring real-time updates, drag-and-drop interfaces, team workspaces, and automated workflows to streamline team productivity.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    github: "#",
    external: "#",
  },
  {
    title: "API Gateway Service",
    description:
      "A high-performance API gateway that handles rate limiting, authentication, request routing, and monitoring. Designed to support microservices architecture at scale.",
    technologies: ["Node.js", "Redis", "Docker", "Kubernetes", "Prometheus"],
    github: "#",
    external: "#",
  },
]

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "A responsive weather application that shows real-time forecasts, historical data, and interactive maps using multiple API integrations.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    external: "#",
  },
  {
    title: "CLI Productivity Tool",
    description: "A command-line tool for developers to automate repetitive tasks, manage project scaffolding, and streamline workflow operations.",
    technologies: ["Python", "Click", "SQLite"],
    github: "#",
  },
  {
    title: "Portfolio CMS",
    description: "A headless CMS built specifically for developer portfolios, featuring markdown support, image optimization, and SEO management.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    github: "#",
    external: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <h3 className="flex items-center gap-4 text-xl font-bold text-foreground mb-10">
        <span className="font-mono text-primary text-base">03.</span>
        Projects
        <span className="h-px flex-1 max-w-[300px] bg-border" />
      </h3>

      {/* Featured Projects */}
      <div className="space-y-20 mb-20">
        {featuredProjects.map((project, i) => (
          <div
            key={project.title}
            className={`group relative grid gap-4 lg:grid-cols-12 items-center`}
          >
            <div
              className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-6" : ""}`}
            >
              <div className="relative rounded-sm bg-card border border-border p-8 transition-all duration-300 hover:border-primary/30">
                <p className="font-mono text-primary text-sm mb-2">
                  Featured Project
                </p>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <h4 className="text-center text-2xl font-bold text-foreground mb-2">
        Other Noteworthy Projects
      </h4>
      <p className="text-center font-mono text-sm text-primary mb-10">
        view the archive
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-sm bg-card border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <Folder className="h-10 w-10 text-primary" />
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} live`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <h5 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h5>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="font-mono text-xs text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
