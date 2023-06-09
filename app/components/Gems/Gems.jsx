import Image from "next/image"
import ListCarousel from "@app/components/ListCarousel"
import ImageCard from "@app/components/Gems/ImageCard"
import { imageCardStyles } from "@utils/infos/image-card-style"

function Gems({ category }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4 pl-20">
        <Image
          src="/images/home/gem-party.svg"
          width={30}
          height={30}
          alt="icon serpentin pour faire la fête"
        />
        <h1 className="text-xl">
          Les pépites par{" "}
          <span className="gem-category font-medium">{category}</span>
        </h1>
      </div>
      <ListCarousel list={imageCardStyles} Card={ImageCard} />
    </div>
  )
}

export default Gems
