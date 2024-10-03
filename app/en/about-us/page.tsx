import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";

export default function AboutUs() {
	return (
		<div className="flex flex-col min-h-screen">
			<HeaderComponent />

			<main className="flex-1 py-16 mt-16">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
							About Tuthaco
						</h1>
						<p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
							Tuthaco is a leading producer of premium canned fruits and
							vegetables, committed to delivering quality products from Vietnam
							to the world since 2003.
						</p>

						<div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
							<div>
								<Image
									src="/images/company-1.jpeg?height=400&width=600"
									alt="Tuthaco Factory"
									width={600}
									height={400}
									className="rounded-lg shadow-lg"
								/>
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-4">Our Story</h2>
								<p className="text-gray-600 mb-4">
									{
										" Founded in 2003 in Thanh Hoa province, Tuthaco began as a small family-owned business with a vision to bring the finest Vietnamese fruits and vegetables to the global market. Over the years, we've grown into a trusted name in the canned food industry, known for our commitment to quality, innovation, and sustainability.  "
									}
								</p>
								<p className="text-gray-600">
									{
										" Today, Tuthaco products are enjoyed in over 30 countries, but we've never forgotten our roots. We continue to work closely with local farmers, ensuring fair practices and the highest quality produce for our customers worldwide.  "
									}
								</p>
							</div>
						</div>

						<Tabs defaultValue="mission" className="mb-16">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="mission">Our Mission</TabsTrigger>
								<TabsTrigger value="vision">Our Vision</TabsTrigger>
								<TabsTrigger value="values">Our Values</TabsTrigger>
							</TabsList>
							<TabsContent value="mission">
								<Card>
									<CardHeader>
										<CardTitle>Our Mission</CardTitle>
									</CardHeader>
									<CardContent>
										<p>
											To deliver the finest canned fruits and vegetables to our
											customers worldwide, while supporting local farmers and
											promoting sustainable agriculture practices.
										</p>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="vision">
								<Card>
									<CardHeader>
										<CardTitle>Our Vision</CardTitle>
									</CardHeader>
									<CardContent>
										<p>
											To be the leading global provider of premium canned fruits
											and vegetables, recognized for our commitment to quality,
											sustainability, and innovation.
										</p>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="values">
								<Card>
									<CardHeader>
										<CardTitle>Our Values</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="list-disc pl-5 space-y-2">
											<li>
												Quality: We are committed to delivering products of the
												highest quality, from farm to can.
											</li>
											<li>
												Sustainability: We prioritize environmentally friendly
												practices in all aspects of our operations.
											</li>
											<li>
												Innovation: We continuously seek new ways to improve our
												products and processes.
											</li>
											<li>
												Integrity: We conduct our business with honesty,
												transparency, and ethical practices.
											</li>
											<li>
												Community: We support and empower the local farming
												communities we work with.
											</li>
										</ul>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>

						<div className="mb-16">
							<h2 className="text-2xl font-bold mb-8 text-center">
								Our Achievements
							</h2>
							<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
								<Card>
									<CardHeader>
										<CardTitle className="text-xl font-semibold">
											ISO 22000 Certified
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">
											Achieved ISO 22000 certification in 2010, demonstrating
											our commitment to food safety management.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle className="text-xl font-semibold">
											Exporter of the Year
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">
											Recognized as the top exporter in the food processing
											category by the Vietnam Chamber of Commerce and Industry
											in 2018.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle className="text-xl font-semibold">
											Sustainable Business Award
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">
											Awarded for our commitment to sustainable practices and
											positive impact on local farming communities in 2020.
										</p>
									</CardContent>
								</Card>
							</div>
						</div>

						<div className="text-center">
							<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
								Join Our Journey
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								Discover how Tuthaco is working towards a sustainable and
								delicious future. Explore our product range or get in touch to
								learn more about partnership opportunities.
							</p>
							<div className="flex justify-center space-x-4">
								<Button asChild size="lg">
									<Link href="/products">
										Our Products
										<ChevronRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<Link href="/contact">
										Contact Us
										<ChevronRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>

			<FooterComponent />
		</div>
	);
}
