"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { locationStore, userStore } from "@config/store"
import { ClipLoader } from "react-spinners"
import Lottie from "@node_modules/lottie-react"
import congrats from "@public/animations/congrats.json"
import axios from "@config/axios"

function Congrats(props) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { user } = userStore()

  const {
    userStyle,
    location,
    userPeople,
    userRooms,
    userEvents,
    userImages,
    userTitle,
    userDescription,
    userPrice,
    userDates,
    userChoice,
    reset,
  } = locationStore()

  useEffect(() => {
    const createLogement = async () => {
      const token = localStorage.getItem("token")

      const data = {
        title: userTitle,
        description: userDescription,
        price: userPrice,
        nb_people: userPeople,
        nb_room: userRooms,
        address: location.address,
        post_code: location.post_code,
        gps: `${location.latitude}, ${location.longitude}`,
        region: location.region,
        photos: userImages,
        start_date: userDates[0],
        end_date: userDates[1],
        style: userStyle,
        events: userEvents,
      }

      const headers = {
        Authorization: token,
      }

      const response = await axios.post("/housing", data, { headers })

      if (response.status !== 200) {
        throw new Error("Erreur lors de la création du logement ...")
      } else {
        setIsLoading(false)
        setTimeout(() => {
          router.push("/")
          reset()
        }, 5000)
      }
    }

    createLogement()
  }, [])

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
          <h1 className="text-4xl font-bold text-center">
            Félicitations, {user.first_name}!
          </h1>
          <h2 className="text-2xl font-bold text-center">
            La communauté J'irai Danser Chez Vous est ravie de te compter parmi
            elle !
          </h2>
          <p>
            Ton annonce sera visible par tout le monde d'ici quelques minutes.
            Pendant ce temps, profite-en pour la compléter et la rendre la plus
            accueillante possible pour tes futurs invités.
          </p>
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
