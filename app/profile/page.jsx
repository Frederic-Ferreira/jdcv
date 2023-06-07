import Profile from "@app/components/Profile"

const user = {
  id: 1,
  name: "Pierre",
  age: 22,
  note: 5,
  description:
    "Je suis un véritable amoureux de la nature et des grands espaces. Mon châlet sympathique, perché au sommet des montagnes, est le fruit de mon amour pour les panoramas à couper le souffle et les moments de convivialité partagés. Je crois fermement que la beauté des paysages alpins doit être partagée et célébrée avec d'autres âmes festives.",
  interests: ["Sport", "Musique", "Montagne"],
}
const currentUser = {
  id: 1,
}
function Page(props) {
  return (
    <div className="px-32 py-20">
      <Profile user={user} currentUser={currentUser} />
    </div>
  )
}

export default Page
