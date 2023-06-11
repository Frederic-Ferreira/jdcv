"use client"
import Button from "@app/components/Button"
import { toast } from "@node_modules/react-hot-toast"

function Final({ setPage }) {
  return (
    <div className="flex flex-col gap-8 pt-4 pb-10 px-40">
      <h1 className="text-5xl font-medium">Vérifie ton annonce</h1>
      <div></div>
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

export default Final
