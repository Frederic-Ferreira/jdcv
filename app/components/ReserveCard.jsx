import React, { useEffect, useRef, useState } from "react"
import moment from "@node_modules/moment"
import {
  DownOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  TeamOutlined,
} from "@node_modules/@ant-design/icons"
import { DateRangePicker } from "@node_modules/@wojtekmaj/react-daterange-picker"
import Image from "@node_modules/next/image"
import Link from "next/link"

function ReserveCard({
  housing,
  style,
  datesParams,
  peopleParams,
  eventPeople,
  eventDates,
  eventPrice,
}) {
  const [people, setPeople] = useState(+peopleParams || 0)
  const [showPeopleMenu, setShowPeopleMenu] = useState(false)
  const [dates, setDates] = useState(datesParams || [])
  const [showDateMenu, setShowDateMenu] = useState(false)
  const [numberOfDays, setNumberOfDays] = useState(0)
  const [total, setTotal] = useState(0)
  const dateMenuRef = useRef(null)
  const peopleMenuRef = useRef(null)

  useEffect(() => {
    const days = moment(dates[1]).diff(moment(dates[0]), "days")
    setTotal(
      dates.length > 0 && days === 0
        ? housing.price * 1 +
            Math.round(housing.price * 1 * 0.14) +
            Math.round(housing.price * 1 * 0.14 * 0.2)
        : dates.length > 0 && days > 0
        ? housing.price * days +
          Math.round(housing.price * days * 0.14) +
          Math.round(housing.price * days * 0.14 * 0.2)
        : 0
    )
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
    const days = moment(newDates[1]).diff(moment(newDates[0]), "days")
    setNumberOfDays(days)
    const totalPrice =
      newDates.length > 0 && days === 0
        ? housing.price * 1 +
          Math.round(housing.price * 1 * 0.14) +
          Math.round(housing.price * 1 * 0.14 * 0.2)
        : newDates.length > 0 && days > 0
        ? housing.price * days +
          Math.round(housing.price * days * 0.14) +
          Math.round(housing.price * days * 0.14 * 0.2)
        : 0
    setTotal(totalPrice)
    eventPrice && eventPrice(totalPrice * 100)
    eventDates && eventDates(newDates)
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
    <div
      style={style}
      className="flex flex-col bg-[#F5F5F5] rounded-lg gap-6 w-1/3 py-10 px-4 shadow-xl"
    >
      <p>
        à partir de <span className="text-lg font-bold">{housing.price}€</span>{" "}
        / soirée
      </p>
      <div className="flex items-center w-full justify-between gap-2">
        <div className="flex w-1/2 flex-col gap-2">
          <p className="text-sm">Dates</p>
          <div
            onClick={handleShowDateMenu}
            className="housing flex items-center hover:cursor-pointer text-sm bg-white rounded-xl px-2 py-2 font-light justify-between gap-2 border border-1 border-gray-300 relative"
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
                  value={dates.map((date) =>
                    moment(date, "DD-MM-YYYY").toDate()
                  )}
                  isOpen={showDateMenu}
                  onChange={handleDateChange}
                  locale="fr"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <p className="text-sm">Nombre de personnes</p>
          <div
            onClick={handleShowPeopleMenu}
            className="people flex items-center hover:cursor-pointer text-sm bg-white rounded-lg px-2 py-2 font-light justify-between gap-2 border border-1 border-gray-300 relative"
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
                        onClick={() => {
                          if (people !== 0) {
                            setPeople(people - 1)
                            eventPeople && eventPeople(people - 1)
                          }
                        }}
                        className={people == 0 ? "text-gray-400" : "text-black"}
                      />
                      <p className="w-[30px] text-center">{people}</p>
                      <PlusCircleOutlined
                        onClick={() => {
                          setPeople(people + 1)
                          eventPeople && eventPeople(people + 1)
                        }}
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
          src={`http://127.0.0.1:3001/api/images/${housing.photos[0]}`}
          width="33%"
          height="100%"
          alt="photo logement"
        />
        <div className="flex flex-col gap-2 my-auto ml-4">
          <p className="font-medium truncate w-[220px]">{housing.title}</p>
          <div className="flex items-center gap-2">
            <Image
              src="/images/housing/details/reservation/people.svg"
              width={15}
              height={15}
              alt="icon de personnes"
            />
            <p className="text-sm">{housing.nb_people}</p>
            <Image
              src="/images/housing/details/reservation/room.svg"
              width={15}
              height={15}
              alt="icon de personnes"
            />
            <p className="text-sm">{housing.nb_room}</p>
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
          <p>
            {dates.length > 1 && numberOfDays === 0
              ? Math.round(housing.price * 1 * 0.14)
              : Math.round(housing.price * numberOfDays * 0.14)}
            €
          </p>
        </div>
        <div className="flex items-center text-sm justify-between">
          <p className="underline">Taxes</p>
          <p>
            {dates.length > 1 && numberOfDays === 0
              ? Math.round(housing.price * 1 * 0.14 * 0.2)
              : Math.round(housing.price * numberOfDays * 0.14 * 0.2)}
            €
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between text-lg font-bold">
        <p>Total</p>
        <p>{total}€</p>
      </div>
      {!style && (
        <Link
          href={{
            pathname: "/reservation",
            query: {
              id: housing.id_housing,
              dates:
                dates.length > 0
                  ? [
                      moment(dates[0]).format("DD-MM-YYYY"),
                      moment(dates[1]).format("DD-MM-YYYY"),
                    ]
                  : [],
              people: +people,
            },
          }}
          className="category-bg text-lg tracking-wide text-white font-medium text-center w-full py-2 rounded-lg hover:opacity-90"
        >
          Réserver
        </Link>
      )}
    </div>
  )
}

export default ReserveCard
