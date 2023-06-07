function truncateByCharacters(text, numCharacters) {
  if (text.length <= numCharacters) {
    return text
  }
  const truncatedText = text.slice(0, numCharacters)
  return truncatedText + "..."
}

export default truncateByCharacters
