export default function CustomCheckBox({
  className,
  checked,
  onCheckChange = () => {},
}) {
  return (
    <input
      type="checkbox"
      className={`size-4 border-none`}
      checked={checked}
      onChange={(e) => onCheckChange(e.target.checked)}
    />
  );
}
// appearance-none border border-black rounded-[4px] checked:bg-black
//         before:size-full p-2 before:flex before:items-center before:justify-center before:content-['✓']
//         before:text-white before:opacity-100
