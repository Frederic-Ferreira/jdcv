"use client"
import Image from "next/image"
import Button from "@app/components/Button"
import CustomLink from "@app/components/Link"

function Informations(props) {
  return (
    <div className="infos flex flex-col gap-4 tetx-lexend mt-10">
      <div className="flex gap-20 px-20">
        <div className="flex flex-col gap-20 max-w-2/3 z-20">
          <div className="flex flex-col h-[150px] relative z-20">
            <h1 className="text-5xl tracking-wide font-bold">
              We're changing the whole game !
            </h1>
            <Image
              className="absolute bottom-0 right-[300px] transform rotate-[75deg] origin-center z-20"
              src="/images/home/gem-party.svg"
              width={75}
              height={75}
              alt="icon de confetti"
            />
          </div>
          <div className="flex flex-col text-4xl relative z-10">
            <p className="z-20">Pourquoi</p>
            <p className="z-20">J'irai Danser Chez Vous ?</p>
            <div className="infos-bg h-[580px] w-screen absolute top-0 -ml-20 " />
          </div>
          <p className="-mt-10 z-20">
            Imaginez un monde où tu pourrais organiser des soirées incroyables
            dans des endroits uniques et inattendus. C'est maintenant possible
            grâce à notre plateforme de rencontre de particuliers à particuliers
            !
          </p>
        </div>
        <Image
          src="/images/infos/first-woman.svg"
          width={200}
          height={200}
          alt="dessin d'une fille qui danse"
          style={{
            zIndex: 30,
            position: "relative",
            marginRight: 100,
            top: "-50px",
          }}
        />
      </div>
      <div className="flex flex-col gap-8 -mt-14 px-20 pb-20 z-20">
        <p>
          Nous offrons une expérience exceptionnelle qui te permettras de
          découvrir des cultures différentes, de rencontrer de nouvelles
          personnes et de briser les barrières sociales.
        </p>
        <p>
          Spécialement conçue pour tous ceux qui aiment festoyer dans le
          respect, J’irais danser chez vous est une plateforme gratuite ouverte
          à tous.
        </p>
        <p>
          Imagine organiser une soirée dans un lieu magique, peut-être même
          assister à la soirée en tant que propriétaire, et participer à une
          expérience culturelle unique. J’irais danser chez vous est le lieu de
          rencontre parfait pour les personnes qui cherchent à partager un
          moment convivial dans un endroit privé plus grand que leur propre
          logement et / ou à profiter d'un endroit atypique !
        </p>
        <h2 className="text-2xl tracking-wide text-center text-white">
          Rejoins-nous dès maintenant et découvre une nouvelle façon de faire la
          fête !
        </h2>
      </div>
      <div className="flex gap-8 px-20 z-20">
        <Image
          src="/images/infos/second-woman.svg"
          width={200}
          height={200}
          alt="dessin femme dansant"
          style={{ zIndex: 30 }}
        />
        <div className="flex flex-col gap-6 mt-20">
          <h2 className="text-4xl tracking-wide font-medium">
            Comment danser ensemble ?
          </h2>
          <div className="flex items-center gap-4 text-xs">
            <Button
              text="Pour les hôtes"
              style="bg-[#E2209E] border border-1 border-[#E2209E] rounded-xl text-white px-4 py-1"
            />
            <Button
              text="Pour les invités"
              style="bg-white border border-1 border-gray-400 rounded-xl text-gray-400 px-4 py-1"
            />
          </div>
          <div className="flex flex-col gap-6 font-light">
            <p>
              Nous comprenons que mettre ton bien en location pour des soirées
              ou événements peut être source d'inquiétude, c'est pour cela que
              nous avons mis en place des mesures pour garantir la sécurité et
              la satisfaction des propriétaires.
            </p>
            <p>
              Notre plateforme est équipée d'un système de vérification de
              l'identité des locataires et d'une assurance couvrant les dommages
              éventuels. Nous avons également mis en place des outils pour
              faciliter la communication entre propriétaires et locataires,
              ainsi qu'une équipe de support disponible 24/7 dédiée pour
              répondre à vos questions et préoccupations.
            </p>
            <p>
              Nous sommes engagés à garantir une expérience 100% positive pour
              tous, et nous sommes fiers de notre réputation en matière de
              sécurité, de transparence et de qualité de service.
            </p>
            <CustomLink
              style="mt-4 underline font-medium text-sm"
              content="En savoir plus..."
              path="/"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-8 px-20 z-20">
        <div className="flex flex-col gap-6 mt-20">
          <h2 className="text-4xl tracking-wide font-medium">
            Comment danser ensemble ?
          </h2>
          <div className="flex items-center gap-4 text-xs">
            <Button
              text="Pour les hôtes"
              style="bg-[#ffb700] border border-1 border-[#ffb700] rounded-xl text-white px-4 py-1"
            />
            <Button
              text="Pour les invités"
              style="bg-white border border-1 border-gray-400 rounded-xl text-gray-400 px-4 py-1"
            />
          </div>
          <div className="flex flex-col gap-6 font-light">
            <p>
              J'irais Danser Chez Vous est un espace de location de lieux de
              fête entre particuliers. Cela signifie que tu peux réserver des
              endroits uniques pour organiser tes événements et fêtes privées,
              directement auprès des propriétaires.
            </p>
            <p>
              Nous sommes convaincus que ce concept est une alternative
              intéressante aux options traditionnelles de location de salles de
              fêtes. En utilisant notre plateforme, tu pourras découvrir des
              lieux originaux et adaptés à tes besoins, tout en soutenant des
              propriétaires locaux.
            </p>
            <p>
              Nous espérons que tu apprécieras l'expérience de notre plateforme
              et que tu continueras à l'utiliser pour organiser tes futurs
              événements. Si tu as la moindre question ou commentaire, n'hésite
              pas à nous contacter à tout moment.
            </p>
            <CustomLink
              style="mt-4 underline font-medium text-sm"
              content="En savoir plus..."
              path="/"
            />
          </div>
        </div>
        <Image
          src="/images/infos/third-man.svg"
          width={250}
          height={200}
          alt="dessin femme dansant"
          style={{ zIndex: 30 }}
        />
      </div>
      <div className="flex flex-col gap-8 px-20"></div>
    </div>
  )
}

export default Informations
