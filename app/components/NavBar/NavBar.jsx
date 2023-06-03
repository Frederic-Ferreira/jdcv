import Image from "next/image"
import Link from "@app/components/Link"
import { v4 as uid } from "uuid"
import Profile from "@app/components/NavBar/Profile"
import { navLinks } from "@utils/nav-links"

export default function NavBar() {
  return (
    <div className="nav flex fixed top-0 px-10 items-center font-lexend justify-between w-full bg-white backdrop-blur-md bg-opacity-50 z-50">
      <Link
        content={
          <Image
            src="/images/nav/logo.svg"
            height="100"
            width="200"
            alt="logo jdcv"
          />
        }
        path="/"
      />
      <div className="flex items-center gap-8">
        {navLinks.map((link, i) => (
          <div key={uid()} className="group transition duration-300 text-sm">
            <Link style={link.style} content={link.name} path={link.path} />
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
