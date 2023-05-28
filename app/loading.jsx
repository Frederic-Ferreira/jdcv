"use client"

import { MoonLoader } from "react-spinners"

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
      <MoonLoader size={100} color="#EE7526" />
    </div>
  )
}

export default Loader
