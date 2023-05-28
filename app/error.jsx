"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Error({ error, reset }) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col gap-10 text-lexend items-center px-20 mt-[200px]">
      <h2 className="text-2xl text-center font-normal mb-4">
        Oups, une erreur est survenue
      </h2>
      <h2 className="text-2xl text-center font-medium mb-4">
        {error.message || "Something went wrong!"}
      </h2>
      <div className="flex items-center gap-10">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-black"
          onClick={() => router.back()}
        >
          Go back
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
