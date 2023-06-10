import Button from "@app/components/Button"

function Second({ setPage }) {
  return (
    <div className="flex flex-col gap-8 pt-4 pb-10 px-40">
      <h1 className="text-5xl font-medium"> Bienvenue, Prénom</h1>
      <h2 className="text-2xl">
        Propose ton logement sur notre plateforme en 3 étapes :
      </h2>
      <div className="flex items-center gap-4">
        <h1 className="text-8xl gradient-text-1 font-medium">1</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-normal">Parle nous de ton logement</h1>
          <p className="text-sm font-light">
            Donne-nous quelques informations de base, par exemple indique-nous
            où il se trouve et combien de voyageurs il peut accueillir, quels
            services et/ou équipements tu proposerais aux invités etc...
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-8xl gradient-text-2 font-medium">2</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-normal">
            Fais en sorte de te démarquer
          </h1>
          <p className="text-sm font-light">
            Ajoute au moins 5 photos, un titre et une description. Nous allons
            t'aider.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-8xl gradient-text-3 font-medium">3</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-normal">Termine et publie</h1>
          <p className="text-sm font-light">
            Fixe un prix initial et publie ton annonce.
          </p>
        </div>
      </div>
      <Button
        style="ml-auto btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
        text="Continuer"
        event={() => setPage(3)}
      />
    </div>
  )
}

export default Second
