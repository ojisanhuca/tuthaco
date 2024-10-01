import React from 'react'
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'

export default function VisionMission() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex-1 py-16 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Our Vision & Mission</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Tuthaco, we are driven by a clear vision and mission that guide our every action and decision.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center mb-16">
              <div>
                <Image
                  src="/images/company-1.jpeg?height=400&width=600"
                  alt="Tuthaco's Vision"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 mb-4">
                    To be the leading global provider of premium canned fruits and vegetables, recognized for our commitment to quality, sustainability, and innovation.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Expand our presence in international markets</li>
                    <li>Continuously improve our product quality and variety</li>
                    <li>Set industry standards for sustainable agricultural practices</li>
                    <li>Foster long-term partnerships with farmers and customers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center mb-16">
              <Card className="flex flex-col h-full md:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 mb-4">
                    To deliver the finest canned fruits and vegetables to our customers worldwide, while supporting local farmers and promoting sustainable agriculture.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Maintain the highest standards of food safety and quality</li>
                    <li>Invest in cutting-edge processing technologies</li>
                    <li>Empower local farming communities through fair partnerships</li>
                    <li>Minimize our environmental impact through responsible practices</li>
                    <li>Provide exceptional value and service to our customers</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="md:order-1">
                <Image
                  src="/images/company-2.jpeg?height=400&width=600"
                  alt="Tuthaco's Mission"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Our Core Values</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <Image
                      src="/images/product-1.jpeg?height=100&width=100"
                      alt="Quality Icon"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardTitle className="text-xl font-semibold">Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We are committed to delivering products of the highest quality, from farm to can.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Image
                      src="/images/product-1.jpeg?height=100&width=100"
                      alt="Sustainability Icon"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardTitle className="text-xl font-semibold">Sustainability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We prioritize environmentally friendly practices in all aspects of our operations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Image
                      src="/images/product-1.jpeg?height=100&width=100"
                      alt="Innovation Icon"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardTitle className="text-xl font-semibold">Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We continuously seek new ways to improve our products and processes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Image
                      src="/images/product-1.jpeg?height=100&width=100"
                      alt="Integrity Icon"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardTitle className="text-xl font-semibold">Integrity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We conduct our business with honesty, transparency, and ethical practices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Join Us in Our Journey</h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how Tuthaco is working towards a sustainable and delicious future.
              </p>
              <Image
                src="/images/company-4.jpeg?height=300&width=800"
                alt="Tuthaco's Journey"
                width={800}
                height={300}
                className="rounded-lg shadow-lg mx-auto mb-8"
              />
              <Button asChild>
                <Link href="/about">
                  Learn More About Us
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