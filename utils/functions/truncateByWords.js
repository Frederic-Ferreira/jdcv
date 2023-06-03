function truncateByWords(text, numWords) {
  const words = text.split(" ")
  if (words.length <= numWords) {
    return text
  }
  const truncatedText = words.slice(0, numWords).join(" ")
  return truncatedText + "..."
}

export default truncateByWords
