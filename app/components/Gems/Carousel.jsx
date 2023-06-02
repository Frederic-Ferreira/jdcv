import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import ImageCard from "@app/components/Gems/ImageCard"
import { imageCardStyles } from "@utils/image-card-style"
import { v4 as uid } from "uuid"
import { useEffect, useState, useRef } from "react"

function Carousel(props) {
  const [pixels, setPixels] = useState(0)
  const [translate, setTranslate] = useState(0)
  const carouselContainerRef = useRef(null)
  const carouselRef = useRef(null)

  const handleLeftClick = () => {
    if (translate === 0) return
    setTranslate(translate - 1)
  }

  const handleRightClick = () => {
    const containerWidth = carouselContainerRef.current.offsetWidth
    const carouselWidth = carouselRef.current.scrollWidth
    const translatePixels = 300

    if (translatePixels * translate + containerWidth < carouselWidth) {
      setTranslate(translate + 1)
    }
  }

  const handleResize = () => {
    const containerWidth = carouselContainerRef.current.offsetWidth
    const carouselWidth = carouselRef.current.scrollWidth
    const translatePixels = 300

    if (containerWidth + translatePixels * translate < carouselWidth) {
      setPixels(translatePixels * translate)
    } else {
      const currentTranslate =
        containerWidth + translatePixels * (translate - 1)
      const leftPixels = carouselWidth - currentTranslate
      setPixels(pixels + leftPixels)
    }
  }

  useEffect(() => {
    const containerWidth = carouselContainerRef.current.offsetWidth
    const carouselWidth = carouselRef.current.scrollWidth
    const translatePixels = 300

    if (containerWidth + translatePixels * translate < carouselWidth) {
      setPixels(translatePixels * translate)
    } else {
      const currentTranslate =
        containerWidth + translatePixels * (translate - 1)
      const leftPixels = carouselWidth - currentTranslate
      setPixels(pixels + leftPixels)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [translate])

  return (
    <div className="flex items-center gap-8 px-4">
      <LeftOutlined
        onClick={handleLeftClick}
        className="hover:cursor-pointer text-4xl text-gray-300"
      />
      <div ref={carouselContainerRef} className="overflow-x-auto">
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(-${pixels}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
          className="flex gap-3"
        >
          {imageCardStyles.map((style) => (
            <ImageCard
              key={uid()}
              src={style.src}
              category={style.category}
              number={style.number}
            />
          ))}
        </div>
      </div>
      <RightOutlined
        onClick={handleRightClick}
        className="hover:cursor-pointer text-4xl text-gray-300"
      />
    </div>
  )
}

export default Carousel
