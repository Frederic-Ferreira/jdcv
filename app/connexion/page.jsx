"use client"
import InputLabel from "@app/components/InputLabel"
import Link from "@app/components/Link"
import Image from "next/image"
import { v4 as uid } from "uuid"
import axios from "@config/axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ClipLoader } from "react-spinners"

const inputLabelFields = [
  {
    label: "Adresse e-mail",
    field: "email",
    type: "email",
    span: "col-span-2",
    required: true,
  },
  {
    label: "Mot de passe",
    field: "password",
    type: "password",
    span: "col-span-2",
    required: true,
  },
]

function Connexion({}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0]?.value
    const password = e.target[1]?.value

    if (!email || !password)
      return toast.error("Veuillez remplir tous les champs")
    try {
      setIsLoading(true)
      const res = await axios.post("/login_check", {
        username: email,
        password,
      })
      console.log(res)
      const token = res?.data?.token
      localStorage.setItem("token", token)
      router.push("/")

      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)

      if (e?.response?.status === 401) {
        toast.error("Email ou mot de passe incorrect")
      } else {
        throw new Error("Il semble y avoir un problème avec le serveur")
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#EE7526]">
      <h1 className="text-2xl text-white font-light mb-10">
        J'irai Danser Chez Vous te shoutaite la bienvenue !
      </h1>
      <div className="flex gap-10 justify-around py-6 px-20 bg-white w-2/3 rounded-lg shadow-lg">
        <div className="flex items-center w-2/3 flex-col text-black gap-4">
          <h2 className="text-[26px] font-[400]">Ravis de te revoir !</h2>
          <p className="text-xs text-center text-[#B1AFAF]">
            Connexion à ton compte
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-20 grid grid-cols-2 gap-6 w-full"
          >
            {inputLabelFields.map((input) => (
              <InputLabel
                key={uid()}
                label={input.label}
                span={input?.span}
                field={input.field}
                type={input.type}
                required={input.required}
              />
            ))}
            <button
              className="mt-20 min-w-[300px] bg-black text-white px-20 py-2 rounded-lg hover:bg-[#202020] justify-self-center col-span-2"
              type="submit"
            >
              {isLoading ? (
                <ClipLoader loading={isLoading} color="#ffffff" size={15} />
              ) : (
                "Connexion"
              )}
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
