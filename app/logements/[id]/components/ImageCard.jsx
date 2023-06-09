"use client"
import Image from "next/image"
function DetailImageCard({ image }) {
  return (
    <div className="flex flex-col w-[230px] h-[300px] menu-shadow gap-2 rounded-lg hover:cursor-pointer m-2">
      <div className="relative w-full h-1/2">
        <Image
          fill={true}
          className="backdrop-opacity-60 rounded-t-lg"
          src={image.src}
          alt={image.title}
        />
      </div>
      <div className="w-full h-1/2 flex flex-col gap-2 p-2 font-normal ">
        <h3 className="text-sm font-medium">{image.title}</h3>
        <div className="flex items-center gap-2">
          <Image
            src="/images/housing/details/place-red.svg"
            height={12}
            width={12}
            alt="photo logement"
          />
          <p className="text-xs font-light truncate">{image.address}</p>
        </div>
        <div className="text-center px-2 py-1 text-white text-sm rounded-lg bg-[#FF2053] w-1/3">
          {image.category}
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/housing/details/reservation/people.svg"
            height={20}
            width={20}
            alt="logo personnes"
          />
          <p className="text-sm font-light">{image.people}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium text-[#FF2053]">
            {image.price}e{" "}
          </h2>
          <p>/ soirée</p>
        </div>
      </div>
    </div>
  )
}

export default DetailImageCard
