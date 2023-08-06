"use client"
import { LoadingOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import Image from "next/image"
import Button from "@app/components/Button"
import ReserveCard from "@app/components/ReserveCard"
import { ClipLoader } from "react-spinners"
import moment from "moment"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { userStore } from "@config/store"
import HousingHooks from "@app/hooks/Housing"
import ReservationService from "@app/services/Reservation"

function Page({ searchParams }) {
  const [housing, setHousing] = useState(null)
  const [token, setToken] = useState(null)
  const [dates, setDates] = useState(searchParams.dates || [])
  const [people, setPeople] = useState(searchParams.people || 0)
  const [price, setPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { user } = userStore()

  const { data, isFetching } = HousingHooks.useHousing(searchParams.id)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    if (data && !isFetching) {
      setHousing(data.housing)
    }
  }, [data, isFetching])

  useEffect(() => {
    if (!user) {
      toast.error("Vous devez être connecté pour accéder à cette page")
      setTimeout(() => {
        router.push("/connexion")
      }, 1000)
    }
  }, [user])

  const handleReservation = async () => {
    if (people == 0 || dates.length < 2) {
      toast.error("Veuillez remplir tous les champs")
    } else {
      setIsLoading(true)
      const reservation = await ReservationService.createReservation(token, {
        id_housing: +searchParams.id,
        start_date: moment(dates[0]).format("YYYY-MM-DD"),
        end_date: moment(dates[1]).format("YYYY-MM-DD"),
      })

      if (reservation.status === 200) {
        const stripe = await ReservationService.getStripeSession(
          token,
          {
            id_housing: housing.id_housing,
            items: [{ id: housing.id_housing, price }],
          },
          reservation.data.reservation.id_reservation
        )
        if (stripe.status === 200) {
          localStorage.setItem("price", price)
          setIsLoading(false)
          router.push(stripe.data.url)
        }
      }
    }
  }

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
            <p className="underline">
              {dates.length
                ? `Du ${moment(dates[0]).format("DD/MM/YYYY")} au
            ${moment(dates[1]).format("DD/MM/YYYY")}`
                : ""}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Nombre d'invités :</h3>
            <p className="underline">
              {people > 0
                ? `${people} fêtard(e)${people > 1 ? "s" : ""} ser${
                    people > 1 ? "ont" : "a"
                  } présent(e)${people > 1 ? "s" : ""}`
                : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Conditions d'annulation</h2>
          <p className="text-[#FF771E]">
            Annulation gratuite pendant 48 heures.
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
      </div>
      {!housing ? (
        <ClipLoader
          className="relative top-30 right-20"
          size={50}
          color="#EE7526"
        />
      ) : (
        <div className="flex flex-col gap-8">
          <ReserveCard
            eventPeople={setPeople}
            eventDates={setDates}
            eventPrice={setPrice}
            datesParams={searchParams.dates}
            peopleParams={searchParams.people}
            style={{ height: "450px", width: "400px" }}
            housing={housing}
          />
          <Button
            event={handleReservation}
            text={isLoading ? <LoadingOutlined /> : "Confirmer et payer"}
            style="px-10 py-2 text-center rounded-lg text-white category-bg hover:opacity-90 hover:cursor-pointer"
          />
        </div>
      )}
    </div>
  )
}

export default Page
