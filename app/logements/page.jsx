"use client"
import Image from "next/image"
import dynamic from "next/dynamic"
import SearchBar from "@app/components/SearchBar/SearchBar"
import HousingCard from "@app/logements/components/HousingCard"
import { v4 as uid } from "uuid"
import { housings } from "@utils/infos/test-housings"

const Map = dynamic(() => import("@app/logements/components/Map"), {
  ssr: false,
})

function Housing(props) {
  return (
    <div className="flex flex-col gap-8 items-center text-lexend mb-20">
      <section className="search-filters flex flex-col w-full">
        <SearchBar barWidth="w-[90%]" />
        <div className="flex items-center h-[55px] w-[90%] overflow-x-auto border-2 border-gray-300 self-center"></div>
      </section>
      <section className="housing-map grid grid-cols-7 gap-8 w-[90%]">
        <div className="housing flex flex-col gap-8 col-span-4 max-h-[600px] overflow-y-auto">
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
              <div key={uid()}>
                <HousingCard {...housing} />
                {i < housings.length - 1 && (
                  <div className="h-[2px] bg-[#EEEEEE]" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="map h-full flex items-center justify-center col-span-3">
          <Map />
        </div>
      </section>
    </div>
  )
}

export default Housing
