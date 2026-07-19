'use client'

import { useState } from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" onClick={() => setIsOpen(false)} className="bold-20 flex items-center whitespace-nowrap">
        <span className="text-gray-90">Travel</span>
        <span className="text-green-50">Buddy</span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flexCenter -mr-2 p-2 lg:hidden"
      >
        <Image
          src={isOpen ? "/close.svg" : "/menu.svg"}
          alt=""
          width={24}
          height={24}
          className="inline-block cursor-pointer"
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-30 flex w-full flex-col gap-6 border-t border-gray-10 bg-white px-6 py-8 shadow-md lg:hidden">
          <ul className="flex w-full flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="regular-16 text-gray-50 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            full
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar
