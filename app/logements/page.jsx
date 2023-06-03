"use client"
import Image from "next/image"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import SearchBar from "@app/components/SearchBar/SearchBar"
import HousingCard from "@app/logements/components/HousingCard"
import { ClipLoader } from "react-spinners"
import { v4 as uid } from "uuid"
import { housings } from "@utils/infos/test-housings"
import { useEffect, useState } from "react"

const TOKEN =
  "pk.eyJ1IjoiZnJlZDY5NzgwIiwiYSI6ImNsaHlqYnZsbzA2ODMzbnJzbGViaTJtcW8ifQ.QzSqJW1xDxr9gGFNlEcRQA"

function Housing(props) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <div className="flex flex-col gap-8 items-center text-lexend mb-20">
      <section className="search-filters flex flex-col w-full">
        <SearchBar />
        <div className="flex items-center h-[55px] w-3/4 overflow-x-auto border-2 border-gray-300 self-center"></div>
      </section>
      <section className="housing-map grid grid-cols-7 gap-8 w-3/4 h-full">
        <div className="housing flex flex-col gap-8 col-span-4">
          <div className="flex items-center gap-8">
            <h1 className="text-4xl font-normal">
              Nos <span className="gem-category">meilleures</span> pépites
            </h1>
            <Image
              src="/images/home/gem-party.svg"
              width={30}
              height={30}
              alt="Confetti"
            />
          </div>
          <div className="flex flex-col gap-8">
            {housings.map((housing, i) => (
              <>
                <HousingCard key={uid()} {...housing} />
                {i < housings.length - 1 && (
                  <div className="h-[2px] bg-[#EEEEEE]" />
                )}
              </>
            ))}
          </div>
        </div>
        <div className="map h-full flex items-center justify-center col-span-3">
          {hasMounted ? (
            <MapContainer
              center={[40.8054, -74.0241]}
              zoom={14}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${TOKEN}`}
              />
              <Marker
                position={[40.8054, -74.0241]}
                draggable={true}
                animate={true}
              >
                <Popup>Hey ! I live here</Popup>
              </Marker>
            </MapContainer>
          ) : (
            <ClipLoader size={50} color="#3B82F6FF" />
          )}
        </div>
      </section>
    </div>
  )
}

export default Housing
