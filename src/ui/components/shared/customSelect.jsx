import { useState } from "react";
import { customIcons, getIcon } from "../../../helpers/iconsHelper";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSelect({
  className,
  title,
  options = [],
  value,
  onChange = () => {},
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-fit relative font-[Cairo] ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex flex-row items-center justify-between gap-2 px-3.5 py-1.5
          border border-zinc-200 rounded-md focus:outline-none focus:border-black`}
      >
        {options.find((opt) => opt.id == value)?.name || title}
        <img
          src={getIcon(customIcons.arrow)}
          className={`size-6 transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
          alt={open ? "Collapse" : "Expand"}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className=" mt-2 w-full absolute bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10"
          >
            {options.map((opt) => (
              <li
                key={opt.id}
                onClick={() => {
                  onChange(opt.id);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-sky-100 transition-colors"
              >
                {opt.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
