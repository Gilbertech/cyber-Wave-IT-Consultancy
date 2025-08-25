"use client"

import { useEffect, useState, useRef } from "react"
import { Users, CheckCircle, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses trust our IT solutions",
  },
  {
    icon: CheckCircle,
    value: 120,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful implementations delivered",
  },
  {
    icon: Clock,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "In IT consultancy and development",
  },
  {
    icon: Award,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Emergency assistance when you need it",
  },
]

export function SocialProofSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            setTimeout(() => {
              let current = 0
              const increment = stat.value / 60
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  current = stat.value
                  clearInterval(timer)
                }
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = Math.floor(current)
                  return newCounters
                })
              }, 25)
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} id="social-proof" className="py-16 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4">Trusted by Businesses Across Kenya</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Our track record speaks for itself - delivering reliable IT solutions that drive business success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 hover:scale-110 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4 transition-all duration-300 hover:bg-primary-foreground/20 hover:rotate-12">
                  <Icon className="h-8 w-8 text-secondary transition-all duration-300" />
                </div>
                <div className="font-heading font-bold text-3xl sm:text-4xl mb-2 transition-all duration-300 hover:text-secondary">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-primary-foreground/70">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
