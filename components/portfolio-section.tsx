"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Github, Globe } from "lucide-react"

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website showcasing software development skills and projects.",
    image: "/portfolio-website-showcase.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    client: "Personal Project",
    fullDescription:
      "A comprehensive portfolio website built with modern web technologies. Features responsive design, smooth animations, project showcases, and contact integration. Deployed on Netlify with continuous integration from GitHub.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"],
    duration: "2 weeks",
    teamSize: "Solo Developer",
    liveUrl: "https://portfoliogilbert.netlify.app/",
    githubUrl: "https://github.com/gilbert-ngaruiya/portfolio",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "/ecommerce-platform-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "Retail Business",
    fullDescription:
      "A complete e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and comprehensive admin dashboard. Built with modern technologies and best practices.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Cloudinary"],
    duration: "6 weeks",
    teamSize: "Solo Developer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    image: "/task-management-app-interface.png",
    tags: ["Vue.js", "Firebase", "Real-time", "PWA"],
    client: "Startup Company",
    fullDescription:
      "A progressive web application for team task management featuring real-time collaboration, drag-and-drop interface, deadline tracking, file attachments, and push notifications. Built as a PWA for cross-platform compatibility.",
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA", "WebSockets", "Cloud Functions"],
    duration: "4 weeks",
    teamSize: "Solo Developer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts and data visualization.",
    image: "/weather-dashboard-charts.png",
    tags: ["JavaScript", "API Integration", "Charts", "Responsive"],
    client: "Personal Project",
    fullDescription:
      "A comprehensive weather dashboard that provides current weather conditions, 7-day forecasts, and historical data visualization. Features geolocation support, multiple city tracking, and interactive charts powered by Chart.js.",
    technologies: ["Vanilla JavaScript", "OpenWeather API", "Chart.js", "CSS Grid", "Local Storage"],
    duration: "1 week",
    teamSize: "Solo Developer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with POS, inventory, and analytics.",
    image: "/restaurant-pos-system.png",
    tags: ["React", "Python", "PostgreSQL", "Analytics"],
    client: "Local Restaurant",
    fullDescription:
      "A full-featured restaurant management system including point-of-sale interface, inventory management, staff scheduling, customer management, and detailed analytics dashboard. Built with React frontend and Python backend.",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Redis", "Chart.js", "Docker"],
    duration: "8 weeks",
    teamSize: "Solo Developer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Analytics Tool",
    description: "Analytics dashboard for social media performance tracking and insights.",
    image: "/social-media-analytics-dashboard.png",
    tags: ["Angular", "Node.js", "Social APIs", "Data Viz"],
    client: "Marketing Agency",
    fullDescription:
      "A comprehensive social media analytics tool that aggregates data from multiple platforms, provides detailed insights, tracks engagement metrics, and generates automated reports. Features custom dashboard creation and export capabilities.",
    technologies: ["Angular", "Node.js", "Express", "MongoDB", "Social Media APIs", "D3.js"],
    duration: "10 weeks",
    teamSize: "Solo Developer",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const contactAboutProject = (project: (typeof projects)[0]) => {
    const message = `Hi! I'm interested in learning more about your ${project.title} project. Could you provide more details about similar development services for my business?`
    const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Projects */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Software Development Portfolio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Showcasing innovative software solutions and web applications built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=200&width=400&query=software development project"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {project.client}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <Button variant="secondary" size="sm" className="whitespace-nowrap">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading font-bold text-2xl text-foreground">{selectedProject.title}</h3>
                <Button variant="ghost" size="sm" onClick={closeProjectModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <img
                src={
                  selectedProject.image || "/placeholder.svg?height=200&width=400&query=software development project"
                }
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Client</h4>
                    <p className="text-muted-foreground">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-muted-foreground">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Team Size</h4>
                    <p className="text-muted-foreground">{selectedProject.teamSize}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                      className="flex-1"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      className="flex-1"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button onClick={() => contactAboutProject(selectedProject)} className="flex-1">
                    Hire for Similar Project
                  </Button>
                  <Button variant="outline" onClick={closeProjectModal} className="flex-1 bg-transparent">
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
