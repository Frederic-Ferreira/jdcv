function InputLabel({ label, field, type, span, required }) {
  return (
    <div className={"flex flex-col text-[#B1AFAF] " + span}>
      <label className="flex font-light text-sm items-center" htmlFor={field}>
        <span className="truncate max-w-[200px]">{label}</span>
        <span className="text-red-500 ml-1">*</span>
      </label>
      <input
        id={field}
        type={type}
        required={required}
        className="border text-black font-light px-2 h-8 border-[#DADADA] bg-[#F8F7F7] rounded-lg"
      />
    </div>
  )
}

export default InputLabel
