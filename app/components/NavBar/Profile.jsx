import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "@app/components/Link"
import { v4 as uid } from "uuid"

const profileLinks = [
  {
    icon: "/images/nav/subscribe.svg",
    name: "Inscription",
    path: "/",
  },
  {
    icon: "/images/nav/deco.svg",
    name: "Connexion",
    path: "/",
  },
  {},
  {
    icon: "/images/nav/info.svg",
    name: "Besoin d'aide ?",
    path: "/",
  },
  {
    icon: "/images/nav/deco.svg",
    name: "Deconnexion",
    path: "/",
  },
]

function Profile(props) {
  const [showMenu, setShowMenu] = useState(false)
  const profileRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        !event.target.closest(".menu")
      ) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div ref={profileRef} className="relative">
      <Image
        className="hover:cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
        src="/images/nav/default-profile.svg"
        height="50"
        width="50"
        alt="avatar"
      />
      {showMenu && (
        <div className="menu menu-shadow flex flex-col text-sm justify-center font-light text-black gap-[20px] absolute top-12 right-10 rounded-xl bg-white h-[215px] w-[200px] px-6">
          {profileLinks.map((link, i) => {
            return i !== 2 ? (
              <div className="flex items-center gap-4" key={uid()}>
                <Image src={link.icon} height="20" width="20" alt={link.name} />
                <div className="group transition duration-300">
                  <Link path={link.path} content={link.name} />
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#EE7526]" />
                </div>
              </div>
            ) : (
              <div className="border-b-2 border-gray-100" />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Profile
