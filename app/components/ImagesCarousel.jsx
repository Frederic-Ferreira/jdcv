"use client"
import Image from "next/image"
import { LeftOutlined, RightOutlined } from "@node_modules/@ant-design/icons"
import { v4 as uid } from "uuid"
import { useState } from "react"

function ImagesCarousel({ images }) {
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
    <div className="carousel col-span-3 flex h-[200px] rounded-xl overflow-hidden items-center relative">
      <LeftOutlined
        onClick={handleLeftClick}
        className="hover:cursor-pointer font-bold text-2xl text-gray-300 absolute left-0 z-10 hover:text-white"
      />
      <div className="flex h-full overflow-x-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            width: "300px",
            height: "100%",
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image) => (
            <img
              key={uid()}
              src={"http://127.0.0.1:3001/api/images/" + image}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                flexShrink: 0,
              }}
              alt="Photos de logement"
            />
          ))}
        </div>
      </div>
      <RightOutlined
        onClick={handleRightClick}
        className="hover:cursor-pointer text-2xl text-gray-300 absolute right-0 hover:text-white z-10"
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

export default ImagesCarousel
