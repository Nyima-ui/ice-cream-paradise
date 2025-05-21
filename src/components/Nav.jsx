import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/svg/logo.svg";

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

const Nav = () => {
  const [navExpanded, setnavExpanded] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!e.target.closest("nav")){
        setnavExpanded(false); 
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navExpanded]);

  return (
    <nav className="flex justify-between m-7 items-center relative font-nunito">
      <a href="#" className="h-[44px]">
        <img src={logo} alt="Logo" className="h-full w-full" />
      </a>

      <button
        onClick={() => setnavExpanded((prev) => !prev)}
        className="relative h-7 w-6 py-0.5"
      >
        <motion.div
          animate={{
            rotate: navExpanded ? 45 : 0,
            y: navExpanded ? 9 : 0,
          }}
          className="w-full h-[2.5px] bg-primary origin-center rounded-sm my-1.5"
          transition={{ duration: 0.3 }}
        />

        <motion.div
          animate={{
            opacity: navExpanded ? 0 : 1,
          }}
          className="w-full h-[2.5px] bg-primary origin-center rounded-sm my-1.5"
          transition={{ duration: 0.2,}}
        />

        <motion.div
          animate={{
            rotate: navExpanded ? -45 : 0,
            y: navExpanded ? -7 : 0,
          }}
          className="w-full h-[2.5px] bg-primary origin-center rounded-sm my-1.5"
          transition={{ duration: 0.3 }}
        />
      </button>

      <AnimatePresence>
        {navExpanded && (
          <motion.ul
            className="absolute bg-primary text-neutral-100 w-full top-full mt-2.5 rounded-md z-50"
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
              className="py-2 px-5 rounded-sm mx-8 mt-4 mb-6 bg-neutral-100 border inline-block text-primary font-bold"
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

export default Nav;
