import { Backdrop } from "@mui/material";
import { useIsSideBarOpen } from "./sideBarProvider";

export default function MainContent({ children, className }) {
  //
  const { isOpen, onClose } = useIsSideBarOpen();
  //
  return (
    <div className={`${className} h-full grow`}>
      {children}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-100 transition-opacity duration-300 ease-in-out md:hidden
    ${
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `}
      />
    </div>
  );
}
