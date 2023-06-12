"use client"
import { useEffect } from "react"
import { locationStore } from "@config/store"
function Congrats(props) {
  const {
    userCategory,
    location,
    userPeople,
    userRooms,
    userEquipments,
    userImages,
    userTitle,
    userDescription,
    userPrice,
    userDates,
    userChoice,
  } = locationStore()

  useEffect(() => {
    const createLogement = async () => {
      try {
        const token = localStorage.getItem("token")

        const data = {
          titre: userTitle,
          description: userDescription,
          prixNuit: userPrice,
          nbPersonne: userPeople,
          ville: location.title,
          cp: location.cp,
          adresse: location.title,
          gps: `${location.latitude}, ${location.longitude}`,
          chambre: userRooms,
          Imgs: userImages.map((image) => image.data),
        }

        console.log(data)

        const response = await fetch("http://127.0.0.1:8000/api/logement", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error("Erreur lors de l'appel à l'API")
        }

        const responseData = await response.json()
        // Traitement des données de la réponse
        console.log(responseData)
      } catch (error) {
        console.error(error)
      }
    }

    createLogement()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 px-80 text-center">
      <h1 className="text-4xl font-bold text-center">Félicitations, Prénom!</h1>
      <h2 className="text-2xl font-bold text-center">
        La communauté J'irai Danser Chez Vous est ravie de te compter parmi elle
        !
      </h2>
      <p>
        Ton annonce sera visible par tout le monde d'ici 24H. Pendant ce temps,
        profite-en pour la compléter et la rendre la plus accueillante possible
        pour tes futurs invités.
      </p>
    </div>
  )
}

export default Congrats
