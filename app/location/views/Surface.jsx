"use client"
import Button from "@app/components/Button"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { locationStore } from "@config/store"

function Surface() {
  const { setPage, userChoice, setUserChoice, userCategory } = locationStore()
  const [choice, setChoice] = useState(userChoice)

  const updateChoice = (key) => {
    setChoice(key)
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
      <h4 className="text-xl">
        Parmi les propositions suivantes, laquelle décrit le mieux ton logement
        ?
      </h4>
      <div className="flex gap-8">
        <div
          onClick={() => updateChoice("entier")}
          className="flex flex-col gap-4 p-4 border-2 rounded-lg border-black max-w-[420px] hover:cursor-pointer"
          style={{
            backgroundColor: choice === "entier" ? "black" : "white",
            color: choice === "entier" ? "white" : "black",
          }}
        >
          <h1 className="text-2xl font-medium">Logement entier</h1>
          <p className="font-light">
            Les invités pourront utiliser la totalité de la propriété lors de la
            soirée.
          </p>
        </div>
        <div
          onClick={() => updateChoice("partie")}
          className="flex flex-col gap-4 p-4 border-2 rounded-lg border-black max-w-[420px] hover:cursor-pointer"
          style={{
            backgroundColor: choice === "partie" ? "black" : "white",
            color: choice === "partie" ? "white" : "black",
          }}
        >
          <h1 className="text-2xl font-medium">Une partie du logement</h1>
          <p className="font-light">
            Les invités pourront utiliser uniquement un certain espace défini de
            la propriété lors de la soirée.
          </p>
        </div>
      </div>
      <div className="flex items-center mt-[80px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(3)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (choice) {
              setUserChoice(choice)
              setPage(5)
            } else {
              toast.error("Sélectionne une option")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Surface
