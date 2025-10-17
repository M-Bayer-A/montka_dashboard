export default function CustomTextInput({
  className,
  type = "text",
  onChange,
  value,
  placeholder,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 border rounded-md focus:outline-none focus:border-black
        [&::-webkit-inner-spin-button]:appearance-none ${className}`}
    />
  );
}
