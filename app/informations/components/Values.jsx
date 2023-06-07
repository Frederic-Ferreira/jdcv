function Values({ style, title, content }) {
  return (
    <div className={"flex flex-col gap-4 w-3/4 " + style}>
      <h1 className="text-4xl font-medium">
        <span className="gem-category ">{title}</span>
      </h1>
      <p className="font-light">{content}</p>
    </div>
  )
}

export default Values
