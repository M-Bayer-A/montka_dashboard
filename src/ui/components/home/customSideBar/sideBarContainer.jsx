export default function SideBarContainer({ children, className }) {
  return (
    <div
      className={`${className} grow w-full flex flex-row-reverse gap-2 overflow-hidden`}
    >
      {children}
    </div>
  );
}
