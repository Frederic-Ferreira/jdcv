"use client"
import Image from "next/image"
import { LeftOutlined, RightOutlined } from "@node_modules/@ant-design/icons"
import { v4 as uid } from "uuid"
import { useState } from "react"

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleBubbleClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="carousel col-span-3 flex w-full h-full rounded-xl overflow-hidden items-center relative">
      <LeftOutlined
        onClick={handleLeftClick}
        className="hover:cursor-pointer font-bold text-2xl text-gray-300 absolute left-0 z-20 hover:text-white"
      />
      <div className="flex w-full h-full overflow-x-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image) => (
            <Image
              key={uid()}
              src={image.src}
              width={250}
              height={200}
              alt="Photos de logement"
            />
          ))}
        </div>
      </div>
      <RightOutlined
        onClick={handleRightClick}
        className="hover:cursor-pointer text-2xl text-gray-300 absolute right-0 hover:text-white z-20"
      />
      <div className="flex justify-center mt-2 absolute bottom-2 left-[50%] -translate-x-[50%] hover:cursor-pointer">
        {images.map((_, index) => (
          <div
            key={uid()}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentImageIndex ? "bg-gray-500" : "bg-white"
            }`}
            onClick={() => handleBubbleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel