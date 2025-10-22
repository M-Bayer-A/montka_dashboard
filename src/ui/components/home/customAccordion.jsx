import { useEffect, useRef, useState } from "react";
import { customIcons, getIcon } from "../../../helpers/iconsHelper";

export default function CustomAccordion({
  children,
  className,
  image = "",
  title,
  moveUpHandler,
  moveDownHandler,
}) {
  const ref = useRef();
  const [height, setHeight] = useState();
  const [open, setopen] = useState(false);
  //
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight + "px");
    }
  }, [open]);
  //
  return (
    <div
      className={`flex flex-col flex-shrink-0 rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden ${className}`}
    >
      {/* header */}
      <div className="w-full h-25 flex flex-row justify-between p-5 bg-white">
        {/* actions buttons */}
        <div className="flex flex-row gap-2.5 items-center">
          <button onClick={() => setopen(!open)}>
            <img
              src={getIcon(customIcons.arrow)}
              className={`size-9 transition-transform duration-500 ${
                open ? "rotate-180" : ""
              }`}
              alt={open ? "Collapse" : "Expand"}
            />
          </button>
          <div className="h-full flex flex-col justify-between">
            <button onClick={moveUpHandler}>
              <img
                src={getIcon(customIcons.arrow)}
                className="size-6 rotate-180"
              />
            </button>
            <button onClick={moveDownHandler}>
              <img src={getIcon(customIcons.arrow)} className="size-6" />
            </button>
          </div>
          <a className="text-[#E24C4C]">حذف</a>
          <a className="text-[#4F46E5]">تعديل</a>
        </div>
        {/* ==actions buttons== */}
        <div className="flex flex-row gap-4 items-center">
          <p className="font-[700]">{title}</p>
          <img className="w-20.5 h-12.5 rounded-[6px]" src={image} alt="img" />
        </div>
      </div>
      {/* ==header== */}
      {/* Body */}
      <div
        ref={ref}
        style={{ height: open ? height : "0px" }}
        className={`transition-all duration-500 ease-in-out`}
      >
        {children}
      </div>
      {/* ==Body== */}
    </div>
  );
}
