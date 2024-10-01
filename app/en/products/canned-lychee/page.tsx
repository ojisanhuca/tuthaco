import React from 'react'
import { ChevronRight, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'

export default function CannedLychee() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex-1 py-16 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Canned Lychee</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Indulge in the sweet, floral flavor of our premium canned lychees, carefully selected and preserved to capture their delicate essence.
                </p>
                <div className="flex items-center mb-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-sm text-gray-600">(4.9/5 based on 110 reviews)</span>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> Naturally Sweet, No Added Sugar
                  </p>
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> Rich in Vitamin C and Antioxidants
                  </p>
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> Perfect for Desserts and Cocktails
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">
                      Contact for Pricing
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <Image
                  src="/images/company-1.jpeg?height=400&width=600"
                  alt="Canned Lychee"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-3 gap-4">
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Lychee Close-up"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Lychees in Syrup"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Canned Lychee Packaging"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <Tabs defaultValue="details" className="mt-12">
              <TabsList>
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
                <TabsTrigger value="usage">Usage Suggestions</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Made from premium, hand-selected lychees</li>
                      <li>Preserved in light syrup to maintain natural sweetness</li>
                      <li>Whole lychees with seed removed for convenience</li>
                      <li>Available in various can sizes to suit different needs</li>
                      <li>Long shelf life without compromising on taste or texture</li>
                      <li>Sourced from sustainable orchards in Vietnam</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="nutrition">
                <Card>
                  <CardHeader>
                    <CardTitle>Nutrition Facts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Per 100g serving (drained):</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Calories: 66</li>
                      <li>Total Fat: 0.4g</li>
                      <li>Sodium: 1mg</li>
                      <li>Total Carbohydrate: 16.5g</li>
                      <li>Dietary Fiber: 1.3g</li>
                      <li>Sugars: 15.2g</li>
                      <li>Protein: 0.8g</li>
                      <li>Vitamin C: 7% of Daily Value</li>
                      <li>Copper: 8% of Daily Value</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="usage">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Enjoy straight from the can as a refreshing snack</li>
                      <li>Add to fruit salads for a tropical twist</li>
                      <li>Use as a topping for ice cream or yogurt</li>
                      <li>Blend into smoothies or cocktails</li>
                      <li>Incorporate into baked goods like muffins or cakes</li>
                      <li>Use as a garnish for Asian-inspired dishes</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Why Choose Tuthaco Canned Lychee?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Premium Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Our lychees are carefully selected and processed to ensure the highest quality and taste.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Natural Sweetness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We preserve the natural sweetness of lychees without adding extra sugar.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Versatile Use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">From desserts to cocktails, our canned lychees are perfect for various culinary applications.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ready to Order?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss bulk orders and pricing for our premium canned lychees.
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