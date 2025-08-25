"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">CW</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-foreground leading-tight">CyberWave</span>
                <span className="text-xs text-muted-foreground font-medium">IT Consultancy</span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center space-x-6">
              <a
                href="#about-owner"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Meet Me
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#cta" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Emergency
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden lg:flex">
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
            >
              Request Support
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-background/95 backdrop-blur">
              <a
                href="#home"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#about-owner"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Meet Me
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#cta"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Emergency
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Request Support
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
