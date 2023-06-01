import Image from "next/image"
import Carousel from "@app/components/Gems/Carousel"
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
      <Carousel />
    </div>
  )
}

export default Gems
