import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Package, Truck } from "lucide-react"
import { RequestQuoteButton } from "@/components/request-quote-button"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold mb-4">Scissor Lifts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Heavy-duty construction</li>
                  <li>• Variable height adjustment</li>
                  <li>• Safety locking mechanism</li>
                  <li>• Custom size options</li>
                  <li>• Load capacity up to 2000kg</li>
                  <li>• Hydraulic power system</li>
                </ul>
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
                <h3 className="text-xl font-semibold mb-4">Goods Lifts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High load capacity</li>
                  <li>• Multiple landing options</li>
                  <li>• Emergency stop system</li>
                  <li>• Low maintenance design</li>
                  <li>• Customizable cabin size</li>
                  <li>• Advanced safety features</li>
                </ul>
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
                <h3 className="text-xl font-semibold mb-4">Dock Equipment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile dock ramps</li>
                  <li>• Hydraulic dock levelers</li>
                  <li>• Edge of dock levelers</li>
                  <li>• Dock plates</li>
                  <li>• Anti-skid surface</li>
                  <li>• Weather-resistant coating</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href='/contact'>
              <RequestQuoteButton />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}