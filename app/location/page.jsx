"use client"
import { useState } from "react"
import First from "@app/location/components/First"
import Second from "@app/location/components/Second"

function Page(props) {
  const [page, setPage] = useState(1)
  return (
    <div>
      {page === 1 && <First setPage={setPage} />}
      {page === 2 && <Second setPage={setPage} />}
    </div>
  )
}

export default Page
