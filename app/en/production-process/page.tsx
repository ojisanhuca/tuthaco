import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

export default function ProductionProcess() {
	return (
		<div className="flex flex-col min-h-screen">
			<HeaderComponent />
			<main className="flex-1 py-16 mt-16">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
							Our Production Process
						</h1>
						<p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
							At Tuthaco, we take pride in our meticulous production process
							that ensures the highest quality canned fruits and vegetables.
							From farm to can, every step is carefully monitored and executed.
						</p>

						<div className="space-y-12">
							<ProcessStep
								number={1}
								title="Harvesting"
								description="Our fruits and vegetables are harvested at peak ripeness to ensure the best flavor and nutritional value."
								imageSrc="/images/company-1.jpeg?height=300&width=400"
							/>
							<ProcessStep
								number={2}
								title="Sorting and Cleaning"
								description="The harvested produce is carefully sorted and thoroughly cleaned to remove any impurities."
								imageSrc="/images/company-2.jpeg?height=300&width=400"
								reverse
							/>
							<ProcessStep
								number={3}
								title="Preparation"
								description="Fruits and vegetables are prepared according to their specific requirements - peeled, sliced, or left whole as needed."
								imageSrc="/images/company-3.jpeg?height=300&width=400"
							/>
							<ProcessStep
								number={4}
								title="Canning"
								description="The prepared produce is carefully packed into cans along with any necessary liquid (juice, syrup, or brine)."
								imageSrc="/images/company-4.jpeg?height=300&width=400"
								reverse
							/>
							<ProcessStep
								number={5}
								title="Sealing and Cooking"
								description="Cans are sealed and then cooked at high temperatures to ensure food safety and preserve flavor."
								imageSrc="/images/company-3.jpeg?height=300&width=400"
							/>
							<ProcessStep
								number={6}
								title="Quality Control"
								description="Every batch undergoes rigorous quality control checks to ensure it meets our high standards."
								imageSrc="/images/company-2.jpeg?height=300&width=400"
								reverse
							/>
							<ProcessStep
								number={7}
								title="Labeling and Packaging"
								description="The cans are labeled with product information and packaged for distribution."
								imageSrc="/images/company-1.jpeg?height=300&width=400"
							/>
						</div>

						<div className="mt-16">
							<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
								Our Commitment to Quality
							</h2>
							<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
								<Card>
									<CardHeader>
										<CardTitle className="text-xl font-semibold">
											Food Safety
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">
											We adhere to strict food safety standards throughout our
											production process, ensuring that our products are safe
											for consumption.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle className="text-xl font-semibold">
											Sustainability
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">
											Our production process is designed to minimize waste and
											reduce environmental impact, supporting sustainable
											agriculture practices.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle className="text-xl font-semibold">
											Traceability
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">
											We maintain full traceability of our products from farm to
											can, ensuring transparency and accountability in our
											supply chain.
										</p>
									</CardContent>
								</Card>
							</div>
						</div>

						<div className="mt-16 text-center">
							<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
								Experience the Tuthaco Difference
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								Our meticulous production process results in canned fruits and
								vegetables that retain their natural flavors, textures, and
								nutritional benefits.
							</p>
							<Button asChild size="lg">
								<Link href="/en/products">
									Explore Our Products
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

interface ProcessStepProps {
	number: number;
	title: string;
	description: string;
	imageSrc: string;
	reverse?: boolean;
}

function ProcessStep({
	number,
	title,
	description,
	imageSrc,
	reverse = false,
}: ProcessStepProps) {
	return (
		<div
			className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
		>
			<div className="md:w-1/2">
				<Image
					src={imageSrc}
					alt={title}
					width={400}
					height={300}
					className="rounded-lg shadow-lg"
				/>
			</div>
			<div className="md:w-1/2">
				<div className="flex items-center mb-4">
					<div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4">
						{number}
					</div>
					<h3 className="text-2xl font-bold">{title}</h3>
				</div>
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
}
