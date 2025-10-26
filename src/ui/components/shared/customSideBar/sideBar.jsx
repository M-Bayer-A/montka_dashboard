import { useIsSideBarOpen } from "./sideBarProvider";

export default function SideBar({ children, className }) {
  //
  const { isOpen } = useIsSideBarOpen();
  //
  return (
    <div
      className={`${className}
         h-full w-64 flex flex-col flex-shrink-0 overflow-auto
       bg-[#1F2937] text-white font-[Tajawal]
         md:static fixed top-0 right-0 z-110 
         transition-all duration-300 ease-in-out ${
           isOpen
             ? "md:w-64 md:translate-x-0 translate-x-0"
             : "md:w-21 md:translate-x-0 translate-x-100"
         }
         `}
    >
      {children}
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
