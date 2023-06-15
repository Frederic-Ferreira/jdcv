"use client"
import Image from "next/image"
import CustomLink from "@app/components/Link"
import SearchBar from "@app/components/SearchBar/SearchBar"
import InfoCard from "@app/components/InfoCard"
import Gems from "@app/components/Gems/Gems"
import { infoCards } from "@utils/infos/info-cards"
import { gems } from "@utils/infos/gems"
import { v4 as uid } from "uuid"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

export default function Home() {
  const iconRef = useRef(null)
  const router = useRouter()
  const handleIconClick = () => {
    const searchBar = document.querySelector(".search-bar")

    searchBar.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Modifiez ce seuil selon vos besoins
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          iconRef.current.style.display = "none"
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    const searchBar = document.querySelector(".search-bar")
    observer.observe(searchBar)

    return () => {
      observer.disconnect()
    }
  }, [])

  function handleBarSearch(args) {
    let string = ""
    const { nbPersonne, event, startDate, endDate, departement } = args
    if (nbPersonne) {
      string += `nbPersonne=${Number(nbPersonne)}&`
    }
    if (departement) {
      string += `departement=${Number(departement)}&`
    }
    if (event) {
      string += `event=${event[0]}&`
    }
    if (startDate) {
      string += `startDate=${startDate}&`
    }
    if (endDate) {
      string += `endDate=${endDate}`
    }
    router.push(`/logements?${string}`)
  }

  return (
    <main className="home min-h-screen font-lexend text-white font-light">
      <section className="presentation flex flex-col gap-10 h-full pb-32">
        <div className="flex w-full px-20 pt-10 justify-around">
          <div className="flex max-w-[50%] flex-col gap-5 justify-center text-lexend text-white">
            <h1 className="text-5xl font-normal">
              Trouve LE lieu qui fera de cette soirée un moment{" "}
              <span className="font-bold">inoubliable</span>
            </h1>
            <p className="text-lg">
              J'irai Danser Chez Vous : LA plateforme qui connecte les
              générations. Rejoins-nous dès maintenant et découvre une nouvelle
              façon de faire la fête !
            </p>
            <CustomLink
              content="Comment ça marche ?"
              path="/informations"
              style="py-2 text-black mr-auto px-6 border-2 border-black hover:bg-black hover:text-white text-center rounded-lg"
            />
          </div>
          <Image
            className="hover:scale-x-[-1] hover:rotate-y-180 transition duration-500 ease-in-out"
            src="/images/home/characters-flip.svg"
            width={500}
            height={500}
            alt="characters partying"
          />
          <Image
            src="/images/home/hand.svg"
            width={40}
            height={40}
            ref={iconRef}
            onClick={handleIconClick}
            className="animate-bounce fixed bottom-0 right-10 hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-[40px] font-light">Rechercher un lieu de fête</h1>
          <SearchBar event={handleBarSearch} barWidth="w-3/4" />
        </div>
        <div className="flex items-center justify-center my-16">
          <CustomLink
            path="/logements"
            content={"Afficher la carte"}
            icon={
              <Image
                src="/images/home/map.svg"
                width={20}
                height={20}
                alt="map icon"
              />
            }
            style="flex items-center gap-4 text-xl justify-center rounded-lg bg-black py-4 px-8 text-white hover:bg-opacity-80 col-span-1 truncate hover:cursor-pointer"
          />
        </div>
      </section>
      <section className="informations h-[400px] flex justify-center gap-10 relative">
        <div className="absolute flex gap-20 items-center -top-12">
          {infoCards.map((info) => (
            <InfoCard
              key={uid()}
              src={info.src}
              alt={info.alt}
              title={info.title}
              content={info.content}
            />
          ))}
        </div>
      </section>
      <section className="gems flex flex-col gap-10 text-black h-full pb-20">
        <h1 className="text-4xl tracking-wide pl-20">Juste pour la soirée</h1>
        {gems.map((gem) => (
          <Gems key={uid()} category={gem.category} images={gem.images} />
        ))}
      </section>
      <section className="values flex flex-col items-center text-black text-center gap-10 h-full py-20">
        <h1 className="text-4xl tracking-wide">
          Notre mission : créer des moments de{" "}
          <span className="gem-category font-medium">partage</span>
        </h1>
        <p className="text-sm text-[#707070] w-2/3">
          Nous comprenons que mettre ton bien en location pour des soirées ou
          événements peut être source d'inquiétude, c'est pour cela que nous
          avons mis en place des mesures pour garantir la sécurité et la
          satisfaction des propriétaires.
        </p>
        <div className="flex gap-20 items-center">
          <Image
            className="hover:scale-x-[-1] hover:rotate-y-180 transition duration-500 ease-in-out"
            src="/images/home/value-1.svg"
            width={150}
            height={200}
            alt="dessin d'un homme qui danse"
          />
          <CustomLink
            path="/informations"
            content="Nos valeurs"
            style="py-2 text-black mr-auto px-14 border-2 border-black hover:bg-black hover:text-white text-center rounded-lg"
          />
          <Image
            className="hover:scale-x-[-1] hover:rotate-y-180 transition duration-500 ease-in-out"
            src="/images/home/value-2.svg"
            width={150}
            height={200}
            alt="dessin d'une fille qui danse"
          />
        </div>
      </section>
    </main>
  )
}
