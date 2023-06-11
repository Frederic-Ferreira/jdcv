"use client"
import Button from "@app/components/Button"
import { useState } from "react"
import { toast } from "react-hot-toast"

function Ninth({ setPage, onSelect }) {
  const [title, setTitle] = useState("")

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
      <h4 className="text-xl">Donne un titre accrocheur à ton annonce</h4>
      <div className="flex flex-col gap-4 w-1/2">
        <h3 className="text-[#B1AFAF]">Tu pourras le modifier plus tard.</h3>
        <input
          type="text"
          value={title}
          maxLength={40}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-[#F8F7F7] bg-[#F8F7F7] rounded-md px-4 py-2"
          placeholder="Maison spacieuse avec terrasse aménagée"
        />
        <p>{title.length}/40 caractères max</p>
      </div>
      <div className="flex items-center mt-[90px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(8)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (title) {
              setPage(10)
            } else {
              toast.error("Décris ton logement")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Ninth
