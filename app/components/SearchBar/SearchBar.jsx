"use client"
import Places from "@app/components/SearchBar/Places"
import Dates from "@app/components/SearchBar/Dates"
import People from "@app/components/SearchBar/People"
import Button from "@app/components/Button"
import Modal from "@app/components/Modal"
import { useEffect, useState, useRef } from "react"
const SearchBar = () => {
  const [showModal, setShowModal] = useState(false)
  const searchBarRef = useRef(null)

  const handleOpenModal = () => {
    if (!showModal) {
      setShowModal(true)
      searchBarRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !event.target.closest(".places") &&
        !event.target.closest(".dates") &&
        !event.target.closest(".people") &&
        (event.target.closest(".modal") ||
          event.target.closest(".presentation"))
      ) {
        handleCloseModal()
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={searchBarRef}
      onClick={handleOpenModal}
      className="flex flex-col items-center search-bar relative w-full"
    >
      <div className="grid grid-cols-9 w-3/4 bg-white rounded-lg shadow-lg">
        <Places />
        <Dates />
        <People />
        <Button
          style="flex items-center justify-center rounded-lg bg-black py-2 px-4 text-white hover:bg-opacity-80 col-span-1 truncate hover:cursor-pointer"
          text="Rechercher"
        />
      </div>
      {showModal && <Modal />}
    </div>
  )
}

export default SearchBar
