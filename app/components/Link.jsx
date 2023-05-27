"use client"
import Link from "next/link"

const CustomLink = ({ path, style, content }) => {
  return (
    <Link href={path} className={style}>
      {content}
    </Link>
  )
}

export default CustomLink
