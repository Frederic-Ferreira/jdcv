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
    <div className="carousel flex w-full h-full items-center">
      <LeftOutlined
        onClick={handleLeftClick}
        className="hover:cursor-pointer text-xl text-gray-300"
      />
      <div className="flex w-full h-full overflow-x-hidden relative">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Image
              key={uid()}
              src={image.src}
              width={200}
              height={200}
              alt="Photos de logement"
            />
          ))}
        </div>
      </div>
      <RightOutlined
        onClick={handleRightClick}
        className="hover:cursor-pointer text-xl text-gray-300"
      />
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={uid()}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentImageIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleBubbleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
