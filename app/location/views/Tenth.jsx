"use client"
import Button from "@app/components/Button"
import { useState } from "react"
import { toast } from "react-hot-toast"

function Tenth({ setPage }) {
  const [description, setDescription] = useState("")

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
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 w-1/2">
          <h4 className="text-xl">Décris ta propriété</h4>
          <h3 className="text-[#B1AFAF]">
            Parle de ce qui rend ta propriété unique et idéale pour des
            événements.
          </h3>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <textarea
            value={description}
            maxLength={400}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-1 border-[#DADADA] h-[200px] bg-[#F8F7F7] rounded-md px-4 py-2"
            placeholder="Maison spacieuse avec terrasse amménagée"
            style={{ resize: "none" }}
          />
          <p>{`${description.length}/${400}`}</p>
        </div>
      </div>
      <div className="flex items-center mt-[32px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(9)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (description) {
              setPage(11)
            } else {
              toast.error("Décris ton logement")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Tenth
