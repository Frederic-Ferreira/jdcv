import React from "react"
import Button from "@app/components/Button"
import CustomLink from "@app/components/Link"
import Lottie from "@node_modules/lottie-react"
import firstLocation from "@public/animations/first-location.json"

function First({ setPage }) {
  return (
    <div className="flex gap-8 pt-40 px-40 pb-20">
      <div className="flex flex-col gap-12 w-2/3">
        <h1 className="text-5xl">
          Propose ton logement à la location pour une soirée{" "}
          <span className="font-bold">inoubliable.</span>
        </h1>
        <div className="flex self-start flex-col gap-4 items-center">
          <Button
            style="btn-orange-linear text-white font-medium font-medium px-10 py-2 rounded-md hover:cursor-pointer"
            text="Je propose mon logement"
            event={() => setPage(2)}
          />
          <CustomLink
            path="/"
            style="underline font-medium"
            content="Comment ça marche ?"
          />
        </div>
      </div>
      <Lottie
        className="relative -top-20 h-[500px]"
        animationData={firstLocation}
      />
    </div>
  )
}

export default First
