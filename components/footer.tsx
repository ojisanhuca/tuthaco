import React from 'react'
import Link from "next/link"

export default function FooterComponent() {
  return (
    <footer className="w-full py-6 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 Tuthaco. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}