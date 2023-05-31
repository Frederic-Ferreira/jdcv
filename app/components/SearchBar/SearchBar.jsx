"use client"
import Places from "@app/components/SearchBar/Places"
import Map from "@app/components/SearchBar/Map"
import Modal from "@app/components/Modal"
import { useEffect, useState } from "react"
const SearchBar = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".places")) {
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
      onClick={handleOpenModal}
      className="search-bar relative w-full px-20 grid grid-cols-9 rounded-lg shadow-lg "
    >
      <Places />
      <Map />
      {showModal && <Modal />}
    </div>
  )
}

export default SearchBar
