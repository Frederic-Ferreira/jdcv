"use client"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { DateRangePicker } from "@wojtekmaj/react-daterange-picker"
import moment from "moment"
import { searchStore } from "@config/store"

function Dates({ handleSelect }) {
  const { dateSearch, setDateSearch } = searchStore()
  const [dates, setDates] = useState(dateSearch)
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
    setDateSearch(newDates)
    handleSelect(newDates)
    handleHideMenu()
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
      className="dates flex items-center border-l border-gray-200 gap-2 bg-white pl-6 pr-2 py-4 col-span-3 relative hover:cursor-pointer z-20"
    >
      <Image
        src="/images/home/searchbar/calendar.svg"
        width={20}
        height={20}
        alt="calendar icon"
      />
      <p
        className="text-sm truncate"
        style={
          dates.length
            ? { color: "#FF771E", fontWeight: "500" }
            : { color: "#B1AFAF" }
        }
      >
        {dates.length
          ? `Du ${moment(dates[0]).format("DD/MM/YYYY")} au
            ${moment(dates[1]).format("DD/MM/YYYY")}`
          : "Date"}
      </p>
      {showMenu && (
        <div
          ref={menuRef}
          className="absolute shadow-lg py-4 px-6 flex flex-col gap-4 top-[52px] -left-20 h-[400px] w-[500px] bg-white rounded-lg"
        >
          <h2 className="font-medium text-center text-[#EE7526]">
            Quand souhaiteriez-vous faire la fête ?
          </h2>
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

export default Dates
