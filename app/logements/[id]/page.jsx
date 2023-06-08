import Image from "next/image"

const logement = [
  "housing-1.png",
  "housing-2.png",
  "housing-3.png",
  "housing-4.png",
  "housing-5.png",
]

function Page(props) {
  return (
    <div className="flex flex-col text-lexend gap-8 text-black">
      <section className="header w-2/3 flex flex-col gap-2 px-20">
        <div className="flex items-center gap-20">
          <h1 className="text-xl font-medium">
            Châlet convivial excentré en montagne
          </h1>
          <div className="category-bg text-sm rounded-lg px-2 py-1 text-white">
            Châlet
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Image
              src="/images/housing/details/star.svg"
              width={16}
              height={16}
              alt="étoile"
            />
            <p className="text-sm">4.5</p>
          </div>
          <p>•</p>
          <p className="underline">12 commentaires</p>
          <div className="flex items-center gap-2">
            <Image
              src="/images/housing/details/place.svg"
              width={16}
              height={16}
              alt="logo emplacement"
            />
            <p className="text-sm">
              Saint-Pierre-de-Chartreuse, Isère, Auvergne-Rhône-Alpes
            </p>
          </div>
        </div>
      </section>
      <section className="photos grid max-h-[400px] grid-cols-4 grid-rows-7 gap-1 px-20">
        {logement.map((image, index) => {
          return index < 1 ? (
            <img
              src={"/images/housing/details/photos/" + image}
              alt="photo logement"
              className="col-span-2 row-span-5 rounded-l-xl w-full h-full"
            />
          ) : index < 3 ? (
            <img
              src={"/images/housing/details/photos/" + image}
              alt="photo logement"
              className={
                "col-span-1 row-span-2 w-full h-full " +
                (index == 2 ? "rounded-tr-xl" : "")
              }
            />
          ) : (
            <div className="relative col-span-1 row-span-3 w-full h-full hover:cursor-pointer">
              <img
                src={"/images/housing/details/photos/" + image}
                alt="photo logement"
                className={
                  " w-full h-full " +
                  (index == 4 ? "rounded-br-xl bg-white opacity-80" : "")
                }
              />
              {index == 4 && (
                <p className="absolute text-white text-4xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  + 8
                </p>
              )}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Page
