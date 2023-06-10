"use client"
import { useState } from "react"
import First from "@app/location/components/First"
import Second from "@app/location/components/Second"
import Third from "@app/location/components/Third"
import Fourth from "@app/location/components/Fourth"
import Fifth from "@app/location/components/Fifth"

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
    </div>
  )
}

export default Page
