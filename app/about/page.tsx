import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, BadgeIndianRupee, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">About Nio Equipment</h1>
          
          <div className="prose prose-lg mx-auto mb-16 text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Nio Equipment and Engineering, established in 2021, has quickly emerged as a leading manufacturer of material handling equipment in Pune, Maharashtra. Our commitment to quality and innovation has positioned us as a trusted partner for businesses seeking reliable material handling solutions.
            </p>
            <p className="text-lg leading-relaxed">
              We specialize in designing and manufacturing a comprehensive range of equipment including scissor lifts, goods lifts, mobile dock ramps, and dock levelers. Our products are known for their durability, efficiency, and adherence to international safety standards.
            </p>
          </div>

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
    </main>
  )
}