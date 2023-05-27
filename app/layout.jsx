import "./globals.scss"
import NavBar from "@app/components/NavBar/NavBar"
export const metadata = {
  title: "J'irai danser chez vous",
  description: "Le 'Airbnb' pour faire la fête",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
