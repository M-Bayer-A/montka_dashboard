import { useIsSideBarOpen } from "./sideBarProvider";

export default function SideBarHeader({ children }) {
  //
  const { isOpen } = useIsSideBarOpen();
  //
  return (
    <>
      <div
        className={`
            transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? "max-h-20 opacity-100 pt-5" : "max-h-0 opacity-0 pt-0"}
            `}
      >
        {children}
      </div>
      <hr
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
