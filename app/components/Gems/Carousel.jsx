import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import ImageCard from "@app/components/Gems/ImageCard"
import { imageCardStyles } from "@utils/image-card-style"
import { v4 as uid } from "uuid"

function Carousel(props) {
  return (
    <div className="flex items-center gap-8 px-4">
      <LeftOutlined className="hover:cursor-pointer text-4xl text-gray-300" />
      <div className="flex gap-3 overflow-x-auto">
        {imageCardStyles.map((style) => (
          <ImageCard
            key={uid()}
            src={style.src}
            category={style.category}
            number={style.number}
          />
        ))}
      </div>
      <RightOutlined className="hover:cursor-pointer text-4xl text-gray-300" />
    </div>
  )
}

export default Carousel
