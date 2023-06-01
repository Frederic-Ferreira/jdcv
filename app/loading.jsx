"use client"

import { ClipLoader } from "react-spinners"

const Loader = () => {
  return (
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
  )
}

export default Loader
