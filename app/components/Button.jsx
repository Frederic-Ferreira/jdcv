const Button = ({ text, style, event }) => {
  return (
    <div onClick={event} className={style}>
      {text}
    </div>
  )
}

export default Button
