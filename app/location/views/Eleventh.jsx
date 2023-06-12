"use client"
import Button from "@app/components/Button"
import { useState } from "react"
import { toast } from "react-hot-toast"
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@node_modules/@ant-design/icons"
import { locationStore } from "@config/store"

function Eleventh() {
  const { userPrice, setUserPrice, setPage } = locationStore()
  const [price, setPrice] = useState(userPrice)

  return (
    <div className="flex flex-col gap-8 pt-4 pb-10 px-40">
      <h1 className="text-5xl font-medium">Étape 3</h1>
      <h2 className="text-2xl">Termine et publie ton annonce</h2>
      <p className="font-light">
        Au cours de cette étape, tu pourras fixer un prix initial, choisir des
        dates de disponibilité, et publier ton annonce.
      </p>
      <div className="flex flex-col gap-6 w-1/2">
        <div className="flex items-center justify-center bg-[#EEEEEE] rounded-lg flex-col gap-6 text-black  p-6">
          <div className="flex items-center gap-4">
            <MinusCircleOutlined
              style={{ fontSize: "45px" }}
              onClick={() => price !== 0 && setPrice(price - 10)}
              className={price == 0 ? "text-gray-400" : "text-black"}
            />
            <div className="flex items-center justify-center bg-white rounded-xl h-[100px] w-[300px] text-4xl">
              <input
                className="flex-shrink-0"
                style={{ width: `${price.length ? price.length : 3}ch` }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              €
            </div>
            <PlusCircleOutlined
              style={{ fontSize: "45px" }}
              onClick={() => setPrice(price + 10)}
            />
          </div>
          <h3 className="text-xl">Par soirée</h3>
        </div>
      </div>
      <div className="flex items-center mt-[96px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(10)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (price > 0) {
              setUserPrice(Number(price))
              setPage(12)
            } else {
              toast.error("Le prix doit être supérieur à 0€")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Eleventh
