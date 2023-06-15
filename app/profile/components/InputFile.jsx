import { CloseCircleOutlined } from "@ant-design/icons"
import { useState, useRef } from "react"
import { v4 as uid } from "uuid"
import Image from "@node_modules/next/image"

function InputFile({ handler }) {
  const [image, setImage] = useState(null)
  const input = useRef(null)

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
    processFile(files[0])
  }

  function handleFileChange(event) {
    const file = event.target.files[0]
    processFile(file)
  }

  function processFile(file) {
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage({ id: uid(), data: event.target.result })
        handler(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 w-1/2 h-[300px]">
      <div
        onClick={(e) => handleSquareClick(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
        className="w-[500px] h-[350px] flex flex-col gap-8 items-center border-2 border-[#EEEEEE] rounded-xl px-4 py-10 my-auto hover:cursor-pointer"
      >
        {image ? (
          <div className="flex items-center justify-center image w-full h-full relative p-2">
            <img
              src={image.data}
              alt="Image"
              className="rounded-md h-full object-cover"
            />
          </div>
        ) : (
          <>
            <Image
              src="/images/housing/location/download.svg"
              height={50}
              width={50}
              alt="icon de download"
            />
            <h1 className="text-3xl font-medium">Fais glisser ta photo</h1>
            <div className="text-xl font-medium"></div>
            <div className="underline">Télécharger depuis ton appareil</div>
          </>
        )}
        <input
          ref={input}
          type="file"
          id="file-input"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  )
}

export default InputFile
