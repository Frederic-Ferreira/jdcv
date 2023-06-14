"use client"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { v4 as uid } from "uuid"

const listEvents = [
  { title: "Mariage", selected: false },
  { title: "Anniversaire", selected: false },
  { title: "Baptême", selected: false },
  { title: "Soirée", selected: false },
  { title: "Fête", selected: false },
  { title: "Réunion", selected: false },
  { title: "Conférence", selected: false },
]

function Events({ handleSelect }) {
  const [events, setEvents] = useState([])
  const [eventsList, setEventsList] = useState(listEvents)
  const [showSearchMenu, setShowSearchMenu] = useState(false)
  const menuRef = useRef(null)

  const handleShowMenu = () => {
    setShowSearchMenu(true)
  }

  const handleHideMenu = () => {
    setShowSearchMenu(false)
  }

  const handleSelectEvent = (event) => {
    if (events.includes(event.title)) {
      setEvents(events.filter((e) => e !== event.title))
      const newEvents = eventsList.map((e) => {
        if (e.title === event.title) {
          return { ...e, selected: false }
        } else {
          return e
        }
      })
      setEventsList(newEvents)
      handleSelect(newEvents)
    } else {
      setEventsList(
        eventsList.map((e) => {
          if (e.title === event.title) {
            return { ...e, selected: true }
          } else {
            return e
          }
        })
      )
      setEvents([...events, event.title])
      handleSelect([...events, event.title])
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !event.target.closest(".events") &&
        !event.target.closest(".event") &&
        !event.target.classList.contains("selected-event")
      ) {
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
      className="events flex items-center border-l border-gray-200 gap-2 bg-white pl-6 pr-2 py-2 col-span-2 relative hover:cursor-pointer z-20"
    >
      <Image
        src="/images/home/searchbar/event.svg"
        width={20}
        height={20}
        alt="place icon"
      />
      <div
        className={
          "text-sm max-h-[30px] " +
          (events.length > 0
            ? "flex items-center gap-2 overflow-x-auto"
            : "truncate")
        }
        style={
          events.length > 0
            ? { color: "#FF771E", fontWeight: "500" }
            : { color: "#B1AFAF" }
        }
      >
        {events.length > 0
          ? events.map((event, index) => (
              <span
                key={uid()}
                className="selected-event bg-gray-400 text-white rounded-xl px-2 py-2"
              >
                {event}
              </span>
            ))
          : "Type d'événement"}
      </div>
      {showSearchMenu && (
        <div
          ref={menuRef}
          className="absolute shadow-lg text-lexend py-4 px-6 flex flex-col gap-4 top-[52px] -left-4 h-[300px] w-[200px] bg-white rounded-lg"
        >
          <div className="menu-ref flex flex-col gap-2 overflow-y-auto">
            {eventsList.map((event) => (
              <div
                key={uid()}
                className="flex flex-col gap-1 px-2 py-1 hover:bg-[#F2F2F2] rounded-lg cursor-pointer"
                onClick={() => handleSelectEvent(event)}
                style={
                  event.selected === true
                    ? { backgroundColor: "#649BED7F", color: "white" }
                    : { color: "rgb(55 65 81)" }
                }
              >
                <div className="event flex items-center gap-2 h-[40px]">
                  <p className="text-sm">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Events
