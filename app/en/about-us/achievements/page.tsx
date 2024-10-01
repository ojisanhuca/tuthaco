import React from "react";
import { ChevronRight, Award, TrendingUp, Users, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

export default function Achievements() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex-1 py-16 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                Our Achievements
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrating our journey of excellence, innovation, and growth in
                the canned fruits and vegetables industry.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Award className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="text-2xl font-bold">20+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Years of Excellence</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Globe className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="text-2xl font-bold">30+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Countries Served</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="text-2xl font-bold">500+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Employees</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="text-2xl font-bold">25%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Annual Growth Rate</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
                Major Milestones
              </h2>
              <div className="space-y-8">
                <Card>
                  <CardContent className="flex flex-col md:flex-row items-center p-6">
                    <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                      <Image
                        src="/images/company-1.jpeg?height=200&width=300"
                        alt="Company Founding"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">
                        2003: Company Founding
                      </h3>
                      <p className="text-gray-600">
                        Tuthaco was established in Thanh Hoa province, Vietnam,
                        with a vision to become a leading exporter of canned
                        fruits and vegetables.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col md:flex-row items-center p-6">
                    <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                      <Image
                        src="/images/company-1.jpeg?height=200&width=300"
                        alt="ISO Certification"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">
                        2010: ISO 22000 Certification
                      </h3>
                      <p className="text-gray-600">
                        Achieved ISO 22000 certification, demonstrating our
                        commitment to food safety and quality management
                        systems.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col md:flex-row items-center p-6">
                    <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                      <Image
                        src="/images/company-3.jpeg?height=200&width=300"
                        alt="Expansion"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">
                        2015: Major Facility Expansion
                      </h3>
                      <p className="text-gray-600">
                        Expanded our production facilities, doubling our
                        capacity and creating jobs for over 200 new employees in
                        the local community.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
                Awards and Recognitions
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Image
                      src="/images/product-1.jpeg?height=100&width=100"
                      alt="Best Exporter Award"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardTitle className="text-xl font-semibold text-center">
                      Best Exporter Award 2018
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      Recognized as the top exporter in the food processing
                      category by the Vietnam Chamber of Commerce and Industry.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Image
                      src="/images/product-1.jpeg?height=100&width=100"
                      alt="Sustainable Business Award"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardTitle className="text-xl font-semibold text-center">
                      Sustainable Business Award 2020
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      Awarded for our commitment to sustainable practices and
                      positive impact on local farming communities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Image
                      src="/images/product-1.jpeg?height=100&width=100"
                      alt="Innovation in Food Processing Award"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardTitle className="text-xl font-semibold text-center">
                      Innovation in Food Processing 2022
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      Recognized for our innovative approaches in food
                      processing and packaging technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                Join Our Success Story
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how Tuthaco can be your trusted partner in the canned
                fruits and vegetables industry.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Contact Us Today
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
