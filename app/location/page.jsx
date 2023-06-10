"use client"
import { useState } from "react"
import First from "@app/location/views/First"
import Second from "@app/location/views/Second"
import Third from "@app/location/views/Third"
import Fourth from "@app/location/views/Fourth"
import Fifth from "@app/location/views/Fifth"
import Sixth from "@app/location/views/Sixth"
import Seventh from "@app/location/views/Seventh"

function Page(props) {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("")
  const [address, setAddress] = useState(null)

  return (
    <div>
      {page === 1 && <First setPage={setPage} />}
      {page === 2 && <Second setPage={setPage} />}
      {page === 3 && <Third setPage={setPage} setCategory={setCategory} />}
      {page === 4 && <Fourth setPage={setPage} />}
      {page === 5 && <Fifth setPage={setPage} onSelect={setAddress} />}
      {page === 6 && <Sixth setPage={setPage} />}
      {page === 7 && <Seventh setPage={setPage} />}
    </div>
  )
}

export default Page
