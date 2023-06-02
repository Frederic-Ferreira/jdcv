"use client"
import Image from "next/image"
function ImageCard({ src, category, number, pixels }) {
  return (
    <div className="flex flex-col h-[275px] min-w-[180px] rounded-lg relative hover:cursor-pointer">
      <Image
        fill={true}
        className="backdrop-opacity-60" // just an example
        src={src}
        alt={category}
        style={{ borderRadius: "20px", opacity: 0.6 }}
      />
      <div className="absolute bottom-8 w-full h-1/3 flex flex-col gap-2 text-center font-normal ">
        <p className="text-sm mt-auto">{category}</p>
        <p className="text-xs">+ de {number} pépites</p>
      </div>
    </div>
  )
}

export default ImageCard
