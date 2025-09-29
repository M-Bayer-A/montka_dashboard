export default function CustomButton({
  className,
  title,
  disabled = false,
  onClick,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} px-3.5 py-1.5 rounded-[7px] bg-[#0EA5E9] text-white font-[700] text-[18px]
      disabled:bg-zinc-500 disabled:cursor-not-allowed  
      `}
    >
      {title}
    </button>
  );
}
