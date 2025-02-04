"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Loader2, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleContact = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = '/contact'
    }, 1000)
  }

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="https://5.imimg.com/data5/SELLER/Logo/2024/9/453257887/TO/YJ/KH/96594697/nio-logo-01-90x90.png" alt="logo" className="h-16" />
              <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Nio Equipment</span>
              <span className="px-2">And Engineering</span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors flex items-center">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Button
              onClick={handleContact}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <div className="px-3 py-2">
              <Button
                onClick={handleContact}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}