import Button from "@app/components/Button"
import { useState } from "react"
import { toast } from "react-hot-toast"

function Sixth({ setPage }) {
  const [people, setPeople] = useState("")
  const [rooms, setRooms] = useState("")

  const checkIfNumbers = (pep, rom) => {
    const roomNumber = Number(rom)
    const peopleNumber = Number(pep)

    return !(isNaN(roomNumber) || isNaN(peopleNumber))
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
        Informations principales concernant ton logement
      </h4>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <h3 className="text-lg">Nombre d'invités maximum</h3>
          <input
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="15"
            className="w-[50px] h-[40px] border border-1 border-[#DADADA] bg-[#F8F7F7] rounded-md pl-[15px]"
          />
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-lg">Chambres</h3>
          <input
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            placeholder="3"
            className="w-[50px] h-[40px] border border-1 border-[#DADADA] bg-[#F8F7F7] rounded-md pl-[20px]"
          />
        </div>
      </div>
      <div className="flex items-center mt-[108px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(5)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (rooms && people) {
              if (!checkIfNumbers(people, rooms)) {
                toast.error("Les champs doivent être des nombres")
                return
              }
              setPage(7)
            } else {
              toast.error("Remplis tous les champs")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Sixth
