"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Code, Users, Zap, Phone, Github } from "lucide-react"

export function AboutOwnerSection() {
  const achievements = [
    {
      icon: Code,
      title: "3+ Years Experience",
      description: "Full-stack development and IT consulting",
    },
    {
      icon: Users,
      title: "50+ Happy Clients",
      description: "Across Kenya and East Africa",
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Multiple IT certifications and qualifications",
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Always available for critical issues",
    },
  ]

  const handleConnectWhatsApp = () => {
    const message = "Hi Gilbert! I'd like to discuss my IT needs and learn more about your services."
    const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCallNow = () => {
    window.location.href = "tel:+254768299985"
  }

  return (
    <section
      id="about-owner"
      className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  Meet Gilbert Ngaruiya Njambi
                </h2>
                <p className="text-xl text-primary font-medium mb-6 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Founder & Lead IT Consultant
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                  <p>
                    As the sole owner and driving force behind CyberWave IT Consultancy, I bring{" "}
                    <strong className="text-primary">3+ years of hands-on experience</strong> in software development,
                    IT infrastructure, and digital transformation. My passion lies in helping businesses leverage
                    technology to achieve their goals.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-secondary/10">
                  <p>
                    From custom software development to comprehensive IT support, I personally oversee every project to
                    ensure the <strong className="text-secondary">highest quality standards</strong>. My approach
                    combines technical expertise with a deep understanding of business needs, delivering solutions that
                    truly make a difference.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-accent/10">
                  <p>
                    Based in <strong className="text-accent">Thika, Kenya</strong>, I've had the privilege of working
                    with businesses across various industries, from startups to established enterprises, helping them
                    navigate the digital landscape with confidence and success.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleConnectWhatsApp}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Connect on WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallNow}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="https://portfoliogilbert.netlify.app/" target="_blank" rel="noopener noreferrer">
                      View Full Portfolio
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="https://github.com/Gilbertech" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image and Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 transform rotate-6"></div>
                  <img
                    src="https://i.ibb.co/8gkqWfjK/MWS-1613-1.jpg"
                    alt="Gilbert Ngaruiya Njambi - CyberWave IT Consultancy Founder"
                    className="relative w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 rounded-xl shadow-2xl border-4 border-white/50 backdrop-blur-sm animate-pulse">
                    <div className="text-center">
                      <div className="text-2xl font-bold">3+</div>
                      <div className="text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-2 hover:border-primary/30"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
