"use client"
import Button from "@app/components/Button"
import { useRef, useState } from "react"
import { toast } from "react-hot-toast"
import { v4 as uid } from "uuid"
import Image from "next/image"
import { CloseCircleOutlined } from "@ant-design/icons"
import { locationStore } from "@config/store"

function Images() {
  const { setPage, setUserImages, userImages, setUserMainImage } =
    locationStore()
  const input = useRef(null)
  const [images, setImages] = useState(userImages)

  function handleDeleteImage(id) {
    setImages((images) => images.filter((image) => image.id !== id))
  }

  function handleSquareClick(e) {
    if (e.target.closest(".image")) return
    input?.current?.click()
  }

  function handleDragOver(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
  }

  function handleDrop(event) {
    event.preventDefault()
    const files = event.dataTransfer.files
    processFiles(files)
  }

  function handleFileChange(event) {
    const files = event.target.files
    processFiles(files)
  }

  function processFiles(files) {
    if (files.length > 0) {
      const promises = Array.from(files).map((file, i) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = (event) => {
            resolve({ id: uid(), main: i === 0, data: event.target.result })
          }
          reader.onerror = (error) => {
            reject(error)
          }
          reader.readAsDataURL(file)
        })
      })

      Promise.all(promises)
        .then((result) => {
          setImages(() => [...images, ...result])
        })
        .catch((error) => {
          console.log("Erreur de lecture de fichier :", error)
        })
    }
  }

  return (
    <div className="flex flex-col gap-4 pt-4 pb-10 px-40">
      <div className="flex gap-10">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-5xl font-medium">Étape 2</h1>
          <h2 className="text-2xl">Fais sortir ton annonce du lot</h2>
          <p className="font-light mt-10">
            Au cours de cette étape, tu pourras ajouter certains des équipements
            et/ou services supplémentaires proposés dans ton logement pour les
            invités, et au moins 5 photos. Tu pourras ensuite ajouter un titre
            et une description.
          </p>
          <h4 className="text-lg mt-10">
            Ajoute des jolies photos de ta propriété
          </h4>
          <p className="text-[#B1AFAF]">
            Pour commencer, tu auras besoin de 5 photos. Tu pourras en ajouter
            d'autres ou faire des modifications plus tard.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 w-1/2">
          <div
            onClick={(e) => handleSquareClick(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
            className="mt-20 w-[400px] h-[350px] flex flex-col gap-8 items-center border-2 border-[#EEEEEE] rounded-xl px-4 py-10 my-auto hover:cursor-pointer"
          >
            {images.length > 0 ? (
              <div className="flex items-center gap-2 flex-wrap overflow-y-auto h-full">
                {images.map((image, index) => (
                  <div key={image.id} className="image relative p-2">
                    <img
                      src={image.data}
                      alt={`Image ${index}`}
                      className="rounded-md h-[100px] w-[100px] object-cover"
                    />
                    <CloseCircleOutlined
                      className="absolute top-0 right-1 text-red-500"
                      onClick={() => handleDeleteImage(image.id)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <Image
                  src="/images/housing/location/download.svg"
                  height={50}
                  width={50}
                  alt="icon de download"
                />
                <h1 className="text-3xl font-medium">
                  Fais glisser tes photos
                </h1>
                <div className="text-xl font-medium">
                  Choisis au moins 5 photos
                </div>
                <div className="underline">Télécharger depuis ton appareil</div>
              </>
            )}
            <input
              ref={input}
              type="file"
              id="file-input"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e)}
              multiple
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[82px] justify-between ">
        <Button
          style="text-lg font-light text-black underline hover:cursor-pointer"
          text="Retour"
          event={() => setPage(7)}
        />
        <Button
          style="btn-orange-linear text-lg text-white font-medium px-10 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
          text="Continuer"
          event={() => {
            if (images.length >= 1) {
              const imagesData = images.map((image) =>
                image.data
                  .replace(/^data:image\/png;base64,/, "")
                  .replace(/^data:image\/jpg;base64,/, "")
                  .replace(/^data:image\/jpeg;base64,/, "")
                  .replace(/^data:image\/gif;base64,/, "")
              )
              setUserImages(imagesData.join("\n\n"))
              setUserMainImage(images[0])
              setPage(9)
            } else {
              toast.error("Sélectionne au moins 5 photos")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Images
