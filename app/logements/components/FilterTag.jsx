function FilterTag({ filter, updateFilters }) {
  const handleClick = () => {
    updateFilters(filter.key)
  }

  return (
    <div
      onClick={handleClick}
      className={
        "flex items-center justify-center text-lexend w-[200px] hover:cursor-pointer border text-[#FF771E] hover:bg-[#FF771E] hover:text-white border-[#FF771E] border-1 rounded-xl py-2 px-4"
      }
    >
      {filter.text}
    </div>
  )
}

export default FilterTag
