"use client"
import Button from "@app/components/Button"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { styleList } from "@utils/infos/style-list"
import { v4 as uid } from "uuid"
import { locationStore } from "@config/store"
import unidecode from "unidecode"

function Style() {
  const { setPage, userStyle, setUserStyle } = locationStore()
  const [selectedStyle, setSelectedStyle] = useState(userStyle)

  const updateCategory = (title) => {
    const style = unidecode(title).toLowerCase()
    setSelectedStyle(style)
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
        Quel type de logement sera à la disposition des invités ?
      </h4>
      <div className="flex flex-wrap items-center gap-6">
        {styleList.map((style) => (
          <div
            key={uid()}
            onClick={() => updateCategory(style.title)}
            className={
              "min-w-[200px] py-2 text-center rounded-md hover:cursor-pointer hover:bg-[" +
              style.color +
              "] hover:text-white"
            }
            style={{
              border: `2px solid ${style.color}`,
              backgroundColor:
                selectedStyle === unidecode(style.title).toLocaleLowerCase()
                  ? style.color
                  : "white",
              color:
                selectedStyle === unidecode(style.title).toLocaleLowerCase()
                  ? "white"
                  : style.color,
            }}
          >
            {style.title}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-[32px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(2)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (selectedStyle) {
              setUserStyle(selectedStyle)
              setPage(4)
            } else {
              toast.error("Sélectionne une catégorie")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Style
