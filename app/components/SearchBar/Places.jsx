"use client"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

function Places() {
  const [place, setPlace] = useState(null)
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSearchMenu, setShowSearchMenu] = useState(false)
  const menuRef = useRef(null)

  const handleShowMenu = () => {
    setShowSearchMenu(true)
  }

  const handleHideMenu = () => {
    setShowSearchMenu(false)
  }

  const handleSearch = async (value) => {
    setSearch(value)
    if (value.length >= 3) {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${value}&limit=5`
        )
        const data = await response.json()
        setSuggestions(
          data?.features?.map((feature) => ({
            title: feature.properties.label,
            address: feature.properties.city,
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
            id: feature.properties.id,
          }))
        )
      } catch (error) {
        console.error(error)
      }
    } else {
      setSuggestions([])
    }
  }

  const handleLocationSelect = (suggestion) => {
    const { latitude, longitude, title, address } = suggestion
    setPlace({
      title,
      latitude,
      longitude,
    })
    setSuggestions([])
    setSearch("")
    handleHideMenu()
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !event.target.closest(".places")) {
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
      className="places flex rounded-l-lg gap-2 bg-white pl-6 pr-2 py-4 col-span-2 relative hover:cursor-pointer z-20"
    >
      <Image
        src="/images/home/searchbar/place.svg"
        width={20}
        height={20}
        alt="place icon"
      />
      <p
        className="text-sm"
        style={
          place ? { color: "#E4696D", fontWeight: "500" } : { color: "#B1AFAF" }
        }
      >
        {place ? place.title : "Lieu"}
      </p>
      {showSearchMenu && (
        <div
          ref={menuRef}
          className="absolute py-4 px-6 flex flex-col gap-4 top-[52px] -left-4 h-[300px] bg-white rounded-lg"
        >
          <div className="flex gap-2 items-center mr-2">
            <input
              className="border-2 border-[#B1AFAF] text-black rounded-lg px-2 py-1"
              type="text"
              placeholder="Rechercher un lieu"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Image
              src="/images/home/searchbar/search.svg"
              width={20}
              height={20}
              alt="place icon"
            />
          </div>
          <div className="flex flex-col gap-2 h-[80%] overflow-y-auto">
            {suggestions.length ? (
              suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="flex flex-col gap-1 px-2 py-1 hover:bg-[#F2F2F2] rounded-lg cursor-pointer"
                  onClick={() => handleLocationSelect(suggestion)}
                >
                  <p className="text-gray-500 text-sm">{suggestion.title}</p>
                </div>
              ))
            ) : (
              <p className="font-medium my-auto text-center text-[#EE7526]">
                Quel sera le lieu des festivités ?
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Places