import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

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

const Navigation = () => {
  const [navExpanded, setnavExpanded] = useState(false);
  return (
    <nav className="max-w-5xl mx-auto flex justify-between items-center mt-5 px-2.5 font-nunito relative">
      <a href="/" className="sm:h-[50px] h-[44px]">
        <img src={logo} alt="Logo" className="h-full w-full" />
      </a>

      <button
        onClick={() => setnavExpanded((prev) => !prev)}
        className="h-9 w-8 px-1.5 py-2 flex flex-col gap-1 items-center justify-center sm:hidden rounded-t-sm"
      >
        {
          <motion.div
            className="h-[2.5px] w-full bg-primary rounded-sm origin-center"
            animate={{
              rotate: navExpanded ? 45 : 0,
              y: navExpanded ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        }

        {
          <motion.div
            className="h-[2.5px] w-full bg-primary rounded-sm"
            animate={{
              opacity: navExpanded ? 0 : 1,
            }}
          ></motion.div>
        }

        {
          <motion.div
            className="h-[2.5px] w-full bg-primary rounded-sm origin-center"
            animate={{
              rotate: navExpanded ? -45 : 0,
              y: navExpanded ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        }
      </button>

      <ul className="flex items-center max-sm:hidden">
        <li className="text-base text-primary font-medium">
          <a href="#" className="px-3">
            Home
          </a>
        </li>
        <li className="text-base text-primary font-medium">
          <a href="#" className="px-3">
            Flavors
          </a>
        </li>
        <li className="text-base text-primary font-medium">
          <a href="#" className="px-3">
            Location
          </a>
        </li>
        <li className="text-base text-neutral-100 ml-3 hover:shadow-button transition-all duration-200">
          <a href="#" className="px-4 py-2 bg-primary rounded-sm">
            Contact
          </a>
        </li>
      </ul>

      <AnimatePresence>
        {navExpanded && (
          <motion.ul
            className="absolute bg-primary text-neutral-100 w-[95%] top-full mt-2.5 rounded-md z-50 sm:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {["Home", "Flavors", "Location"].map((text, index) => (
              <motion.li
                key={index}
                className="pt-4 px-8 font-bold first:pt-6"
                variants={menuItemVariants}
              >
                <a href="#">{text}</a>
              </motion.li>
            ))}

            <motion.li
              className="py-2 px-5 rounded-sm mx-8 mt-4 mb-6 bg-neutral-100 inline-block text-primary font-bold"
              variants={menuItemVariants}
            >
              <a href="#">Contact</a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
