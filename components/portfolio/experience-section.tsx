"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Current Company",
    role: "Software Engineer",
    period: "2023 — Present",
    url: "#",
    description: [
      "Develop and maintain critical features across a full-stack web application, collaborating closely with cross-functional teams including designers, product managers, and engineers.",
      "Architect and implement scalable APIs and microservices, improving system reliability and reducing response times by optimizing database queries and caching strategies.",
      "Write modern, performant, and maintainable code using JavaScript, TypeScript, React, and Node.js, while adhering to best practices and code review standards.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    company: "Previous Company",
    role: "Junior Software Engineer",
    period: "2021 — 2023",
    url: "#",
    description: [
      "Collaborated with senior engineers to build and ship features for a high-traffic web application, serving thousands of daily active users.",
      "Implemented responsive front-end components and integrated RESTful APIs, ensuring seamless data flow between client and server.",
      "Participated in agile development processes, contributing to sprint planning, code reviews, and documentation.",
    ],
    technologies: ["React", "JavaScript", "Express", "MongoDB", "Git"],
  },
  {
    company: "Internship",
    role: "Software Engineering Intern",
    period: "2020 — 2021",
    url: "#",
    description: [
      "Assisted in developing internal tools and dashboards that streamlined operations for the engineering team.",
      "Gained hands-on experience with modern development workflows, version control, and CI/CD pipelines.",
      "Contributed to documentation and testing efforts across multiple projects.",
    ],
    technologies: ["Python", "Django", "HTML/CSS", "JavaScript", "Git"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24">
      <h3 className="flex items-center gap-4 text-xl font-bold text-foreground mb-10">
        <span className="font-mono text-primary text-base">02.</span>
        Experience
        <span className="h-px flex-1 max-w-[300px] bg-border" />
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                activeTab === i
                  ? "text-primary border-primary bg-primary/5"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-1 min-h-[320px]">
          <h4 className="text-lg font-medium text-foreground">
            {experiences[activeTab].role}{" "}
            <a
              href={experiences[activeTab].url}
              className="text-primary inline-flex items-center gap-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ {experiences[activeTab].company}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </h4>
          <p className="font-mono text-sm text-muted-foreground mt-1 mb-6">
            {experiences[activeTab].period}
          </p>
          <ul className="space-y-3">
            {experiences[activeTab].description.map((desc, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                <span className="text-primary mt-1.5 shrink-0">{"▹"}</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {experiences[activeTab].technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-primary bg-primary/10 rounded-sm px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
