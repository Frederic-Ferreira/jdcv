"use client"
import Button from "@app/components/Button"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { equipmentList } from "@utils/infos/equipment-list"
import { v4 as uid } from "@node_modules/uuid/wrapper.mjs"
import { locationStore } from "@config/store"

function Seventh() {
  const { userEquipments, setUserEquipments, setPage } = locationStore()
  const [equipments, setEquipments] = useState(userEquipments)

  const updateEquipments = (key) => {
    if (equipments.includes(key)) {
      setEquipments(equipments.filter((equipment) => equipment !== key))
    } else {
      setEquipments([...equipments, key])
    }
  }

  return (
    <div className="flex flex-col gap-8 pt-4 pb-10 px-40">
      <h1 className="text-5xl font-medium">Étape 2</h1>
      <h2 className="text-2xl">Fais sorti ton annonce du lot</h2>
      <p className="font-light">
        Au cours de cette étape, tu pourras ajouter certains des équipements
        et/ou services supplémentaires proposés dans ton logement pour les
        invités, et au moins 5 photos. Tu pourras ensuite ajouter un titre et
        une description.
      </p>
      <h4 className="text-xl">
        Indique aux voyageurs quels sont les équipements présents dans ton
        logement
      </h4>
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="">
          Quel type d'événements ton logement peut il accueillir :
        </h3>
        {equipmentList.map((equipment) => (
          <div
            key={uid()}
            onClick={() => updateEquipments(equipment)}
            className="min-w-[200px] border border-1 border-black py-2 text-center rounded-md hover:cursor-pointer"
            style={{
              backgroundColor: equipments.includes(equipment)
                ? "black"
                : "white",
              color: equipments.includes(equipment) ? "white" : "black",
            }}
          >
            {equipment}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-[38px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(6)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (equipments.length > 0) {
              setUserEquipments(equipments[0])
              setPage(8)
            } else {
              toast.error("Sélectionne au moins un équipement")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Seventh
