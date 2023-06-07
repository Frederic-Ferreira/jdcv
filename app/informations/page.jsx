import Image from "next/image"
function Informations(props) {
  return (
    <div className="infos flex flex-col gap-8 tetx-lexend px-20">
      <div className="flex gap-10">
        <div className="flex flex-col gap-20 max-w-2/3">
          <div className="flex flex-col h-[100px] relative">
            <h1 className="text-5xl tracking-wide font-bold">
              We're changing the whole game !
            </h1>
            <Image
              className="absolute bottom-0 right-0"
              src="/images/home/gem-party.svg"
              width={50}
              height={50}
              alt="icon de confetti"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Informations
