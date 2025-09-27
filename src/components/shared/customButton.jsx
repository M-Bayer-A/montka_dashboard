export default function CustomButton({ className, title }) {
  return (
    <button
      className={`${className} px-3.5 py-1.5 rounded-[7px] bg-[#0EA5E9] text-white font-[700] text-[18px]`}
    >
      {title}
    </button>
  );
}
