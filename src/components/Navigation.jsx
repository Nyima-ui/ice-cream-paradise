import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import Navbutton from "./Navbutton";
import Mobilemenu from "./Mobilemenu";
import { navLinks, ctaLinks } from "../data/navigationLinks";

const Navigation = () => {
  const [navExpanded, setnavExpanded] = useState(false);
  return (
    <nav className="max-w-5xl mx-auto flex justify-between items-center mt-5 px-2.5 font-nunito relative">
      <a href="/" className="sm:h-[50px] h-[44px]">
        <img src={logo} alt="Logo" className="h-full w-full" />
      </a>

      <Navbutton navExpanded={navExpanded} setnavExpanded={setnavExpanded} />

      <ul className="flex items-center max-sm:hidden">
        {navLinks.map((item, index) => (
          <li className="text-base text-primary font-medium" key={index}>
            <a href={item.href} className="px-3">
              {item.name}
            </a>
          </li>
        ))}

        {ctaLinks.map((item, index) => (
          <li
            className="text-base text-neutral-100 ml-3 hover:shadow-button transition-all duration-200"
            key={index}
          >
            <a href={item.href} className="px-4 py-2 bg-primary rounded-sm">
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <Mobilemenu navExpanded={navExpanded} setnavExpanded={setnavExpanded} />
    </nav>
  );
};

export default Navigation;
