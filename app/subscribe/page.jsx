import InputLabel from "@app/components/InputLabel"
import Image from "next/image"
import { v4 as uid } from "uuid"
import Link from "@app/components/Link"

const inputLabelFields = [
  {
    label: "Nom",
    field: "name",
    type: "text",
    span: "col-span-1",
  },
  {
    label: "Prénom",
    field: "firstName",
    type: "text",
    span: "col-span-1",
  },
  {
    label: "Adresse e-mail",
    field: "email",
    type: "email",
    span: "col-span-1",
  },
  {
    label: "Date de naissance",
    field: "birth",
    type: "date",
    span: "col-span-1",
  },
  {
    label: "Mot de passe",
    field: "password",
    type: "password",
    span: "col-span-1",
  },
  {
    label: "Confirmer le mot de passe",
    field: "confirmPassword",
    type: "password",
    span: "col-span-1",
  },
]

function Subscribe({}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[#E4696D]">
      <h1 className="text-2xl text-white font-light mb-10">
        J'irai Danser Chez Vous te shoutaite la bienvenue !
      </h1>
      <div className="flex gap-10 justify-around py-6 px-20 bg-white w-2/3 h-2/3 rounded-lg shadow-lg">
        <div className="flex items-center flex-col text-black gap-4">
          <h2 className="text-[26px] font-[400]">Crée ton compte</h2>
          <p className="text-xs text-center text-[#B1AFAF]">
            Créer un compte pour pouvoir proposer ton bien à la location, ou
            encore louer un bien.
          </p>
          <form className="mt-6 grid grid-cols-2 gap-4 w-full">
            {inputLabelFields.map((input) => (
              <InputLabel
                key={uid()}
                label={input.label}
                span={input?.span}
                field={input.field}
                type={input.type}
              />
            ))}
            <div className="flex items-center col-span-2 mt-6">
              <input
                type="checkbox"
                className="h-4 mr-4 hover:cursor-pointer"
              />
              <label className="text-sm text-[#B1AFAF]">
                J'ai lu et accepte les conditions d'utilisation de J'irai Danser
                Chez Vous
              </label>
            </div>
            <button
              className="mt-4 bg-black text-white px-20 py-2 rounded-lg hover:bg-[#202020] justify-self-center col-span-2"
              type="submit"
            >
              Je m'inscris
            </button>
            <Link
              path="/connexion"
              style="text-black text-xs text-center col-span-2 underline"
              content="J'ai déjà un compte"
            />
          </form>
        </div>
        <Image
          src="/images/subscribe-character.svg"
          height="300"
          width="200"
          alt="character dancing"
        />
      </div>
    </div>
  )
}

export default Subscribe
