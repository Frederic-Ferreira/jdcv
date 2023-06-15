"use client"
import Profile from "@app/components/Profile"
import { userStore } from "@config/store"
import { useEffect, useState } from "react"

function Page({ params }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const { user } = userStore()

  useEffect(() => {
    async function call() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/public/profile/${+params.id}`
      )
      const data = await response.json()
      setCurrentUser(data)
      setIsFetching(false)
    }
    call()
  }, [user])

  return (
    <div className="px-32 py-20">
      <Profile isFetching={isFetching} user={currentUser} id={user?.id} />
    </div>
  )
}

export default Page
