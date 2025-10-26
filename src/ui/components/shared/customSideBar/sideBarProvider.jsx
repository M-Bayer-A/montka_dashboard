import { createContext, useContext } from "react";
//
const SideBarContext = createContext();
//
export default function SideBarProvider({
  children,
  className,
  isOpen,
  onClose = () => {},
}) {
  //
  return (
    <SideBarContext.Provider value={{ isOpen, onClose }}>
      <div
        className={`${className} grow w-full flex flex-row-reverse overflow-hidden`}
      >
        {children}
      </div>
    </SideBarContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useIsSideBarOpen = () => useContext(SideBarContext);
