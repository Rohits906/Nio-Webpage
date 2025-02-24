"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/app/components/navbar";
import { Card, CardContent } from "@/app/components/ui/card";
import { RequestQuoteButton } from "@/app/components/request-quote-button";
import { supabase } from "@/lib/superbase";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data as Product[]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="pt-6">
                  <div className="h-48 mb-6 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                  <p className="text-gray-600 mt-1">{product.description}</p>
                  <p className="text-lg font-bold mt-2">Rs. {product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <RequestQuoteButton />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
