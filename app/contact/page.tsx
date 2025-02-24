import { Navbar } from "@/app/components/navbar"
import { Card, CardContent } from "@/app/components/ui/card"
import { Building2, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Pune, Maharashtra<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:info@nioequipment.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@nioequipment.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}