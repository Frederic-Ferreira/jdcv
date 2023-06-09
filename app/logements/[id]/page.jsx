"use client"
import Image from "next/image"
import { DownOutlined } from "@ant-design/icons"

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
      <section className="flex gap-8 px-20 mt-10">
        <div className="flex flex-col gap-8 w-2/3">
          <h2 className="gem-category-underline w-[125px] text-xl font-medium underline">
            Présentation
          </h2>
          <p className="text-sm">
            Bienvenue dans ce charmant chalet excentré en montagne à
            Saint-Pierre-de-Chartreuse ! Niché au cœur des majestueuses Alpes
            françaises, ce chalet pittoresque offre une échappée parfaite pour
            les amoureux de la nature et les passionnés de montagne.
          </p>
          <p className="text-sm">
            Dès votre arrivée, vous serez émerveillé par l'emplacement isolé de
            cette retraite alpine. Situé en marge de la civilisation, vous
            découvrirez un havre de paix entouré par des forêts verdoyantes, des
            sommets imposants et une sérénité absolue. Vous vous sentirez
            instantanément déconnecté du stress de la vie quotidienne,
            permettant à votre esprit de se ressourcer dans ce cadre enchanteur.
          </p>
          <p className="text-sm">
            Le chalet lui-même est un mélange parfait de confort moderne et de
            charme rustique. Les murs en bois chaleureux et les poutres
            apparentes créent une atmosphère accueillante et traditionnelle,
            tandis que les équipements haut de gamme vous garantissent un séjour
            des plus agréables. L'intérieur spacieux comprend un salon
            confortable, une cuisine entièrement équipée et une salle à manger
            conviviale, où vous pourrez partager des repas savoureux préparés
            avec des produits locaux.
          </p>
          <p className="text-sm">
            Alors, si vous recherchez une expérience authentique en montagne,
            alliant la beauté des paysages à une ambiance de fête inoubliable,
            faites confiance à Pierre et son chalet accueillant. Venez célébrer
            la vie, la musique et les rencontres, et repartez avec des souvenirs
            mémorables gravés dans votre cœur.
          </p>
        </div>
        <div className="flex flex-col bg-[#F5F5F5] rounded-lg gap-8 w-1/3 py-10 px-4 shadow-xl">
          <p>
            à partir de <span className="text-lg font-bold">250e</span> / soirée
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Dates</p>
              <div className="flex items-center hover:cursor-pointer text-sm bg-white rounded-lg px-2 py-2 font-light justify-between gap-2 border border-1 border-gray-300">
                <p className="text-gray-300">Choisir des dates</p>
                <DownOutlined className="text-gray-300" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Nombre de personnes</p>
              <div className="flex items-center hover:cursor-pointer text-sm bg-white rounded-lg px-2 py-2 font-light justify-between gap-2 border border-1 border-gray-300">
                <p className="text-gray-300">12 personnes</p>
                <DownOutlined className="text-gray-300" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 h-[100px] rounded-lg bg-white overflow-hidden">
            <img
              src="/images/housing/details/photos/housing-1.png"
              width="33%"
              height="100%"
              alt="photo logement"
            />
            <div className="flex flex-col gap-2">
              <p className="font-medium text-sm">Châlet convivial</p>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/housing/details/reservation/people.svg"
                  width={15}
                  height={15}
                  alt="icon de personnes"
                />
                <p className="text-sm">15</p>
                <Image
                  src="/images/housing/details/reservation/room.svg"
                  width={15}
                  height={15}
                  alt="icon de personnes"
                />
                <p className="text-sm">3</p>
                <Image
                  src="/images/housing/details/reservation/bed.svg"
                  width={15}
                  height={15}
                  alt="icon de personnes"
                />
                <p className="text-sm">15</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
