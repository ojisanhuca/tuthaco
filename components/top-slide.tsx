"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopSlide() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		"/images/company-1.jpeg",
		"/images/company-2.jpeg",
		"/images/company-3.jpeg",
		"/images/company-4.jpeg",
	];

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(timer);
	}, [slides.length]);

	return (
		<section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
			{slides.map((slide, index) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
						index === currentSlide ? "opacity-100" : "opacity-0"
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
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
						Welcome to Tuthaco
					</h1>
					<p className="text-xl md:text-2xl mb-8">
						Your trusted partner in canned fruits and vegetables since 2003
					</p>
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
	);
}
