"use client"
import Image from "next/image"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import SearchBar from "@app/components/SearchBar/SearchBar"
import HousingCard from "@app/logements/components/HousingCard"
import { ClipLoader } from "react-spinners"
import { v4 as uid } from "uuid"
import { housings } from "@utils/test-housings"
import { useEffect, useState } from "react"

function Housing(props) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true)
    }, 500)
  }, [])

  return (
    <div className="flex flex-col gap-8 items-center h-full text-lexend mb-20">
      <section className="search-filters flex flex-col w-full">
        <SearchBar />
        <div className="flex items-center h-[55px] w-3/4 overflow-x-auto border-2 border-gray-300 self-center"></div>
      </section>
      <section className="housing-map flex gap-8 w-3/4 h-full">
        <div className="flex flex-col gap-4 w-1/2">
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
          <div className="flex flex-col gap-4">
            {housings.map((housing) => (
              <HousingCard key={uid()} {...housing} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          {/*{hasMounted ? (*/}
          {/*  <ClipLoader size={50} color="#3B82F6FF" />*/}
          {/*) : (*/}
          {/*  <MapContainer*/}
          {/*    center={[51.505, -0.09]}*/}
          {/*    zoom={13}*/}
          {/*    scrollWheelZoom={false}*/}
          {/*  >*/}
          {/*    <TileLayer*/}
          {/*      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
          {/*      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
          {/*    />*/}
          {/*    <Marker position={[51.505, -0.09]}>*/}
          {/*      <Popup>*/}
          {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
          {/*      </Popup>*/}
          {/*    </Marker>*/}
          {/*  </MapContainer>*/}
          {/*)}*/}
        </div>
      </section>
    </div>
  )
}

export default Housing
