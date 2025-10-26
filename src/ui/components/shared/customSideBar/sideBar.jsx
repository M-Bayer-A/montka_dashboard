import { useIsSideBarOpen } from "./sideBarProvider";

export default function SideBar({ children, className }) {
  //
  const { isOpen } = useIsSideBarOpen();
  //
  return (
    <div
      className={`${className}
      h-full w-fit flex-shrink-0 overflow-auto overflow-x-hidden
      bg-[#1F2937] text-white font-[Tajawal]
      md:static fixed top-0 right-0 z-110
      transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "md:translate-x-0 translate-x-0"
          : "md:translate-x-0 translate-x-100"
      }
         `}
    >
      <div
        className={`
         h-full flex flex-col transition-all duration-300 ease-in-out
          ${isOpen ? "md:w-64" : "md:w-21"}`}
      >
        {children}
      </div>
    </div>
  );
}
{
  /* <div
  className={`${className}
         h-full flex flex-col flex-shrink-0 overflow-auto
       bg-[#1F2937] text-white font-[Tajawal]
        z-30
         transition-all duration-300 ease-in-out ${
           isOpen ? "w-64 translate-x-0" : "w-21 translate-x-0"
         }
         `}
>
  {children}
</div>; */
}
