import React from 'react'
import { ChevronRight, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'

export default function PickledBabyCucumber() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex-1 py-16 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Pickled Baby Cucumber</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Enjoy the crisp, tangy flavor of our premium pickled baby cucumbers, carefully selected and preserved for the perfect bite.
                </p>
                <div className="flex items-center mb-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-sm text-gray-600">(4.8/5 based on 95 reviews)</span>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> Crisp Texture and Tangy Flavor
                  </p>
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> No Artificial Preservatives
                  </p>
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> Perfect for Snacking and Garnishing
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
                  src="/images/product-2.jpeg?height=400&width=600"
                  alt="Pickled Baby Cucumber"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-3 gap-4">
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Baby Cucumber Close-up"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Pickled Baby Cucumber in Jar"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Pickled Baby Cucumber Packaging"
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
                      <li>Made from young, tender baby cucumbers</li>
                      <li>Pickled in a blend of vinegar, water, salt, and spices</li>
                      <li>Crisp texture with a perfect balance of tanginess</li>
                      <li>Available in various jar sizes to suit different needs</li>
                      <li>Long shelf life without compromising on taste or texture</li>
                      <li>Sourced from sustainable farms in Vietnam</li>
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
                    <p className="mb-4">Per 100g serving:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Calories: 15</li>
                      <li>Total Fat: 0.1g</li>
                      <li>Sodium: 800mg</li>
                      <li>Total Carbohydrate: 3g</li>
                      <li>Dietary Fiber: 1.2g</li>
                      <li>Sugars: 1.8g</li>
                      <li>Protein: 0.6g</li>
                      <li>Vitamin K: 20% of Daily Value</li>
                      <li>Vitamin A: 4% of Daily Value</li>
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
                      <li>Perfect as a crunchy snack straight from the jar</li>
                      <li>Ideal for garnishing sandwiches and burgers</li>
                      <li>Chop and add to salads for extra flavor and texture</li>
                      <li>Use as a tangy addition to charcuterie boards</li>
                      <li>Blend into dips or spreads for a zesty kick</li>
                      <li>Serve alongside grilled meats or fish as a refreshing side</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Why Choose Tuthaco Pickled Baby Cucumber?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Premium Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Our baby cucumbers are carefully selected and pickled to ensure the best taste and texture.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Traditional Recipe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We use a time-tested pickling recipe that brings out the best flavors in our baby cucumbers.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Versatile Use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">From snacking to garnishing, our pickled baby cucumbers are perfect for various culinary applications.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ready to Order?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss bulk orders and pricing for our premium pickled baby cucumbers.
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