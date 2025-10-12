import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { customIcons, getIcon } from "../../../helpers/iconsHelper";

export default function CustomPasswordInput({ className, onChange, value }) {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <div
      className={`${className} flex flex-row items-center px-3 py-2 gap-2 border border-zinc-200 rounded-md focus-within:border-black`}
    >
      <input
        type={showToggle ? "text" : "password"}
        className={`w-full focus:outline-none border-r border-zinc-200`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button className="size-fit" onClick={() => setShowToggle(!showToggle)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={showToggle ? "open" : "closed"}
            src={getIcon(
              showToggle ? customIcons.openedEye : customIcons.closedEye
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </button>
    </div>
  );
}
