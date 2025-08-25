import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutOwnerSection } from "@/components/about-owner-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <FAQSection />
      <TestimonialsSection />
      <AboutOwnerSection />
      <PricingSection />
      <CTASection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
