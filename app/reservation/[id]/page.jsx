"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ClipLoader } from "react-spinners"
import Lottie from "@node_modules/lottie-react"
import congrats from "@public/animations/congrats.json"
import ReservationService from "@app/services/Reservation"

function Congrats({ params }) {
  const router = useRouter()

  const [price, setPrice] = useState(null)
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setPrice(localStorage.getItem("price"))
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    const createPayment = async () => {
      const response = await ReservationService.createPayment(
        price,
        params.id,
        token
      )

      if (response.status !== 200) {
        throw new Error("Erreur lors de la création du paiement ...")
      } else {
        setIsLoading(false)
        setTimeout(() => {
          router.push("/")
        }, 5000)
      }
    }

    if (price && token) {
      createPayment()
    }
  }, [price, token])

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 px-80 text-center">
      {isLoading ? (
        <div
          className="
          h-screen
          flex
          flex-col
          justify-center
          items-center
        "
        >
          <ClipLoader size={50} color="#EE7526" />
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center">Félicitations !</h1>
          <h2 className="text-2xl font-bold text-center">
            Le paiement lié à ta réservation a bien été pris en compte !
          </h2>
          <p>Le propriétaire sera averti par mail de ta location.</p>
          <Lottie
            className="absolute -top-20 h-[700px]"
            animationData={congrats}
          />
        </>
      )}
    </div>
  )
}

export default Congrats
