"use client"
import { useState } from "react"
import { locationStore } from "@config/store"
import First from "@app/location/views/First"
import Second from "@app/location/views/Second"
import Third from "@app/location/views/Third"
import Fourth from "@app/location/views/Fourth"
import Fifth from "@app/location/views/Fifth"
import Sixth from "@app/location/views/Sixth"
import Seventh from "@app/location/views/Seventh"
import Eighth from "@app/location/views/Eighth"
import Ninth from "@app/location/views/Ninth"
import Tenth from "@app/location/views/Tenth"
import Eleventh from "@app/location/views/Eleventh"
import Twelfth from "@app/location/views/Twelfth"
import Final from "@app/location/views/Final"

function Page(props) {
  const { page } = locationStore()
  const [category, setCategory] = useState("")
  const [address, setAddress] = useState(null)
  const [rooms, setRooms] = useState(0)
  const [people, setPeople] = useState(0)
  const [equipments, setEquipments] = useState([])

  const selectRoomsAndPeople = (rooms, people) => {
    setRooms(rooms)
    setPeople(people)
  }

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
    </div>
  )
}

export default Page
