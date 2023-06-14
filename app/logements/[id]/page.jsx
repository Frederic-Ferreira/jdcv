"use client"
import Image from "next/image"
import { DownOutlined } from "@ant-design/icons"
import CustomLink from "@app/components/Link"
import React, { useEffect, useRef, useState } from "react"
import { DateRangePicker } from "@node_modules/@wojtekmaj/react-daterange-picker"
import { v4 as uid } from "uuid"
import moment from "@node_modules/moment"
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  TeamOutlined,
} from "@node_modules/@ant-design/icons"
import Profile from "@app/components/Profile"
import ListCarousel from "@app/components/ListCarousel"
import { detailImageStyle } from "@utils/infos/detail-image-style"
import DetailImageCard from "@app/components/ImageCard"
import { useHousing } from "@app/hooks/Housing"
import { ClipLoader } from "@node_modules/react-spinners"

const logement = [
  "housing-1.png",
  "housing-2.png",
  "housing-3.png",
  "housing-4.png",
  "housing-5.png",
]

const user = {
  id: 1,
  name: "Pierre",
  age: 22,
  note: 5,
  description:
    "Je suis un véritable amoureux de la nature et des grands espaces. Mon châlet sympathique, perché au sommet des montagnes, est le fruit de mon amour pour les panoramas à couper le souffle et les moments de convivialité partagés. Je crois fermement que la beauté des paysages alpins doit être partagée et célébrée avec d'autres âmes festives.",
  interests: ["Sport", "Musique", "Montagne"],
}

const currentUser = {
  id: 2,
}

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
  const [people, setPeople] = useState(0)
  const [showPeopleMenu, setShowPeopleMenu] = useState(false)
  const [dates, setDates] = useState([])
  const [showDateMenu, setShowDateMenu] = useState(false)
  const [housing, setHousing] = useState([])
  const dateMenuRef = useRef(null)
  const peopleMenuRef = useRef(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    async function call() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/public/logement/${+params.id}`
      )
      const data = await response.json()
      setHousing(data)
      setIsFetching(false)
    }
    call()
  }, [])

  const handleShowPeopleMenu = () => {
    setShowPeopleMenu(true)
  }

  const handleHidePeopleMenu = () => {
    setShowPeopleMenu(false)
  }

  const handleShowDateMenu = () => {
    setShowDateMenu(true)
  }

  const handleHideDateMenu = () => {
    setShowDateMenu(false)
  }

  const handleDateChange = (newDates) => {
    setDates(newDates)
    handleHideDateMenu()
  }

  useEffect(() => {
    function handleClickOutsideDate(event) {
      if (dateMenuRef.current && !event.target.closest(".housing")) {
        handleHideDateMenu()
      }
    }

    function handleClickOutsidePeople(event) {
      if (peopleMenuRef.current && !event.target.closest(".people")) {
        handleHidePeopleMenu()
      }
    }

    document.addEventListener("click", handleClickOutsideDate)
    document.addEventListener("click", handleClickOutsidePeople)

    return () => {
      document.removeEventListener("click", handleClickOutsideDate)
      document.removeEventListener("click", handleClickOutsidePeople)
    }
  }, [])

  return (
    <div className="flex flex-col text-lexend gap-8 text-black pb-10">
      {isFetching ? (
        <ClipLoader
          className="self-center justify-self-center"
          size={50}
          color="#EE7526"
        />
      ) : (
        <>
          <section className="header w-2/3 flex flex-col gap-2 px-20">
            <div className="flex items-center gap-20">
              <h1 className="text-xl font-medium">{housing.titre}</h1>
              <div className="category-bg text-sm rounded-lg px-2 py-1 text-white">
                {housing.style.name}
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
                <p className="text-sm">{housing.adresse}</p>
              </div>
            </div>
          </section>
          <section className="photos grid grid-cols-4 grid-rows-7 gap-1 px-20">
            {housing.imgLogements.map((image, index) => {
              return index < 1 ? (
                <img
                  key={uid()}
                  style={{ height: "500px" }}
                  src={"http://localhost:8000/symfony-images/" + image.filename}
                  alt="photo logement"
                  className="col-span-2 row-span-5 grid-image rounded-l-xl"
                />
              ) : index < 3 ? (
                <img
                  key={uid()}
                  style={{ height: "300px" }}
                  src={"http://localhost:8000/symfony-images/" + image.filename}
                  alt="photo logement"
                  className={
                    "col-span-1 row-span-2 w-full h-full " +
                    (index == 2 ? "rounded-tr-xl" : "")
                  }
                />
              ) : (
                <div className="relative col-span-1 row-span-3 w-full h-full hover:cursor-pointer">
                  <img
                    key={uid()}
                    style={{ height: "196px" }}
                    src={
                      "http://localhost:8000/symfony-images/" + image.filename
                    }
                    alt="photo logement"
                    className={
                      " w-full h-full " +
                      (index == 4 ? "rounded-br-xl bg-white opacity-80" : "")
                    }
                  />
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
                {housing.description.split("\n\n").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="flex flex-col bg-[#F5F5F5] rounded-lg gap-6 w-1/3 py-10 px-4 shadow-xl">
              <p>
                à partir de{" "}
                <span className="text-lg font-bold">{housing.prixNuit}€</span> /
                soirée
              </p>
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-sm">Dates</p>
                  <div
                    onClick={handleShowDateMenu}
                    className="housing flex items-center w-[165px] hover:cursor-pointer text-sm bg-white rounded-xl px-2 py-2 font-light justify-between gap-2 border border-1 border-gray-300 relative"
                  >
                    <p
                      className="text-sm truncate"
                      style={
                        dates.length
                          ? { color: "#FF771E", fontWeight: "500" }
                          : { color: "#B1AFAF" }
                      }
                    >
                      {dates.length
                        ? `Du ${moment(dates[0]).format("DD/MM/YYYY")} au
            ${moment(dates[1]).format("DD/MM/YYYY")}`
                        : "Choisir des dates"}
                    </p>
                    <DownOutlined className="text-gray-300" />
                    {showDateMenu && (
                      <div
                        ref={dateMenuRef}
                        className="absolute shadow-lg py-4 px-6 flex flex-col gap-4 top-[52px] -left-20 h-[400px] w-[500px] bg-white rounded-lg"
                      >
                        <h2 className="font-medium text-center text-[#EE7526]">
                          Quand souhaiteriez-vous faire la fête ?
                        </h2>
                        <DateRangePicker
                          value={dates}
                          isOpen={showDateMenu}
                          onChange={handleDateChange}
                          locale="fr"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">Nombre de personnes</p>
                  <div
                    onClick={handleShowPeopleMenu}
                    className="people flex w-[190px] items-center hover:cursor-pointer text-sm bg-white rounded-lg px-2 py-2 font-light justify-between gap-2 border border-1 border-gray-300 relative"
                  >
                    <p
                      className="text-sm truncate"
                      style={
                        people > 0
                          ? { color: "#FF771E", fontWeight: "500" }
                          : { color: "#B1AFAF" }
                      }
                    >
                      {people > 0
                        ? `${people} fêtard(e)${people > 1 ? "s" : ""} ser${
                            people > 1 ? "ont" : "a"
                          } présent(e)${people > 1 ? "s" : ""}`
                        : "Nombre de personnes"}
                    </p>
                    <DownOutlined className="text-gray-300" />
                    {showPeopleMenu && (
                      <div
                        ref={peopleMenuRef}
                        className="absolute shadow-lg text-lexend py-4 px-6 flex flex-col gap-4 top-[52px] -left-20 h-[150px] w-[300px] bg-white rounded-lg"
                      >
                        <div className="flex flex-col items-center gap-6">
                          <p className="font-medium my-auto text-center text-[#EE7526]">
                            Combien de fêtard(e) ?
                          </p>
                          <div className="flex items-center gap-6 text-black text-2xl">
                            <TeamOutlined />
                            <div className="flex items-center gap-4">
                              <MinusCircleOutlined
                                onClick={() =>
                                  people !== 0 && setPeople(people - 1)
                                }
                                className={
                                  people == 0 ? "text-gray-400" : "text-black"
                                }
                              />
                              <p className="w-[30px] text-center">{people}</p>
                              <PlusCircleOutlined
                                onClick={() => setPeople(people + 1)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 h-[100px] -mt-4 rounded-lg bg-white overflow-hidden">
                <img
                  src={`http://localhost:8000/symfony-images/${housing.imgLogements[0].filename}`}
                  width="33%"
                  height="100%"
                  alt="photo logement"
                />
                <div className="flex flex-col gap-2 my-auto ml-4">
                  <p className="font-medium truncate w-[220px]">
                    {housing.titre}
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/housing/details/reservation/people.svg"
                      width={15}
                      height={15}
                      alt="icon de personnes"
                    />
                    <p className="text-sm">{housing.nbPersonne}</p>
                    <Image
                      src="/images/housing/details/reservation/room.svg"
                      width={15}
                      height={15}
                      alt="icon de personnes"
                    />
                    <p className="text-sm">12</p>
                    <Image
                      src="/images/housing/details/reservation/bed.svg"
                      width={15}
                      height={15}
                      alt="icon de personnes"
                    />
                    <p className="text-sm">5</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-sm justify-between">
                  <p className="underline">Frais de service JDCV</p>
                  <p>{housing.prixNuit * 0.14}€</p>
                </div>
                <div className="flex items-center text-sm justify-between">
                  <p className="underline">Taxes</p>
                  <p>{housing.prixNuit * 0.14 * 0.2}€</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-lg font-bold">
                <p>Total</p>
                <p>
                  {housing.prixNuit +
                    housing.prixNuit * 0.14 +
                    housing.prixNuit * 0.14 * 0.2}
                  €
                </p>
              </div>
              <CustomLink
                path="/"
                content="Réserver"
                style="category-bg text-lg tracking-wide text-white font-medium text-center w-full py-2 rounded-lg hover:opacity-90"
              />
            </div>
          </section>
          <section className="host flex gap-8 px-20">
            <div className="flex flex-col gap-4 w-2/3">
              <h2 className="gem-category-underline w-[240px] text-xl font-medium underline">
                Vous ferez la fête avec :
              </h2>
              <Profile user={user} currentUser={currentUser} />
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
      )}
    </div>
  )
}

export default Page
