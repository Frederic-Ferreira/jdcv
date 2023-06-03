import Image from "next/image"

function InfoCard({ src, alt, title, content }) {
  return (
    <div className="rounded-xl shadow-lg text-lexend text-black max-w-[330px] h-[330px] flex flex-col items-center text-center gap-8 py-10 px-8 bg-white">
      <Image src={src} alt={alt} width={80} height={80} />
      <h1 className="text-lg">{title}</h1>
      <p className="text-xs font-light leading-6 text-[#606060]">{content}</p>
    </div>
  )
}

export default InfoCard
