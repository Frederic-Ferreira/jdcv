"use client"
import Link from "next/link"

const CustomLink = ({ path, style, content }) => {
  return (
    <Link className={style} href={path}>
      {content}
    </Link>
  )
}

export default CustomLink
