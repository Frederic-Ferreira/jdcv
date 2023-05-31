"use client"
import Link from "next/link"

const CustomLink = ({ path, style, content, icon }) => {
  return (
    <Link className={style} href={path}>
      {content}
      {icon}
    </Link>
  )
}

export default CustomLink
