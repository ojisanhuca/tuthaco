import React from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeaderComponent() {
  return (
    <header className="bg-white shadow-md px-4 lg:px-6 h-16 flex items-center fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/images/tuthaco.png"
            alt="Tuthaco Logo"
            width={120}
            height={40}
            className="mr-2"
          />
          <span className="sr-only">Tuthaco</span>
        </Link>
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/en/about-us"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">About Tuthaco</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Learn about our company history, vision, and achievements.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/en/about-us/history">Company History</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/en/about-us/vision-mission">Vision & Mission</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/en/about-us/achievements">Achievements</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <span className="text-gray-300">|</span>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/en/products/canned-pineapple">Canned Pineapple</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/en/products/canned-lychee">Canned Lychee</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/en/products/pickled-baby-cucumber">Pickled Baby Cucumber</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/en/products/canned-cherry-tomatoes">Canned Cherry Tomatoes</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <span className="text-gray-300">|</span>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md" href="/en/production-process">
                  Production Process
                </NavigationMenuLink>
              </NavigationMenuItem>
              <span className="text-gray-300">|</span>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md" href="/en/media">
                  Media
                </NavigationMenuLink>
              </NavigationMenuItem>
              <span className="text-gray-300">|</span>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md" href="/en/contact-us">
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden lg:inline-flex">EN</Button>
          <Button variant="ghost" size="sm" className="hidden lg:inline-flex">VN</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/en/about-us" className="text-lg font-medium">About Us</Link>
                <Link href="/en/products" className="text-lg font-medium">Products</Link>
                <Link href="/en/production-process" className="text-lg font-medium">Production Process</Link>
                <Link href="/en/media" className="text-lg font-medium">Media</Link>
                <Link href="/en/contact-us" className="text-lg font-medium">Contact Us</Link>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm">EN</Button>
                  <Button variant="outline" size="sm">VN</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}