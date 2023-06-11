"use client"
import { useState } from "react"
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
  const [page, setPage] = useState(12)
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
      {page === 1 && <First setPage={setPage} />}
      {page === 2 && <Second setPage={setPage} />}
      {page === 3 && <Third setPage={setPage} setCategory={setCategory} />}
      {page === 4 && <Fourth setPage={setPage} />}
      {page === 5 && <Fifth setPage={setPage} onSelect={setAddress} />}
      {page === 6 && (
        <Sixth setPage={setPage} onSelect={selectRoomsAndPeople} />
      )}
      {page === 7 && <Seventh setPage={setPage} onSelect={setEquipments} />}
      {page === 8 && <Eighth setPage={setPage} onSelect={setEquipments} />}
      {page === 9 && <Ninth setPage={setPage} />}
      {page === 10 && <Tenth setPage={setPage} />}
      {page === 11 && <Eleventh setPage={setPage} />}
      {page === 12 && <Twelfth setPage={setPage} />}
      {page === 13 && <Final setPage={setPage} />}
    </div>
  )
}

export default Page
