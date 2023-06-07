"use client"
import Image from "next/image"
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons"
import { useEffect, useState, useRef } from "react"

function People() {
  const [people, setPeople] = useState(0)
  const [showSearchMenu, setShowSearchMenu] = useState(false)
  const menuRef = useRef(null)

  const handleShowMenu = () => {
    setShowSearchMenu(true)
  }

  const handleHideMenu = () => {
    setShowSearchMenu(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !event.target.closest(".people")) {
        handleHideMenu()
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div
      onClick={handleShowMenu}
      className="people flex items-center border-l border-gray-200 gap-2 bg-white pl-6 pr-2 py-4 col-span-3 relative hover:cursor-pointer z-20"
    >
      <Image
        src="/images/home/searchbar/people.svg"
        width={20}
        height={20}
        alt="place icon"
      />
      <p
        className="text-sm truncate"
        style={
          people > 0
            ? { color: "#FF771E", fontWeight: "500" }
            : { color: "#B1AFAF" }
        }
      >
        {people > 0
          ? `${people} fêtard(e)${people > 1 ? "s" : ""} ser${
              people > 1 ? "ont" : "a"
            } présent(e)${people > 1 ? "s" : ""}`
          : "Nombre de personnes"}
      </p>
      {showSearchMenu && (
        <div
          ref={menuRef}
          className="absolute shadow-lg text-lexend py-4 px-6 flex flex-col gap-4 top-[52px] -left-4 h-[150px] w-[300px] bg-white rounded-lg"
        >
          <div className="flex flex-col items-center gap-6">
            <p className="font-medium my-auto text-center text-[#EE7526]">
              Combien de fêtard(e) ?
            </p>
            <div className="flex items-center gap-6 text-black text-2xl">
              <TeamOutlined />
              <div className="flex items-center gap-4">
                <MinusCircleOutlined
                  onClick={() => people !== 0 && setPeople(people - 1)}
                  className={people == 0 ? "text-gray-400" : "text-black"}
                />
                <p className="w-[30px] text-center">{people}</p>
                <PlusCircleOutlined onClick={() => setPeople(people + 1)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default People
