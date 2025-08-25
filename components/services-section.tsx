"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Network, Shield, Code, Wrench, Printer, ArrowRight, Palette, FileText, Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Monitor,
    title: "Remote IT Support",
    description:
      "Comprehensive remote assistance for all your IT needs, ensuring minimal downtime and maximum productivity.",
    features: ["24/7 Remote Monitoring", "System Maintenance", "Software Updates", "Technical Support"],
    details:
      "Our remote IT support service provides round-the-clock monitoring and maintenance of your systems. We use advanced remote access tools to diagnose and resolve issues quickly, often before you even notice them. Our certified technicians handle everything from software updates and security patches to performance optimization and troubleshooting.",
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    description: "Design, implement, and maintain robust network infrastructure that scales with your business growth.",
    features: ["Network Design", "Server Setup", "Cloud Migration", "Infrastructure Monitoring"],
    details:
      "We design and implement enterprise-grade network infrastructure tailored to your business needs. Our services include network architecture planning, server deployment, wireless network setup, and seamless cloud migration. We ensure your infrastructure is scalable, secure, and optimized for performance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your business from cyber threats with our comprehensive security solutions and monitoring.",
    features: ["Security Audits", "Firewall Management", "Data Protection", "Threat Detection"],
    details:
      "Our cybersecurity solutions provide multi-layered protection against modern threats. We conduct thorough security audits, implement advanced firewalls, set up intrusion detection systems, and provide employee security training. Our proactive approach helps prevent data breaches and ensures compliance with industry standards.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business requirements and workflows.",
    features: ["Web Applications", "Mobile Apps", "Database Design", "API Development"],
    details:
      "We develop custom software solutions that streamline your business processes and improve efficiency. Our team creates responsive web applications, mobile apps for iOS and Android, robust databases, and secure APIs. We use modern technologies and follow best practices to deliver scalable, maintainable solutions.",
  },
  {
    icon: Wrench,
    title: "Hardware & Repair",
    description: "Professional hardware installation, maintenance, and repair services for all your equipment.",
    features: ["Laptop Repair", "Desktop Maintenance", "Hardware Upgrades", "Component Replacement"],
    details:
      "Our hardware services specialize in laptop and desktop repairs, including screen replacements, keyboard fixes, battery replacements, and performance upgrades. We diagnose hardware issues quickly and provide cost-effective solutions. Our certified technicians handle everything from virus removal to complete system rebuilds.",
  },
  {
    icon: Printer,
    title: "Printing & Branding",
    description: "Complete printing solutions and branding services to enhance your business presence.",
    features: ["Business Cards", "Brochures", "Banners", "Brand Design"],
    details:
      "We offer comprehensive printing and branding services to help establish and maintain your professional image. From business cards and letterheads to large format banners and promotional materials, we handle all your printing needs. Our design team also creates logos, brand guidelines, and marketing materials that reflect your company's identity.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative design solutions for your brand identity, marketing materials, and digital presence.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Web Graphics"],
    details:
      "Our graphic design services help establish and strengthen your brand identity. We create compelling logos, comprehensive brand guidelines, marketing collateral, and digital graphics that communicate your message effectively. From business cards to website graphics, we ensure consistent visual communication across all platforms.",
  },
  {
    icon: FileText,
    title: "Cyber Services & Applications",
    description: "Professional assistance with government and institutional online applications and services.",
    features: [
      "HELB/HEF Applications",
      "KUCCPS Applications",
      "KRA Applications",
      "NTSA Services",
      "TSC Applications",
      "Government Portals",
    ],
    details:
      "We provide expert assistance with various government and institutional online applications. Our services include HELB/HEF loan applications, KUCCPS university placement applications, KRA tax compliance and returns, NTSA driving license and vehicle registration services, TSC teacher registration and services, and navigation of various government digital platforms.",
  },
  {
    icon: Search,
    title: "SEO & Online Services",
    description: "Boost your online presence with comprehensive SEO and digital marketing solutions.",
    features: [
      "Search Engine Optimization",
      "Google My Business",
      "Social Media Management",
      "Online Marketing",
      "Website Analytics",
      "Content Strategy",
    ],
    details:
      "Our SEO and online services help improve your digital visibility and drive more traffic to your business. We optimize your website for search engines, manage your Google My Business profile, create and manage social media campaigns, provide detailed analytics reporting, and develop content strategies that engage your target audience and improve your online rankings.",
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, cardIndex])])
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleLearnMore = (service: (typeof services)[0]) => {
    const message = `Hi! I'd like to learn more about your ${service.title} service.\n\n${service.details}\n\nCould you provide more information about pricing and implementation?`
    const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="services" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Comprehensive IT solutions designed to meet all your business technology needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-index={index}
              className={`border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary transition-all duration-300" />
                </div>
                <CardTitle className="font-heading font-semibold text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleLearnMore(service)}
                  variant="outline"
                  className="w-full group bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
