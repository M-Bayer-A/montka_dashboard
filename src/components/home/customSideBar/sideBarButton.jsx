import { useIsSideBarOpen } from "./sideBar";

export default function SideBarButton({ active, icon, title }) {
  const open = useIsSideBarOpen();
  return (
    <button
      className={`w-full h-11 flex flex-row-reverse p-2.5 gap-2.5 rounded-[8px]
        ${active ? "bg-[#0EA5E9]" : "bg-transparent"}`}
    >
      <img src={icon} />
      <h1 className={`${open ? "" : "hidden"}`}>{title}</h1>
    </button>
  );
}
