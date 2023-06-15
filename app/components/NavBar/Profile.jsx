"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "@app/components/Link"
import { v4 as uid } from "uuid"
import { userStore } from "@config/store"
import Button from "@app/components/Button"
import toast from "react-hot-toast"

function Profile(props) {
  const [showMenu, setShowMenu] = useState(false)
  const [profileLinks, setProfileLinks] = useState([])
  const [avatar, setAvatar] = useState([])
  const profileRef = useRef(null)
  const { user, reset } = userStore()

  const handleLogout = () => {
    reset()
    toast.success("Vous êtes déconnecté(e)")
    setShowMenu(false)
  }

  useEffect(() => {
    if (user) {
      setProfileLinks([
        {
          icon: "/images/nav/subscribe.svg",
          name: "Profile",
          path: "/profile/1",
        },
        {},
        {
          icon: "/images/nav/deco.svg",
          name: "Deconnexion",
          path: "/",
          event: handleLogout,
        },
      ])
      setAvatar("http://localhost:8000/symfony-images/" + user.avatar)
    } else {
      setProfileLinks([
        {
          icon: "/images/nav/deco.svg",
          name: "Connexion",
          path: "/connexion",
        },
        {},
        {
          icon: "/images/nav/subscribe.svg",
          name: "Inscription",
          path: "/inscription",
        },
      ])
      setAvatar("/images/nav/default-profile.svg")
    }
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
      <img
        className="profile hover:cursor-pointer rounded-full"
        onClick={() => setShowMenu(!showMenu)}
        src={avatar}
        style={{ height: 50, width: 50 }}
        alt="avatar"
      />
      {showMenu && (
        <div className="menu menu-shadow flex flex-col text-sm justify-center font-light text-black gap-[20px] absolute top-12 right-10 rounded-xl bg-white h-[150px] w-[200px] px-6">
          {profileLinks.map((link, i) => {
            return link?.path ? (
              <div className="flex items-center gap-4" key={uid()}>
                <Image src={link.icon} height="20" width="20" alt={link.name} />
                <div className="link group transition duration-300">
                  {link.name !== "Deconnexion" ? (
                    <Link path={link.path} content={link.name} />
                  ) : (
                    <Button
                      style="hover:cursor-pointer"
                      text={link.name}
                      event={handleLogout}
                    />
                  )}
                  {}
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
