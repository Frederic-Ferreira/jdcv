"use client"
import Image from "next/image"
import Link from "next/link"
import ImagesCarousel from "@app/components/ImagesCarousel"
import truncateByWords from "@utils/functions/truncateByWords"
import { v4 as uid } from "@node_modules/uuid"

function HousingCard({
  id_housing,
  title,
  description,
  address,
  nb_people,
  price,
  style,
  photos,
  best,
}) {
  return (
    <div className="housing-card flex grid-cols-7 gap-4 h-full w-full">
      <ImagesCarousel images={photos} />
      <div className="flex flex-col col-span-4 gap-6 font-light text-black">
        <Link key={uid()} href={"/logements/" + id_housing}>
          <div className="mb-3 label w-1/2 text-center text-sm text-white bg-[#E2209E] rounded-[7px] px-6 py-1 opacity-70">
            {style}
          </div>
          <h2 className="mb-3 text-xl font-light max-h-[33px] truncate">
            {title}
          </h2>
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
          <p className="mb-3 text-sm m-h-[50px]">
            {truncateByWords(description, 10)}
          </p>
          <div className="mb-3 location flex items-center gap-2 truncate">
            <Image
              src="/images/housing/location.svg"
              width={15}
              height={15}
              alt="Emplacement"
            />
            <h2 className="truncate">{address}</h2>
          </div>
          <div className="infos flex items-center justify-between">
            <h3 className="text-lg text-[#B1AFAF]">
              <span className="text-[#4F4F4F]">{nb_people}</span> personnes
            </h3>
            <h3 className="text-lg text-[#B1AFAF]">
              <span className="text-[#4F4F4F]">{price}e</span>/soirée
            </h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HousingCard
