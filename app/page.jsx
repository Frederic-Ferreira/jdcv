import Image from "next/image"
import CustomLink from "@app/components/Link"
import SearchBar from "@app/components/SearchBar/SearchBar"

export default function Home() {
  return (
    <main className="home min-h-screen font-lexend text-white font-light">
      <section className="presentation flex flex-col gap-10 h-screen">
        <div className="flex w-full px-20 pt-20 justify-around">
          <div className="flex max-w-[50%] flex-col gap-5 justify-center text-lexend text-white">
            <h1 className="text-5xl font-normal">
              Trouve LE lieu qui fera de cette soirée un moment{" "}
              <span className="font-bold">inoubliable</span>
            </h1>
            <p className="text-lg">
              J'irai Danser Chez Vous : LA plateforme qui connecte les
              générations. Rejoins-nous dès maintenant et découvre une nouvelle
              façon de faire la fête !
            </p>
            <CustomLink
              content="Comment ça marche ?"
              path="/"
              style="py-2 text-black mr-auto px-6 border-2 border-black hover:bg-black hover:text-white text-center rounded-lg"
            />
          </div>
          <Image
            className="hover:scale-x-[-1] hover:rotate-y-180 transition duration-500 ease-in-out"
            src="/images/home/characters-flip.svg"
            width={500}
            height={500}
            alt="characters partying"
          />
        </div>
        <div className="flex flex-col items-center gap-10 pb-[500px]">
          <h1 className="text-[40px] font-light">Rechercher un lieu de fête</h1>
          <SearchBar />
        </div>
      </section>
    </main>
  )
}
