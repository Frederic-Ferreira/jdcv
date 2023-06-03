"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "@app/components/Link"
import { v4 as uid } from "uuid"
import userStore from "@config/store"
import { profileLinks } from "@utils/menu-panel"

function Profile(props) {
  const [showMenu, setShowMenu] = useState(false)
  const profileRef = useRef(null)
  const { user } = userStore()

  useEffect(() => {
    console.log(user)
  }, [user])

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileRef.current &&
        !event.target.classList.contains("profile") &&
        (!event.target.closest(".menu") || event.target.closest(".link"))
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
        className="profile hover:cursor-pointer"
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
                <div className="link group transition duration-300">
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
