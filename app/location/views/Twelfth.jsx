"use client"
import Button from "@app/components/Button"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { DateRangePicker } from "@node_modules/@wojtekmaj/react-daterange-picker"

function Twelfth({ setPage, setCategory }) {
  const [dates, setDates] = useState([])

  const handleDateChange = (newDates) => {
    setDates(newDates)
  }

  return (
    <div className="flex flex-col gap-8 pt-4 pb-10 px-40">
      <h1 className="text-5xl font-medium">Étape 3</h1>
      <h2 className="text-2xl">Termine et publie ton annonce</h2>
      <p className="font-light">
        Au cours de cette étape, tu pourras fixer un prix initial, choisir des
        dates de disponibilité, et publier ton annonce.
      </p>
      <div className="flex justify-center h-[200px] items-center w-1/2">
        <DateRangePicker
          value={dates}
          isOpen={true}
          closeCalendar={false}
          onChange={handleDateChange}
          locale="fr"
          className="relative -top-24"
        />
      </div>
      <div className="flex items-center mt-[96px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(11)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (dates.length > 1) {
              setPage(13)
            } else {
              toast.error("Tu dois sélectionner deux dates.")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Twelfth
