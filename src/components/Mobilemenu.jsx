import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/navigationLinks";

const menuVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.2,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};

const Mobilemenu = ({ navExpanded, setnavExpanded }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav")) {
        setnavExpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setnavExpanded]);

  return (
    <AnimatePresence>
      {navExpanded && (
        <motion.ul
          className="absolute bg-primary text-neutral-100 w-[95%] top-full mt-2.5 rounded-md z-50 sm:hidden"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              className="pt-4 px-8 font-bold first:pt-6"
              variants={menuItemVariants}
            >
              <a href={item.href}>{item.name}</a>
            </motion.li>
          ))}

          <motion.li
            className="py-2 px-5 rounded-sm mx-8 mt-4 mb-6 bg-neutral-100 border inline-block text-primary font-bold"
            variants={menuItemVariants}
          >
            <a href="#Footer">Contact</a>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Mobilemenu;
