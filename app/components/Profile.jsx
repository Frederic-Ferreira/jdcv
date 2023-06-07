import Image from "next/image"
import { v4 as uid } from "uuid"
import Button from "@app/components/Button"
function Profile({ user, currentUser }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <h2 className="text-4xl font-medium">{user.name}</h2>
        <p className="text-3xl font-light">{user.age} ans</p>
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
        <Image
          src="/images/profile/man-selfie.jpeg"
          height={750}
          width={750}
          alt="photo de profil"
          style={{ borderRadius: "15px", objectFit: "cover" }}
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-[#FF771E]">
              A propos de {user.name}
            </h3>
            <p className="font-light">{user.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-[#FF771E]">
              Ses centres d'intérêts
            </h3>
            <div className="flex font-light flex-wrap gap-4">
              {user.interests.map((interest) => (
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
            <Button
              text={"Contacter " + user.name}
              style="bg-[#FF8E37] px-4 py-2 text-white rounded-lg hover:cursor-pointer"
            />
            {user.id === currentUser.id && (
              <Button
                text="Editer le profile"
                style="bg-black px-4 py-2 rounded-lg text-white hover:cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
