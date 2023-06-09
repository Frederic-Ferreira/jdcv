"use client"
import Image from "next/image"
import ImagesCarousel from "@app/components/ImagesCarousel"
import truncateByWords from "@utils/functions/truncateByWords"
function HousingCard({
  label,
  title,
  best,
  description,
  address,
  people,
  price,
  images,
}) {
  return (
    <div className="housing-card grid grid-cols-7 gap-4 w-full">
      <ImagesCarousel images={images} />
      <div className="flex flex-col col-span-4 gap-2 font-light text-black">
        <div className="label w-1/2 text-center text-sm text-white bg-[#E2209E] rounded-[7px] px-6 py-2 opacity-70">
          {label}
        </div>
        <h2 className="text-xl font-light">{title}</h2>
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
        <p className="text-sm m-h-[50px]">{truncateByWords(description, 50)}</p>
        <div className="location flex items-center gap-2 truncate">
          <Image
            src="/images/housing/location.svg"
            width={20}
            height={20}
            alt="Emplacement"
          />
          <h2 className="text-lg truncate">{address}</h2>
        </div>
        <div className="infos flex items-center justify-between">
          <h3 className="text-lg text-[#B1AFAF]">
            <span className="text-[#4F4F4F]">{people}</span> personnes
          </h3>
          <h3 className="text-lg text-[#B1AFAF]">
            <span className="text-[#4F4F4F]">{price}$</span>/soirée
          </h3>
        </div>
      </div>
    </div>
  )
}

export default HousingCard
