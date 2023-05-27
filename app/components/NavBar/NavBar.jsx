"use client"
import Image from "next/image"
import Link from "@app/components/Link"
import { navLinks } from "@utils/nav/nav-links"
import { v4 as uid } from "uuid"
import Profile from "@app/components/NavBar/Profile"

export default function NavBar() {
  return (
    <div className="flex px-10 items-center font-lexend justify-between w-full backdrop-blur bg-white opacity-80">
      <Image
        src="/images/nav/logo.svg"
        height="200"
        width="300"
        alt="logo jdcv"
      />
      <div className="flex items-center justify-between w-1/2">
        {navLinks.map((link, i) => (
          <div key={uid()} className="group transition duration-300">
            <Link path={link.path} style={link.style} content={link.name} />
            {i !== navLinks.length - 1 && (
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
            )}
          </div>
        ))}
        <Profile />
      </div>
    </div>
  )
}
