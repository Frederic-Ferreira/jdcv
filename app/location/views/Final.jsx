"use client"
import Button from "@app/components/Button"
import { toast } from "@node_modules/react-hot-toast"
import ImageCard from "@app/components/ImageCard"
import Image from "next/image"
import { locationStore } from "@config/store"

function Final() {
  const {
    setPage,
    userImages,
    userTitle,
    location,
    userCategory,
    userPeople,
    userPrice,
  } = locationStore()

  const img = {
    src: userImages[0]?.data,
    title: userTitle,
    address: location.title,
    category: userCategory,
    people: userPeople,
    price: userPrice,
  }

  return (
    <div className="flex flex-col gap-8 pt-4 pb-10 px-40">
      <h1 className="text-5xl font-medium">Vérifie ton annonce</h1>
      <div className="flex gap-20">
        <div className="h-[330px] w-1/2">
          <ImageCard image={img} />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl">Confirme ton annonce</h2>
          <div
            onClick={() => setPage(3)}
            className="flex items-center gap-4 hover:bg-gray-50 hover:cursor-pointer p-4 rounded-lg"
          >
            <Image
              src="/images/housing/location/edit.svg"
              height={35}
              width={35}
              alt="logo edit"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-medium">
                Modifie les caractéristiques principales
              </h2>
              <p className="font-light">
                Accède au début du réglage des paramètres de ton annonce, afin
                de pouvoir modifier les choix que tu as fais.
              </p>
            </div>
          </div>
          <div
            onClick={() => setPage(11)}
            className="flex items-center gap-4 hover:bg-gray-50 hover:cursor-pointer p-4 rounded-lg"
          >
            <Image
              src="/images/housing/location/calendar.svg"
              height={35}
              width={35}
              alt="logo edit"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-medium">
                Modifie le prix ou la date de disponibilité
              </h2>
              <p className="font-light">
                Un doute sur le prix ou les disponibilités de ton logement ?
                Modifie les à partir de cette page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[72px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(12)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            setPage(14)
          }}
        />
      </div>
    </div>
  )
}

export default Final
