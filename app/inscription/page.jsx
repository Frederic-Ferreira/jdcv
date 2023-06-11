"use client"
import InputLabel from "@app/components/InputLabel"
import Image from "next/image"
import { v4 as uid } from "uuid"
import Link from "@app/components/Link"
import axios from "@config/axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { userStore } from "@config/store"

const inputLabelFields = [
  {
    label: "Nom",
    field: "name",
    type: "text",
    span: "col-span-1",
    required: true,
  },
  {
    label: "Prénom",
    field: "firstName",
    type: "text",
    span: "col-span-1",
    required: true,
  },
  {
    label: "Adresse e-mail",
    field: "email",
    type: "email",
    span: "col-span-1",
    required: true,
  },
  {
    label: "Date de naissance",
    field: "birth",
    type: "date",
    span: "col-span-1",
    required: true,
  },
  {
    label: "Mot de passe",
    field: "password",
    type: "password",
    span: "col-span-1",
    required: true,
  },
  {
    label: "Confirmer le mot de passe",
    field: "confirmPassword",
    type: "password",
    span: "col-span-1",
    required: true,
  },
]

function Subscribe({}) {
  const router = useRouter()
  const { setUser } = userStore()
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = e.target[0]?.value
    const firstName = e.target[1]?.value
    const email = e.target[2]?.value
    const birthDay = e.target[3]?.value
    const password = e.target[4]?.value
    const confirmPassword = e.target[5]?.value

    if (
      !email ||
      !password ||
      !name ||
      !firstName ||
      !birthDay ||
      !confirmPassword
    )
      return toast.error("Veuillez remplir tous les champs")

    if (password !== confirmPassword) {
      return toast.error("Les mots de passe ne correspondent pas")
    }

    try {
      setIsLoading(true)
      setIsLoading(true)
      const res = await axios.post("/register", {
        email: email,
        nom: name,
        prenom: firstName,
        dateNaissance: birthDay,
      })

      // const token = res?.data?.token
      // localStorage.setItem("token", token)
      setUser(res.data)
      toast.success("Votre compte a bien été créé")
      setTimeout(() => {
        router.push("/")
      }, 3000)

      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e)
      if (e?.response?.status === 401) {
        toast.error("Email ou mot de passe incorrect")
      } else {
        throw new Error("Il semble y avoir un problème avec le serveur")
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#E4696D]">
      <h1 className="text-2xl text-white font-light mb-10">
        J'irai Danser Chez Vous te shoutaite la bienvenue !
      </h1>
      <div className="flex gap-10 justify-around py-6 px-20 bg-white w-2/3 rounded-lg shadow-lg">
        <div className="flex items-center flex-col text-black gap-4">
          <h2 className="text-[26px] font-[400]">Crée ton compte</h2>
          <p className="text-xs text-center text-[#B1AFAF]">
            Créer un compte pour pouvoir proposer ton bien à la location, ou
            encore louer un bien.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-2 gap-4 w-full"
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
            <div className="flex items-center col-span-2 mt-6">
              <input
                type="checkbox"
                required
                className="h-4 mr-4 hover:cursor-pointer"
              />
              <label className="text-sm text-[#B1AFAF]">
                J'ai lu et accepte les conditions d'utilisation de J'irai Danser
                Chez Vous
              </label>
            </div>
            <button
              className="mt-4 min-w-[200px] bg-black text-white px-20 py-2 rounded-lg hover:bg-[#202020] justify-self-center col-span-2"
              type="submit"
            >
              {isLoading ? (
                <ClipLoader loading={isLoading} color="#ffffff" size={15} />
              ) : (
                "Je m'inscris"
              )}
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
