"use client"
import { useState } from "react"
import { EnvironmentOutlined } from "@node_modules/@ant-design/icons"
import Image from "next/image"

export default function Address({ onSelect, location }) {
  const [place, setPlace] = useState(location?.title || "")
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState([])

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
            address: feature.properties.label,
            post_code: +feature.properties.postcode,
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
            context: feature.properties.context,
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
    const { address } = suggestion
    onSelect(suggestion)
    setPlace(address)
    setSuggestions([])
    setSearch("")
  }
  return (
    <section className="w-1/2 h-full">
      <div className="flex items-center gap-2 relative">
        <input
          className="w-full border border-[#DADADA] bg-[#F8F7F7] text-black rounded-lg pl-12 pr-2 py-1 h-[40px]"
          type="text"
          placeholder={place ? place : "Recherche"}
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Image
          className="absolute left-4"
          src="/images/home/searchbar/place.svg"
          width={20}
          height={20}
          alt="logo emplacement"
        />
      </div>
      <div className="flex flex-col gap-2 h-[80%] overflow-y-auto mt-2">
        {suggestions.length
          ? suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex flex-col gap-1 px-2 py-1 hover:bg-[#F2F2F2] rounded-lg cursor-pointer"
                onClick={() => handleLocationSelect(suggestion)}
              >
                <div className="flex items-center gap-2 h-[40px]">
                  <EnvironmentOutlined
                    style={{ color: "#E4696D", fontSize: 20 }}
                  />
                  <p className="text-gray-700">{suggestion.address}</p>
                </div>
              </div>
            ))
          : null}
      </div>
    </section>
  )
}
