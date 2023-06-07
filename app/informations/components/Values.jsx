function Values({ style, title, content }) {
  return (
    <div className={"flex flex-col gap-4 " + style}>
      <h1 className="gem-category text-4xl font-medium">{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Values
