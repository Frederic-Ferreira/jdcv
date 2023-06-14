"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Button from "@app/components/Button"
import ReserveCard from "@app/components/ReserveCard"
import { ClipLoader } from "react-spinners"
import moment from "moment"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

function Page({ searchParams }) {
  const [cardNumber, setCardNumber] = useState("")
  const [housing, setHousing] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [crypto, setCrypto] = useState("")
  const [date, setDate] = useState("")
  const [dates, setDates] = useState(searchParams.dates || [])
  const [people, setPeople] = useState(searchParams.people || 0)
  const router = useRouter()

  const handleReservation = () => {
    if (!cardNumber || !crypto || !date) {
      toast.error("Veuillez remplir tous les champs")
    } else {
      toast.success("Votre réservation a bien été prise en compte")
      setTimeout(() => {
        router.push("/reservation/confirmation")
      }, 1000)
    }
  }

  useEffect(() => {
    async function call() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/public/logement/${+searchParams.id}`
      )
      const data = await response.json()
      setHousing(data)
      setIsFetching(false)
    }
    call()
  }, [])

  return (
    <div className="flex justify-between px-40 py-20">
      <div className="flex flex-col gap-10 w-1/2">
        <h1 className="text-3xl font-medium">
          Confirmer la réservation et payer
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Récapitulatif de la soirée :</h2>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Date :</h3>
            <p>
              {dates.length
                ? `Du ${moment(dates[0]).format("DD/MM/YYYY")} au
            ${moment(dates[1]).format("DD/MM/YYYY")}`
                : ""}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Nombre d'invités :</h3>
            <p>
              {people > 0
                ? `${people} fêtard(e)${people > 1 ? "s" : ""} ser${
                    people > 1 ? "ont" : "a"
                  } présent(e)${people > 1 ? "s" : ""}`
                : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium mb-4">Paiement</h2>
          <input
            className="border border-1 border-[#DDDDDD] p-4 rounded-t-lg"
            type="password"
            placeholder="Numéro de carte"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="flex items-center border border-1 border-[#DDDDDD] rounded-b-lg overflow-hidden">
            <input
              className="border-r border-1 border-[#DDDDDD] rounded-bl-lg p-4 w-1/2"
              type="text"
              placeholder="Date d'expiration"
              value={date}
              onChange={(e) => {
                if (date.length === 1 || date.length === 4) {
                  setDate(e.target.value + "/")
                } else {
                  setDate(e.target.value)
                }
              }}
            />
            <input
              className="rounded-br-lg p-4 w-1/2"
              type="password"
              placeholder="Cryptogramme"
              value={crypto}
              onChange={(e) => setCrypto(e.target.value)}
            />
          </div>
          <div className="flex items-center"></div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Conditions d'annulation</h2>
          <p>
            Annulation gratuite pendant 48 heures. Si tu annules avant le 24
            juin, tu auras droit à un remboursement partiel.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Rappel important !</h2>
          <p>
            Nous demandons à tous les invités de se souvenir de quelques règles
            simples qui contribueront à rendre ton séjour agréable, pour toi
            comme pour les hôtes.
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/images/home/gem-party.svg"
              alt="confetti"
              height={25}
              width={25}
            />
            <p>
              Respecte le règlement intérieur et les conditions et espaces fixés
              par ton hôte dans sa propriété. Traite le logement de ton hôte
              comme si c'était le tiens.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/home/gem-party.svg"
              alt="confetti"
              height={25}
              width={25}
            />
            <p>Traite le logement de ton hôte comme si c'était le tiens.</p>
          </div>
        </div>
        <div className="text-sm">
          En cliquant sur le bouton ci-dessous, j'accepte les conditions
          suivantes : Règlement intérieur de l'hôte, Règles de base pour les
          voyageurs, Politique J'irais Danser Chez Vous de remplacement
          d'hébergement et de remboursement et je donne mon accord pour que JDCV
          débite mon mode de paiement si je suis responsable de dommages.
        </div>
        <Button
          event={handleReservation}
          text="Confirmer et payer"
          style="px-6 py-2 mx-20 text-center rounded-lg text-white category-bg hover:opacity-90 hover:cursor-pointer"
        />
      </div>
      {isFetching ? (
        <ClipLoader
          className="relative top-30 right-20"
          size={50}
          color="#EE7526"
        />
      ) : (
        <ReserveCard
          eventPeople={setPeople}
          eventDates={setDates}
          datesParams={searchParams.dates}
          peopleParams={searchParams.people}
          style={{ height: "450px", width: "400px" }}
          housing={housing}
        />
      )}
    </div>
  )
}

export default Page
