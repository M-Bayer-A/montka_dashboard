export default function CustomTextInput({ className, type, onChange, value }) {
  return (
    <div className="w-full flex flex-row px-3 py-2 gap-2 border border-zinc-200 rounded-md focus-within:border-black">
      <input
        type={type}
        className={`${className} w-full focus:outline-none`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
