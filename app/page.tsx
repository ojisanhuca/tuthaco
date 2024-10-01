"use client"

import React, { useState, useEffect } from 'react'
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeaderComponent from '@/components/header'
import FooterComponent from '@/components/footer'

export default function TopPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    '/images/company-1.jpeg',
    '/images/company-2.jpeg',
    '/images/company-3.jpeg',
    '/images/company-4.jpeg',
  ]

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-1 mt-16">
        <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={slide}
                alt={`Tuthaco Company Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Tuthaco</h1>
              <p className="text-xl md:text-2xl mb-8">Your trusted partner in canned fruits and vegetables since 2003</p>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  href="/en/products"
                >
                  Our Products
                </Link>
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  href="/en/contact-us"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              <div className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-lg p-4 max-w-xs w-full">
                <Image
                  alt="Canned Pineapple"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg"
                  height={300}
                  src="/images/product-1.jpeg"
                  width={300}
                />
                <h3 className="text-xl font-bold">Canned Pineapple</h3>
                <p className="text-sm text-gray-600 text-center">Sweet and juicy pineapple chunks preserved at peak ripeness.</p>
                <Link
                  className="inline-flex items-center justify-center text-sm font-medium hover:underline"
                  href="/en/products/canned-pineapple"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-lg p-4 max-w-xs w-full">
                <Image
                  alt="Canned Lychee"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg"
                  height={300}
                  src="/images/product-2.jpeg"
                  width={300}
                />
                <h3 className="text-xl font-bold">Canned Lychee</h3>
                <p className="text-sm text-gray-600 text-center">Delicate and fragrant lychees, carefully preserved for your enjoyment.</p>
                <Link
                  className="inline-flex items-center justify-center text-sm font-medium hover:underline"
                  href="/en/products/canned-lychee"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-lg p-4 max-w-xs w-full">
                <Image
                  alt="Pickled Baby Cucumber"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg"
                  height={300}
                  src="/images/product-3.jpeg"
                  width={300}
                />
                <h3 className="text-xl font-bold">Pickled Baby Cucumber</h3>
                <p className="text-sm text-gray-600 text-center">Crisp and tangy baby cucumbers, perfect for snacking or as a side dish.</p>
                <Link
                  className="inline-flex items-center justify-center text-sm font-medium hover:underline"
                  href="/en/products/pickled-baby-cucumber"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-lg p-4 max-w-xs w-full">
                <Image
                  alt="Canned Cherry Tomatoes"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg"
                  height={300}
                  src="/images/product-4.jpeg"
                  width={300}
                />
                <h3 className="text-xl font-bold">Canned Cherry Tomatoes</h3>
                <p className="text-sm text-gray-600 text-center">Plump and flavorful cherry tomatoes, ready to enhance your culinary creations.</p>
                <Link
                  className="inline-flex items-center justify-center text-sm font-medium hover:underline"
                  href="/en/products/canned-cherry-tomatoes"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="About Tuthaco"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height={310}
                src="/images/company-1.jpeg"
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Tuthaco</h2>
                  <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Founded in 2003, Tuthaco is a leading company in processing and exporting agricultural products in
                    Thanh Hoa province. With 20 years of experience, we are committed to delivering high-quality
                    products that meet international standards.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
                    href="/en/about-us"
                  >
                    Learn More
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
                    href="/en/contact-us"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <Image
                alt="Certification 1"
                className="aspect-square object-contain"
                height={100}
                src="/images/logo-haccp.png"
                width={100}
              />
              <Image
                alt="Certification 2"
                className="aspect-square object-contain"
                height={100}
                src="/images/logo-iso.png"
                width={100}
              />
              <Image
                alt="Certification 3"
                className="aspect-square object-contain"
                height={100}
                src="/images/logo-iso-9001.png"
                width={100}
              />
              <Image
                alt="Certification 4"
                className="aspect-square object-contain"
                height={100}
                src="/images/logo-iso.png"
                width={100}
              />
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  )
}