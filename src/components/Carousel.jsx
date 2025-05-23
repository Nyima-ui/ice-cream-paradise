import React, { useEffect, useRef, useState } from "react";
import { desktopFlavorCards } from "../data/flavors";
import Button from "./Button";

const CARD_WIDTH = 251;
const GAP_WIDTH = 16;

const Carousel = () => {
  const scrollContainer = useRef(null);
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / (CARD_WIDTH + GAP_WIDTH));
      setcurrentIndex(index);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="my-10" aria-label="Trending Flavors carousel section">
      <h2 className="my-7.5 text-center font-fredoka font-normal text-primary text-lg lg:text-[40px] lg:leading-[45px]">
        Trending Flavors
      </h2>

      <div
        className="px-2.5 flex overflow-x-scroll gap-6 hide-scrollbar max-w-[75rem] mx-auto"
        ref={scrollContainer}
      >
        {desktopFlavorCards.map((item, index) => (
          <article className="min-w-[251px]" key={index}>
            <img src={item.image} alt={`${item.flavor} ice cream.`} loading="lazy" />
            <p className="font-nunito text-primary mt-4 font-semibold text-md text-center">
              {item.flavor}
            </p>
          </article>
        ))}
      </div>

      <ul
        className="flex justify-center gap-4 mt-5 sm:hidden"
        role="list"
        aria-label="Carousel slide indicators"
      >
        {desktopFlavorCards.map((_, index) => (
          <li
            key={index}
            className={`size-2.5 rounded-full transition-all duration-300 
            ${currentIndex === index ? "bg-primary" : "bg-primary/25"}`}
            aria-current={currentIndex === index ? "true" : "false"}
            role="listitem"
          ></li>
        ))}
      </ul>

      <Button className="hidden sm:block mt-15 mx-auto" aria-label="Visit our store">Visit our store</Button>
    </section>
  );
};

export default Carousel;
