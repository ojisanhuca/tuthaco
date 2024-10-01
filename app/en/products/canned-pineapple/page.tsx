import React from "react";
import { ChevronRight, Star, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";

export default function CannedPineapple() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-1 py-16 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                  Canned Pineapple
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Enjoy the sweet and tangy taste of premium quality pineapples,
                  carefully selected and preserved at peak ripeness.
                </p>
                <div className="flex items-center mb-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-sm text-gray-600">
                    (4.9/5 based on 120 reviews)
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> 100% Natural, No
                    Preservatives
                  </p>
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> Rich in Vitamins and
                    Minerals
                  </p>
                  <p className="flex items-center text-green-600">
                    <Check className="w-5 h-5 mr-2" /> Convenient and
                    Long-lasting
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
                  src="/images/company-4.jpeg?height=400&width=600"
                  alt="Canned Pineapple"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-3 gap-4">
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Pineapple Slice"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Pineapple Chunks"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/product-1.jpeg?height=100&width=100"
                    alt="Pineapple Packaging"
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
                      <li>Made from premium, hand-selected pineapples</li>
                      <li>Available in slices, chunks, and crushed forms</li>
                      <li>Packed in natural juice, no added sugar</li>
                      <li>Convenient pull-tab cans for easy opening</li>
                      <li>
                        Long shelf life without compromising on taste or
                        nutrition
                      </li>
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
                      <li>Calories: 50</li>
                      <li>Total Fat: 0g</li>
                      <li>Sodium: 1mg</li>
                      <li>Total Carbohydrate: 13g</li>
                      <li>Dietary Fiber: 1g</li>
                      <li>Sugars: 10g</li>
                      <li>Protein: 0.5g</li>
                      <li>Vitamin C: 25% of Daily Value</li>
                      <li>Manganese: 30% of Daily Value</li>
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
                      <li>Perfect for fruit salads and desserts</li>
                      <li>Great addition to smoothies and juices</li>
                      <li>Use as a topping for yogurt or ice cream</li>
                      <li>
                        Ideal for baking - pineapple upside-down cake, muffins,
                        etc.
                      </li>
                      <li>
                        Add to savory dishes like stir-fries or sweet and sour
                        chicken
                      </li>
                      <li>
                        Blend into sauces or marinades for a tropical twist
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
                Why Choose Tuthaco Canned Pineapple?
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Premium Quality
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Our pineapples are carefully selected and processed to
                      ensure the highest quality and taste.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Sustainable Sourcing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We work closely with local farmers to ensure sustainable
                      and ethical farming practices.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Versatile Use
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      From desserts to savory dishes, our canned pineapples are
                      perfect for various culinary applications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                Ready to Order?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss bulk orders and pricing for our
                premium canned pineapples.
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
  );
}
