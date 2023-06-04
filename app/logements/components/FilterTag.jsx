"use client"
import { useState } from "react"

function FilterTag({ filter, updateFilters }) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      onClick={handleClick}
      className={
        "flex items-center justify-center text-lexend w-[200px] hover:cursor-pointer border border-[#FF771E] border-1 rounded-xl py-2 px-4 " +
        (isActive
          ? "bg-[#FF771E] text-white hover:opacity-90"
          : "bg-white text-[#FF771E] hover:bg-[#FF771E] hover:text-white")
      }
    >
      {filter.text}
    </div>
  )
}

export default FilterTag
