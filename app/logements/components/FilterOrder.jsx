"use client"
import { useEffect, useState } from "react"

function FilterOrder({ filter, updateFilters }) {
  const [isActive, setIsActive] = useState(false)
  const [containerClassName, setContainerClassName] = useState("")
  const handleClick = () => {
    updateFilters(filter.key)
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (isActive) {
      setContainerClassName(
        "flex items-center justify-center text-lexend hover:cursor-pointer border bg-black text-white hover:bg-white hover:text-black border-black border-1 rounded-xl py-2 px-6"
      )
    } else {
      setContainerClassName(
        "flex items-center justify-center text-lexend hover:cursor-pointer border text-black hover:bg-black hover:text-white border-black border-1 rounded-xl py-2 px-6"
      )
    }
  }, [isActive])

  return (
    <div onClick={handleClick} className={containerClassName}>
      {filter.text}
    </div>
  )
}

export default FilterOrder
