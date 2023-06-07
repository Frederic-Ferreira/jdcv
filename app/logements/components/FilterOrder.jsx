"use client"
import { useState } from "react"

function FilterOrder({ filter, updateFilters }) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      onClick={handleClick}
      className={
        "flex items-center justify-center text-lexend hover:cursor-pointer border border-1 border-black rounded-xl py-2 px-4 " +
        (isActive
          ? "bg-black text-white hover:opacity-80"
          : "bg-white text-black hover:bg-black hover:text-white")
      }
    >
      {filter.text}
    </div>
  )
}

export default FilterOrder
