"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { v4 as uid } from "uuid"
import Profile from "@app/components/Profile"
import ListCarousel from "@app/components/ListCarousel"
import { detailImageStyle } from "@utils/infos/detail-image-style"
import DetailImageCard from "@app/components/ImageCard"
import { ClipLoader } from "@node_modules/react-spinners"
import ReserveCard from "@app/components/ReserveCard"
import HousingHooks from "@app/hooks/Housing"
import { userStore } from "@config/store"

const occupe = [
  "Gobelets",
  "Sono",
  "Jeux de société / Puzzle",
  "Machine à barpapapa",
  "Wi-Fi",
  "Jacuzzi",
  "Barbecue",
  "Terasse",
]

const occupetoi = ["Playlist", "Boissons", "Snacks"]

function Page({ params }) {
  const [housing, setHousing] = useState(null)
  const [owner, setOwner] = useState(null)
  const [token, setToken] = useState(null)
  const { user } = userStore()

  const { data, isFetching } = HousingHooks.useHousing({
    id: params.id,
    token,
  })

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    if (data && !isFetching) {
      console.log(data)
      setHousing(data.housing)
      setOwner(data.owner)
    }
  }, [data])

  return (
    <div className="flex flex-col text-lexend gap-8 text-black pb-10">
      {!isFetching && housing ? (
        <>
          <section className="header w-2/3 flex flex-col gap-2 px-20">
            <div className="flex items-center gap-20">
              <h1 className="text-xl font-medium">{housing.title}</h1>
              <div className="category-bg text-sm rounded-lg px-2 py-1 text-white">
                {housing.style}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              {/*<div className="flex items-center gap-2">*/}
              {/*  <Image*/}
              {/*    src="/images/housing/details/star.svg"*/}
              {/*    width={16}*/}
              {/*    height={16}*/}
              {/*    alt="étoile"*/}
              {/*  />*/}
              {/*  <p className="text-sm">4.5</p>*/}
              {/*</div>*/}
              {/*<p>•</p>*/}
              {/*<p className="underline">12 commentaires</p>*/}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/housing/details/place.svg"
                  width={16}
                  height={16}
                  alt="logo emplacement"
                />
                <p className="text-sm">{housing.address}</p>
              </div>
            </div>
          </section>
          <section className="photos grid grid-cols-4 grid-rows-7 gap-1 px-20">
            {housing.photos.split(",").map((image, index) => {
              return index < 1 ? (
                <img
                  key={uid()}
                  style={{ height: "500px" }}
                  src={"http://127.0.0.1:3001/api/images/" + image}
                  alt="photo logement"
                  className="col-span-2 row-span-5 grid-image rounded-l-xl"
                />
              ) : index < 3 ? (
                <img
                  key={uid()}
                  style={{ height: "300px" }}
                  src={"http://127.0.0.1:3001/api/images/" + image}
                  alt="photo logement"
                  className={
                    "col-span-1 row-span-2 w-full h-full " +
                    (index == 2 ? "rounded-tr-xl" : "")
                  }
                />
              ) : (
                <div
                  key={uid()}
                  className="relative col-span-1 row-span-3 w-full h-full hover:cursor-pointer"
                >
                  <img
                    style={{ height: "196px" }}
                    src={"http://127.0.0.1:3001/api/images/" + image}
                    alt="photo logement"
                    className={
                      " w-full h-full " +
                      (index == 4 ? "rounded-br-xl bg-white opacity-80" : "")
                    }
                  />
                  {index == 4 && (
                    <p className="absolute text-white text-4xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                      + 8
                    </p>
                  )}
                  {/*{index == 4 && (*/}
                  {/*  <p className="absolute text-white text-4xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">*/}
                  {/*    + 8*/}
                  {/*  </p>*/}
                  {/*)}*/}
                </div>
              )
            })}
          </section>
          <section className="presentation-reservation flex gap-8 px-20 mt-8">
            <div className="flex flex-col gap-8 w-2/3">
              <h2 className="gem-category-underline w-[125px] text-xl font-medium underline">
                Présentation
              </h2>
              <p className="text-lg font-light">
                {housing?.description?.split("\n\n").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <ReserveCard housing={housing} />
          </section>
          <section className="host flex gap-8 px-20">
            <div className="flex flex-col gap-4 w-2/3">
              <h2 className="gem-category-underline w-[240px] text-xl font-medium underline">
                Vous ferez la fête avec :
              </h2>
              <Profile
                isFetching={isFetching}
                user={owner}
                currentUser={user?.id_user}
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/images/home/characters-flip.svg"
                width={500}
                height={500}
                alt="personnages"
              />
            </div>
          </section>
          <section className="take-care flex flex-col gap-8 px-20 pb-10">
            <h2 className="gem-category-underline w-[180px] text-xl font-medium">
              Je m'occupe de :
            </h2>
            <div className="flex flex-wrap flex-col gap-4 max-h-[170px] mr-auto">
              {occupe.map((item, index) => (
                <div
                  key={uid()}
                  className="flex items-center gap-4 w-[220px] mx-4"
                >
                  <Image
                    src="/images/housing/details/check.svg"
                    width={30}
                    height={30}
                    alt="icon check"
                  />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <h2 className="gem-category-underline w-[240px] text-xl font-medium">
              Vous vous occupez de :
            </h2>
            <div className="flex flex-wrap flex-col gap-4 max-h-[170px] mr-auto">
              {occupetoi.map((item, index) => (
                <div key={uid()} className="flex items-center gap-4 w-[200px]">
                  <Image
                    src="/images/housing/details/check.svg"
                    width={30}
                    height={30}
                    alt="icon check"
                  />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="gems flex flex-col gap-12">
            <h1 className="text-3xl font-medium px-20">
              Autres pépites à proximité
            </h1>
            <ListCarousel list={detailImageStyle} Card={DetailImageCard} />
          </section>
        </>
      ) : (
        <ClipLoader
          className="self-center justify-self-center"
          size={50}
          color="#EE7526"
        />
      )}
    </div>
  )
}

export default Page
