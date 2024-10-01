import React from 'react'
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'

export default function CompanyHistory() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-1 py-16 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Tuthaco Company History</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Since our founding in 2003, Tuthaco has been committed to delivering high-quality canned fruits and vegetables to customers worldwide.
            </p>

            <div className="space-y-8">
              <TimelineItem
                year="2003"
                title="Tuthaco Founded"
                description="Tuthaco was established in Thanh Hoa province, Vietnam, with a vision to become a leading exporter of canned fruits and vegetables."
                imageSrc="/images/company-1.jpeg"
              />
              <TimelineItem
                year="2005"
                title="First International Export"
                description="Tuthaco successfully exported its first shipment of canned pineapples to the European market, marking the beginning of our global presence."
                imageSrc="/images/company-2.jpeg"
                reverse
              />
              <TimelineItem
                year="2010"
                title="Product Line Expansion"
                description="We expanded our product line to include canned lychees and pickled baby cucumbers, diversifying our offerings to meet growing market demands."
                imageSrc="/images/company-3.jpeg"
              />
              <TimelineItem
                year="2015"
                title="ISO 22000 Certification"
                description="Tuthaco achieved ISO 22000 certification, demonstrating our commitment to food safety and quality management systems."
                imageSrc="/images/company-4.jpeg"
                reverse
              />
              <TimelineItem
                year="2018"
                title="Sustainable Farming Initiative"
                description="We launched our sustainable farming initiative, partnering with local farmers to implement environmentally friendly practices and ensure the highest quality produce."
                imageSrc="/images/company-1.jpeg"
              />
              <TimelineItem
                year="2023"
                title="20th Anniversary"
                description="Tuthaco celebrated 20 years of excellence in the canned fruit and vegetable industry, reaffirming our commitment to quality and innovation for the years to come."
                imageSrc="/images/company-2.jpeg"
                reverse
              />
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  )
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
  imageSrc: string
  reverse?: boolean
}

function TimelineItem({ year, title, description, imageSrc, reverse = false }: TimelineItemProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          <div className="md:w-1/2">
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="text-3xl font-bold mb-2">{year}</div>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Learn more
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}