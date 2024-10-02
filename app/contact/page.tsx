import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import HeaderComponent from "@/components/header";

export default function Contact() {
	return (
		<div className="flex flex-col min-h-screen">
			<HeaderComponent />

			<main className="flex-1 py-16 mt-16">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
							Contact Us
						</h1>
						<p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
							{
								"Whether you have questions about our products, want to place an order, or are interested in partnering with us, don't hesitate to reach out."
							}
						</p>

						<div className="grid gap-8 md:grid-cols-2">
							<div>
								<h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
								<form className="space-y-4">
									<div>
										<Label htmlFor="name">Name</Label>
										<Input id="name" placeholder="Your Name" />
									</div>
									<div>
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											type="email"
											placeholder="your@email.com"
										/>
									</div>
									<div>
										<Label htmlFor="subject">Subject</Label>
										<Input id="subject" placeholder="What is this regarding?" />
									</div>
									<div>
										<Label htmlFor="message">Message</Label>
										<Textarea id="message" placeholder="Your message here..." />
									</div>
									<Button type="submit">Send Message</Button>
								</form>
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-6">Contact Information</h2>
								<div className="space-y-4">
									<Card>
										<CardHeader>
											<CardTitle className="flex items-center">
												<Mail className="mr-2" />
												Email
											</CardTitle>
										</CardHeader>
										<CardContent>
											<a
												href="mailto:info@tuthaco.com"
												className="text-blue-600 hover:underline"
											>
												info@tuthaco.com
											</a>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle className="flex items-center">
												<Phone className="mr-2" />
												Phone
											</CardTitle>
										</CardHeader>
										<CardContent>
											<a
												href="tel:+84123456789"
												className="text-blue-600 hover:underline"
											>
												+84 123 456 789
											</a>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle className="flex items-center">
												<MapPin className="mr-2" />
												Address
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p>
												123 Tuthaco Street, Thanh Hoa City, Thanh Hoa Province,
												Vietnam
											</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle className="flex items-center">
												<Clock className="mr-2" />
												Business Hours
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p>Monday - Friday: 8:00 AM - 5:00 PM</p>
											<p>Saturday: 9:00 AM - 12:00 PM</p>
											<p>Sunday: Closed</p>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>

						<div className="mt-16">
							<h2 className="text-2xl font-bold mb-6 text-center">
								Our Location
							</h2>
							<div className="aspect-video rounded-lg overflow-hidden">
								<Image
									src="/images/company-1.jpeg?height=450&width=800"
									alt="Map of Tuthaco location"
									width={800}
									height={450}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="w-full py-6 bg-gray-100">
				<div className="container mx-auto px-4 md:px-6">
					<div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
						<p className="text-xs text-zinc-500 dark:text-zinc-400">
							© 2024 Tuthaco. All rights reserved.
						</p>
						<nav className="flex gap-4 sm:gap-6">
							<Link
								className="text-xs hover:underline underline-offset-4"
								href="#"
							>
								Terms of Service
							</Link>
							<Link
								className="text-xs hover:underline underline-offset-4"
								href="#"
							>
								Privacy
							</Link>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	);
}
