import { Header } from "@/components/portfolio/header"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { SocialLinks, EmailLink } from "@/components/portfolio/social-links"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <>
      <Header />
      <SocialLinks />
      <EmailLink />
      <main className="mx-auto max-w-screen-lg px-6 sm:px-12 lg:px-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
