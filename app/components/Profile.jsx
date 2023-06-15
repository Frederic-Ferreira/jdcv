"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "@app/components/Button"
import InputFile from "@app/profile/components/InputFile"
import { v4 as uid } from "uuid"
import truncateByWords from "@utils/functions/truncateByWords"
import moment from "moment"
import { ClipLoader } from "@node_modules/react-spinners"
import { userStore } from "@config/store"
import toast from "react-hot-toast"

function Profile({ user, id, isFetching }) {
  const [isEditing, setIsEditing] = useState(false)
  const [interests, setInterests] = useState(["Sport", "Musique", "Montagne"])
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [description, setDescription] = useState("")
  const { setUser } = userStore()

  let token
  if (typeof window !== "undefined") token = localStorage.getItem("token")

  useEffect(() => {
    if (user?.interets) {
      setInterests(user.interets)
    }
    if (user?.avatar) {
      setImage(user.avatar)
    }
    if (user?.prenom && user?.nom) {
      setName(`${user.prenom} ${user.nom}`)
    }
    if (user?.dateNaissance) {
      setAge(moment().diff(user?.dateNaissance, "years"))
    }
    if (user?.description) {
      setDescription(user.description)
    }
  }, [user])

  function handleEditProfile() {
    setIsEditing(true)
  }

  function handleExitEdit() {
    setIsEditing(false)
  }

  function handleSaveProfile() {
    async function call() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/profile/${user.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            nom: name.split(" ")[1],
            prenom: name.split(" ")[0],
            description: description,
            avatar: image,
          }),
        }
      )
      const data = await response.json()
      if (data) {
        setTimeout(() => {
          setUser(data)
          toast.success("Profil mis à jour !")
        }, 1000)
      } else {
        toast.error("Erreur lors de la mise à jour du profil")
      }
    }

    call()
    setIsEditing(false)
    // Effectuez toute autre action nécessaire après la sauvegarde
  }

  return (
    <div className="flex flex-col gap-6">
      {!isFetching ? (
        <>
          <div className="flex gap-4 items-center">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-4xl border border-2 border-gray-300 rounded-md p-2 font-medium w-[250px]"
                />
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="text-3xl border border-2 border-gray-300 rounded-md p-2 font-light w-[75px]"
                />
              </>
            ) : (
              <>
                <h2 className="text-4xl font-medium">{name}</h2>
                <p className="text-3xl font-light">{age} ans</p>
              </>
            )}
            {user?.note ? (
              <div className="flex items-center gap-2 text-sm">
                <p>{user.note}/5</p>
                <Image
                  src="/images/profile/star.svg"
                  height={30}
                  width={30}
                  alt="étoile"
                  className="hover:cursor-pointer"
                />
              </div>
            ) : (
              <Image
                className="hover:cursor-pointer"
                src="/images/profile/star.svg"
                height={30}
                width={30}
                alt="étoile"
              />
            )}
          </div>
          <div className="flex gap-10">
            {isEditing ? (
              <InputFile handler={setImage} />
            ) : (
              <img
                src={
                  image
                    ? "http://localhost:8000/symfony-images/" + image
                    : "/images/profile/man-selfie.jpeg"
                }
                alt="photo de profil"
                style={{
                  height: 400,
                  width: 500,
                  borderRadius: "15px",
                  objectFit: "cover",
                }}
              />
            )}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-medium text-[#FF771E]">
                  A propos de {name}
                </h3>
                {isEditing ? (
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="font-light border border-2 border-gray-300 rounded-md p-1"
                  />
                ) : (
                  <p className="font-light">
                    {user?.description
                      ? truncateByWords(user.description, 25)
                      : ""}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-medium text-[#FF771E]">
                  Ses centres d'intérêts
                </h3>
                <div className="flex font-light flex-wrap gap-4">
                  {isEditing && interests.length > 0
                    ? interests.map((interest, index) => (
                        <input
                          key={uid()}
                          value={interest}
                          onChange={(e) => {
                            const newInterests = [...interests]
                            newInterests[index] = e.target.value
                            setInterests(newInterests)
                          }}
                          type="text"
                          placeholder="Ajouter un centre d'intérêt"
                          className="bg-white border border-1 border-black text-black rounded-full px-6 py-2"
                        />
                      ))
                    : interests.map((interest) => (
                        <span
                          key={uid()}
                          className="bg-white border border-1 border-black text-black rounded-full px-6 py-2"
                        >
                          {interest}
                        </span>
                      ))}
                </div>
              </div>
              <div className="flex gap-10">
                {isEditing ? (
                  <Button
                    text="Enregistrer le profil"
                    style="bg-[#FF8E37] px-4 py-2 text-white rounded-lg hover:cursor-pointer"
                    event={handleSaveProfile}
                  />
                ) : (
                  <></>
                )}
                {!isEditing && id === user.id ? (
                  <Button
                    text="Modifier le profil"
                    style="bg-black px-4 py-2 rounded-lg text-white hover:cursor-pointer"
                    event={handleEditProfile}
                  />
                ) : isEditing && id === user.id ? (
                  <Button
                    text="Annuler"
                    style="bg-black px-4 py-2 rounded-lg text-white hover:cursor-pointer"
                    event={handleExitEdit}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : (
        <ClipLoader
          className="self-center justify-self-center"
          size={50}
          color="#EE7526"
        />
      )}
    </div>
  )
}

export default Profile
