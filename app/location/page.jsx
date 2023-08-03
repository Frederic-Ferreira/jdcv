"use client"
import { useEffect, useState } from "react"
import { locationStore } from "@config/store"
import First from "@app/location/views/Home"
import Second from "@app/location/views/Intro"
import Third from "@app/location/views/Style"
import Fourth from "@app/location/views/Surface"
import Fifth from "@app/location/views/Location"
import Sixth from "@app/location/views/PeopleRoom"
import Seventh from "@app/location/views/Events"
import Eighth from "@app/location/views/Images"
import Ninth from "@app/location/views/Title"
import Tenth from "@app/location/views/Description"
import Eleventh from "@app/location/views/Price"
import Twelfth from "@app/location/views/Dates"
import Final from "@app/location/views/Summary"
import Congrats from "@app/location/views/Congrats"
import { userStore } from "@config/store"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

function Page() {
  const { user } = userStore()
  const { page } = locationStore()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      toast.error("Vous devez être connecté pour accéder à cette page")
      setTimeout(() => {
        router.push("/connexion")
      }, 1000)
    }
  }, [user])

  return (
    <div>
      {page === 1 && <First />}
      {page === 2 && <Second />}
      {page === 3 && <Third />}
      {page === 4 && <Fourth />}
      {page === 5 && <Fifth />}
      {page === 6 && <Sixth />}
      {page === 7 && <Seventh />}
      {page === 8 && <Eighth />}
      {page === 9 && <Ninth />}
      {page === 10 && <Tenth />}
      {page === 11 && <Eleventh />}
      {page === 12 && <Twelfth />}
      {page === 13 && <Final />}
      {page === 14 && <Congrats />}
    </div>
  )
}

export default Page
