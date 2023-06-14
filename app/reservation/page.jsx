"use client"
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js"

function Page(props) {
  return (
    <div className="flex gap-8 px-40 py-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-medium">
          Confirmer la réservation et payer
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Récapitulatif de la soirée :</h2>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium">Date :</h3>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium">Nombre d'invités :</h3>
          </div>
        </div>
      </div>
      <Elements>
        <CardElement />
      </Elements>
    </div>
  )
}

export default Page
