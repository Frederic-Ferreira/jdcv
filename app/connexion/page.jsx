import InputLabel from "@app/components/InputLabel"
import Link from "@app/components/Link"
import Image from "next/image"
import { v4 as uid } from "uuid"

const inputLabelFields = [
  {
    label: "Adresse e-mail",
    field: "email",
    type: "email",
    span: "col-span-2",
  },
  {
    label: "Mot de passe",
    field: "password",
    type: "password",
    span: "col-span-2",
  },
]

function Connexion({}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[#EE7526]">
      <h1 className="text-2xl text-white font-light mb-10">
        J'irai Danser Chez Vous te shoutaite la bienvenue !
      </h1>
      <div className="flex gap-10 justify-around py-6 px-20 bg-white w-2/3 h-2/3 rounded-lg shadow-lg">
        <div className="flex items-center w-2/3 flex-col text-black gap-4">
          <h2 className="text-[26px] font-[400]">Ravis de te revoir !</h2>
          <p className="text-xs text-center text-[#B1AFAF]">
            Connexion à ton compte
          </p>
          <form className="mt-20 grid grid-cols-2 gap-6 w-full">
            {inputLabelFields.map((input) => (
              <InputLabel
                key={uid()}
                label={input.label}
                span={input?.span}
                field={input.field}
                type={input.type}
              />
            ))}
            <button
              className="mt-20 bg-black text-white px-20 py-2 rounded-lg hover:bg-[#202020] justify-self-center col-span-2"
              type="submit"
            >
              Connexion
            </button>
            <Link
              path="/subscribe"
              style="text-black text-xs text-center col-span-2 underline"
              content="Je n'ai pas encore de compte"
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

export default Connexion
