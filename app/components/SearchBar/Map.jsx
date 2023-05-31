"use client"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { DateRangePicker } from "@wojtekmaj/react-daterange-picker"

function Map() {
  const [dates, setDates] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleHideMenu = () => {
    setShowMenu(false)
  }

  const handleDateChange = (newDates) => {
    setDates(newDates)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !event.target.closest(".dates")) {
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
      className="dates flex border-l border-gray-200 gap-2 bg-white pl-6 pr-2 py-4 col-span-3 relative hover:cursor-pointer z-20"
    >
      <Image
        src="/images/home/searchbar/calendar.svg"
        width={20}
        height={20}
        alt="calendar icon"
      />
      <p
        className="text-sm"
        style={
          dates.length
            ? { color: "#E4696D", fontWeight: "500" }
            : { color: "#B1AFAF" }
        }
      >
        {dates.length ? dates : "Date"}
      </p>
      {showMenu && (
        <div
          ref={menuRef}
          className="absolute py-4 px-6 flex flex-col gap-4 top-[52px] -left-4 h-[300px] bg-white rounded-lg"
        >
          <DateRangePicker
            value={dates}
            isOpen={showMenu}
            onChange={handleDateChange}
            locale="fr"
          />
        </div>
      )}
    </div>
  )
}

export default Map
