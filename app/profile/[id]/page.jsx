"use client"
import Profile from "@app/components/Profile"
import { userStore } from "@config/store"
import { useEffect, useState } from "react"
import axios from "@config/axios"

function Page({ params }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const { user } = userStore()

  useEffect(() => {
    async function call() {
      try {
        const res = await axios.get(`/profile/${params.id}`)
        const { profile } = res?.data
        setCurrentUser(profile)
      } catch (e) {
        throw new Error("Il semble y avoir un problème avec le serveur")
      }
      setIsFetching(false)
    }
    call()
  }, [user])

  return (
    <div className="px-32 py-20">
      <Profile
        isFetching={isFetching}
        user={currentUser}
        id={user?.id_profile}
      />
    </div>
  )
}

export default Page
