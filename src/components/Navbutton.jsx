import React from "react";
import { motion } from "framer-motion";

const Navbutton = ({ navExpanded, setnavExpanded }) => {
  return (
    <button
      aria-label="Menu toggle button"
      aria-pressed={navExpanded}
      onClick={() => setnavExpanded((prev) => !prev)}
      className="h-9 w-8 px-1.5 py-2 flex flex-col gap-1 items-center justify-center sm:hidden rounded-t-sm"
    >
      <motion.div
        className="mobileNavItem"
        animate={{
          rotate: navExpanded ? 45 : 0,
          y: navExpanded ? 6 : 0,
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      <motion.div
        className="mobileNavItem"
        animate={{
          opacity: navExpanded ? 0 : 1,
        }}
      ></motion.div>

      <motion.div
        className="mobileNavItem"
        animate={{
          rotate: navExpanded ? -45 : 0,
          y: navExpanded ? -6 : 0,
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </button>
  );
};

export default Navbutton;
