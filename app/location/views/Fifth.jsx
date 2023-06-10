"use client"
import dynamic from "next/dynamic"
import Button from "@app/components/Button"
import { useState } from "react"
import { toast } from "react-hot-toast"
import Address from "@app/location/components/Address"

const Map = dynamic(() => import("@app/location/components/Map"), {
  ssr: false,
})

function Fifth({ setPage, onSelect }) {
  const [position, setPosition] = useState(null)

  const handleLocationSelect = (suggestion) => {
    const { latitude, longitude, title, address } = suggestion
    setPosition({
      title,
      latitude,
      longitude,
    })
  }

  return (
    <div className="flex flex-col gap-8 pt-4 pb-10 px-40">
      <h1 className="text-5xl font-medium">Étape 1</h1>
      <h2 className="text-2xl">Parle nous de ton logement</h2>
      <p className="font-light">
        Au cours de cette étape, nous allons te demander quel type de logement
        tu proposes et si les voyageurs pourront le réserver dans son
        intégralité ou si tu ne loues qu'une partie. Nous te demanderons ensuite
        d'indiquer son emplacement et sa capacité d'accueil.
      </p>
      <h4 className="text-xl">Où est situé ton logement ?</h4>
      <h5 className="text-lg font-light -mt-4">
        Ton adresse est uniquement communiquée aux voyageurs une fois leur
        réservation effectuée
      </h5>
      <div className="flex gap-8 h-[200px] w-full -mt-4">
        <Map position={position} />
        <Address onSelect={handleLocationSelect} />
      </div>
      <div className="flex items-center justify-between -mt-4">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(4)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (position) {
              onSelect(position)
              setPage(6)
            } else {
              toast.error("Sélectionne une adresse")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Fifth
