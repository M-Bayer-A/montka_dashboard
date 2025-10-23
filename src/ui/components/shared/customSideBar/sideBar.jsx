import { createContext, useContext } from "react";
//
const SideBarContext = createContext();
//
export default function SideBar({ children, className, open }) {
  return (
    <div
      className={`${className}
         h-full flex flex-col flex-shrink-0 overflow-auto
       bg-[#1F2937] text-white font-[Tajawal]
         transition-all duration-300 ease-in-out ${
           open ? "w-64 translate-x-0" : "w-21 translate-x-0"
         }
         `}
    >
      <SideBarContext.Provider value={open}>
        {/* SideBar Header */}
        <div
          className={`
            transition-all duration-300 ease-in-out
            ${open ? "max-h-20 opacity-100 pt-5" : "max-h-0 opacity-0 pt-0"}
            `}
        >
          <h1 className="font-[700] text-[22px] text-center py-2.5">المنتقى</h1>
        </div>
        <hr
          className={`transition-all duration-300 ease-in-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* ==SideBar Header== */}

        {children}
      </SideBarContext.Provider>
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useIsSideBarOpen = () => useContext(SideBarContext);
