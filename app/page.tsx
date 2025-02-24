import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Navbar } from "@/app/components/navbar"
import { Card, CardContent } from "@/app/components/ui/card"
import { 
  Truck, 
  Scissors, 
  Package, 
  ArrowRight,
  Building2,
  Users,
  BadgeIndianRupee,
  Award,
  CheckCircle2,
  Star
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Material Handling Solutions
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Leading manufacturer of high-quality material handling equipment in Pune, Maharashtra
          </p>
          <Link href="/products">
            <Button size="lg" className="text-lg">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Nio Equipment?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Custom Solutions</h3>
                    <p className="text-muted-foreground">Tailored material handling equipment designed to meet your specific requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground">Rigorous testing and quality control processes for reliable performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Support</h3>
                    <p className="text-muted-foreground">Dedicated technical team for installation, maintenance, and after-sales service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3"
                alt="Factory Equipment"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-4.0.3" 
                    alt="Scissor Lift"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Scissors className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Scissor Lifts</h3>
                <p className="text-muted-foreground">
                  High-quality scissor lifts for various industrial applications
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="https://c0.wallpaperflare.com/preview/840/993/97/man-carrying-box-using-fork-liftr.jpg" 
                    alt="Goods Lift"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Package className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Goods Lifts</h3>
                <p className="text-muted-foreground">
                  Reliable goods lifts for efficient material transportation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3" 
                    alt="Dock Equipment"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Truck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Dock Equipment</h3>
                <p className="text-muted-foreground">
                  Mobile dock ramps and dock levelers for loading/unloading
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="https://5.imimg.com/data5/SELLER/Default/2023/7/321415323/GD/NI/OT/96594697/hydraulic-hand-pallet-truck-500x500.png" 
                    alt="Material Handling"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Package className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Material Handling</h3>
                <p className="text-muted-foreground">
                  Trolleys, stackers, and hydraulic lifting tables
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-center mb-6">
                  "Nio Equipment's scissor lifts have significantly improved our warehouse operations. Their quality and reliability are unmatched."
                </p>
                <div className="text-center">
                  <h4 className="font-semibold">Rajesh Patel</h4>
                  <p className="text-sm text-muted-foreground">Operations Manager, ABC Logistics</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-center mb-6">
                  "The custom goods lift solution provided by Nio Equipment has revolutionized our material handling process. Excellent service!"
                </p>
                <div className="text-center">
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-muted-foreground">Facility Director, XYZ Manufacturing</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                </div>
                </div>
                <p className="text-muted-foreground text-center mb-6">
                  "Their dock levelers are top-notch, and the after-sales support is exceptional. Highly recommend Nio Equipment!"
                </p>
                <div className="text-center">
                  <h4 className="font-semibold">Amit Desai</h4>
                  <p className="text-sm text-muted-foreground">Supply Chain Head, PQR Industries</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Est. 2021</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">100+</h3>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BadgeIndianRupee className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">₹2-5 Cr</h3>
                <p className="text-muted-foreground">Annual Turnover</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-muted-foreground">Quality Standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-muted-foreground">
                Pune, Maharashtra<br />
                India<br />
                info@nioequipment.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/rohit-soni906/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/Rohits906" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Nio Equipment and Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}