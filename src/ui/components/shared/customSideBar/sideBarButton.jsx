import { useIsSideBarOpen } from "./sideBar";

export default function SideBarButton({ active, icon, title, onClick }) {
  const open = useIsSideBarOpen();
  return (
    <button
      className={`w-full h-11 flex flex-row-reverse p-2.5 gap-2.5 rounded-[8px]
        ${active ? "bg-[#0EA5E9]" : "bg-transparent"}`}
      onClick={onClick}
    >
      <img src={icon} className="size-6" />
      {/* <h1 className={`${open ? "" : "hidden"}`}>{title}</h1> */}
      <h1
        className={`
          text-right overflow-hidden
          transition-all duration-300 ease-in-out
        ${open ? "w-full" : "w-0"}`}
      >
        {title}
      </h1>
    </button>
  );
}
