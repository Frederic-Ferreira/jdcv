import "./globals.scss"
import NavBar from "@app/components/NavBar/NavBar"
import Footer from "@app/components/Footer"
import { Toaster } from "react-hot-toast"
import Provider from "@utils/providers"

export const metadata = {
  title: "J'irai danser chez vous",
  description: "Le 'Airbnb' pour faire la fête",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="pt-24">
        <Provider>
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
