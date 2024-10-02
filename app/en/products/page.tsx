import React from 'react'
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeaderComponent from '@/components/header'
import FooterComponent from '@/components/footer'

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-1 py-16 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Products</h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Discover our range of premium canned fruits and vegetables, carefully processed to preserve their natural flavors and nutritional benefits.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ProductCard
                title="Canned Pineapple"
                description="Sweet and juicy pineapple chunks preserved at peak ripeness."
                imageSrc="/images/product-1.jpeg?height=300&width=400"
                link="/en/products/canned-pineapple"
              />
              <ProductCard
                title="Canned Lychee"
                description="Delicate and fragrant lychees, carefully preserved for your enjoyment."
                imageSrc="/images/product-2.jpeg?height=300&width=400"
                link="/en/products/canned-lychee"
              />
              <ProductCard
                title="Pickled Baby Cucumber"
                description="Crisp and tangy baby cucumbers, perfect for snacking or as a side dish."
                imageSrc="/images/product-3.jpeg?height=300&width=400"
                link="/en/products/pickled-baby-cucumber"
              />
              <ProductCard
                title="Canned Cherry Tomatoes"
                description="Plump and flavorful cherry tomatoes, ready to enhance your culinary creations."
                imageSrc="/images/product-4.jpeg?height=300&width=400"
                link="/en/products/canned-cherry-tomatoes"
              />
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Why Choose Tuthaco Products?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Premium Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Our fruits and vegetables are carefully selected and processed to ensure the highest quality and taste.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Sustainable Sourcing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We work closely with local farmers to ensure sustainable and ethical farming practices.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Versatile Use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">From snacks to main courses, our products are perfect for various culinary applications.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ready to Order?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss bulk orders and pricing for our premium canned fruits and vegetables.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  )
}

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  link: string
}

function ProductCard({ title, description, imageSrc, link }: ProductCardProps) {
  return (
    <Card className="flex flex-col">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={link}>
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
