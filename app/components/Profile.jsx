"use client"
import Image from "next/image"
import { useState } from "react"
import Button from "@app/components/Button"
import InputFile from "@app/profile/components/InputFile"
import { v4 as uid } from "uuid"
import truncateByWords from "@utils/functions/truncateByWords"

function Profile({ user, currentUser }) {
  const [isEditing, setIsEditing] = useState(false)
  const [interests, setInterests] = useState(user.interests)
  const [image, setImage] = useState(user.image)
  const [name, setName] = useState(user.name)
  const [age, setAge] = useState(user.age)
  const [description, setDescription] = useState(user.description)

  function handleEditProfile() {
    setIsEditing(true)
  }

  function handleExitEdit() {
    setIsEditing(false)
  }

  function handleSaveProfile() {
    // Ajoutez ici votre logique de sauvegarde du profil mis à jour
    setIsEditing(false)
    // Effectuez toute autre action nécessaire après la sauvegarde
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-4xl border border-2 border-gray-300 rounded-md p-2 font-medium w-[150px]"
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
            <h2 className="text-4xl font-medium">{user.name}</h2>
            <p className="text-3xl font-light">{user.age} ans</p>
          </>
        )}
        {user.note ? (
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
            src="/images/profile/man-selfie.jpeg"
            height={750}
            width={500}
            alt="photo de profil"
            style={{ borderRadius: "15px", objectFit: "cover" }}
          />
        )}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-[#FF771E]">
              A propos de {user.name}
            </h3>
            {isEditing ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="font-light border border-2 border-gray-300 rounded-md p-1"
              />
            ) : (
              <p className="font-light">
                {truncateByWords(user.description, 25)}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-[#FF771E]">
              Ses centres d'intérêts
            </h3>
            <div className="flex font-light flex-wrap gap-4">
              {isEditing
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
                : user.interests.map((interest) => (
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
                onClick={handleSaveProfile}
              />
            ) : (
              <></>
            )}
            {!isEditing ? (
              <Button
                text="Modifier le profil"
                style="bg-black px-4 py-2 rounded-lg text-white hover:cursor-pointer"
                event={handleEditProfile}
              />
            ) : (
              <Button
                text="Annuler"
                style="bg-black px-4 py-2 rounded-lg text-white hover:cursor-pointer"
                event={handleExitEdit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
