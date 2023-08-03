"use client"
import Places from "@app/components/SearchBar/Places"
import Dates from "@app/components/SearchBar/Dates"
import People from "@app/components/SearchBar/People"
import Button from "@app/components/Button"
import Modal from "@app/components/Modal"
import { useEffect, useState, useRef } from "react"
import Events from "@app/components/SearchBar/Events"
import moment from "moment"

const SearchBar = ({ barWidth, event }) => {
  const [showModal, setShowModal] = useState(false)
  const [people, setPeople] = useState(null)
  const [postCode, setPostCode] = useState(null)
  const [events, setEvents] = useState(null)
  const [dates, setDates] = useState(null)

  const searchBarRef = useRef(null)

  const handleOpenModal = () => {
    if (!showModal) {
      setShowModal(true)
      searchBarRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
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
        !event.target.closest(".events") &&
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
      className="search-bar flex flex-col items-center search-bar relative  w-full"
    >
      <div
        className={
          "grid grid-cols-11 bg-white rounded-lg search-bar-shadow  " + barWidth
        }
      >
        <Places handleSelect={setPostCode} />
        <Dates handleSelect={setDates} />
        <People handleSelect={setPeople} />
        <Events handleSelect={setEvents} />
        <Button
          style="flex items-center justify-center text-sm rounded-lg bg-black py-2 px-4 text-white hover:bg-opacity-80 col-span-1 truncate hover:cursor-pointer"
          text="Rechercher"
          event={() => {
            handleCloseModal()
            event({
              post_code: postCode || null,
              start_date:
                dates?.length > 1
                  ? moment(dates[0]).format("YYYY-MM-DD")
                  : null,
              end_date:
                dates?.length > 1
                  ? moment(dates[1]).format("YYYY-MM-DD")
                  : null,
              nb_people: people || null,
              events: events || null,
            })
          }}
        />
      </div>
      {showModal && <Modal />}
    </div>
  )
}

export default SearchBar
