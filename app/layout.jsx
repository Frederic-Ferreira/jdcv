import "./globals.scss"
import NavBar from "@app/components/NavBar/NavBar"
import { Toaster } from "react-hot-toast"
export const metadata = {
  title: "J'irai danser chez vous",
  description: "Le 'Airbnb' pour faire la fête",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="pt-24">
        <NavBar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
