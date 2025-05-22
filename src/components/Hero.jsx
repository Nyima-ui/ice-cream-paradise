import React from "react";
import heroImg from "../assets/images/hero.webp";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mt-7.5">
      <div className="flex max-w-[75rem] mx-auto bg-accent-400 rounded-2xl px-18.5 py-17.5 max-lg:py-9 max-xl:py-13 items-center justify-between">
        <div className="max-w-[30.5rem] border">
          <h1 className="text-xl max-lg:text-[43px] font-fredoka leading-[60px] max-sm:leading-[40px] text-primary font-semibold">
            The Coolest <br />
            <span className="text-accent-900">Ice-Cream</span> in the Warm Heart
            of Ladakh
          </h1>
          <p className="font-nunito text-base text-neutral-300 mt-5">
            We make fresh, tasty ice cream right here <br />
            in Nubra Valley. If you're visiting this summer, stop by <br /> our
            shop and enjoy a scoop under the mountain sun.
          </p>
          <Button className="mt-15">Visit our store</Button>
        </div>
        <div className="max-xl:h-[33rem]">
          <img
            src={heroImg}
            alt="Ice cream being hold by a person's hand."
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
