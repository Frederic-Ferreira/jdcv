"use client"
import Image from "next/image"
import Link from "next/link"
import ImagesCarousel from "@app/components/ImagesCarousel"
import truncateByWords from "@utils/functions/truncateByWords"
import { v4 as uid } from "@node_modules/uuid"
function HousingCard({
  id,
  label,
  titre,
  best,
  description,
  adresse,
  nbPersonne,
  prixNuit,
  imgLogements,
}) {
  return (
    <div className="housing-card grid grid-cols-7 gap-4 w-full">
      <ImagesCarousel images={imgLogements} />
      <div className="flex flex-col col-span-4 gap-2 font-light text-black">
        <Link key={uid()} href={"/logements/" + id}>
          <div className="label w-1/2 text-center text-sm text-white bg-[#E2209E] rounded-[7px] px-6 py-1 opacity-70">
            Catégorie
          </div>
          <h2 className="text-xl font-light max-h-[33px] truncate">{titre}</h2>
          {best && (
            <div className="flex items-center gap-2">
              <Image
                src="/images/housing/heart.svg"
                width={10}
                height={10}
                alt="Coeur"
              />
              <p className="text-sm font-normal text-[#FF2053]">
                Les meilleures soirées sont ici ;)
              </p>
            </div>
          )}
          <p className="text-sm m-h-[50px]">
            {truncateByWords(description, 10)}
          </p>
          <div className="location flex items-center gap-2 truncate">
            <Image
              src="/images/housing/location.svg"
              width={15}
              height={15}
              alt="Emplacement"
            />
            <h2 className="truncate">{adresse}</h2>
          </div>
          <div className="infos flex items-center justify-between">
            <h3 className="text-lg text-[#B1AFAF]">
              <span className="text-[#4F4F4F]">{nbPersonne}</span> personnes
            </h3>
            <h3 className="text-lg text-[#B1AFAF]">
              <span className="text-[#4F4F4F]">{prixNuit}e</span>/soirée
            </h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HousingCard
