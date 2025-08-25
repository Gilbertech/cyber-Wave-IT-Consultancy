"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Cpu, Shield, Network, Code, Database, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [stars, setStars] = useState<{ left: number; top: number; delay: number }[]>([])

  useEffect(() => {
    setIsVisible(true)
    // Generate star positions and delays only once for hydration consistency
    const generatedStars = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3000,
    }))
    setStars(generatedStars)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const floatingIcons = [
    { Icon: Cpu, delay: 0, position: "top-20 left-20" },
    { Icon: Shield, delay: 1000, position: "top-32 right-32" },
    { Icon: Network, delay: 2000, position: "bottom-40 left-16" },
    { Icon: Code, delay: 1500, position: "top-1/2 right-20" },
    { Icon: Database, delay: 500, position: "bottom-32 right-40" },
    { Icon: Smartphone, delay: 2500, position: "top-40 left-1/3" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>

      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full animate-pulse"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 C300,200 600,600 1200,400 L1200,800 L0,800 Z"
            fill="currentColor"
            className="animate-[wave_6s_ease-in-out_infinite]"
          />
          <path
            d="M0,500 C400,300 800,700 1200,500 L1200,800 L0,800 Z"
            fill="currentColor"
            opacity="0.5"
            className="animate-[wave_8s_ease-in-out_infinite_reverse]"
          />
        </svg>
      </div>

      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${delay}ms`,
          }}
        >
          <Icon className="w-8 h-8 text-primary-foreground/20 hover:text-primary-foreground/40 transition-colors duration-300" />
        </div>
      ))}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-foreground/30 rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${star.delay}ms`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-primary-foreground mb-6 leading-tight animate-fade-in">
            Smart ICT Solutions for a{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
              Digital World
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We deliver reliable IT support, software development, networking, and cybersecurity services to keep you
            ahead in the digital era.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}