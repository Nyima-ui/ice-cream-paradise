import React from "react";
import heroImg from "../assets/images/hero.webp";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mt-7.5" role="region" aria-label="Hero section">
      <div className="bg-accent-400 rounded-2xl p-7.5 lg:px-17 sm:flex sm:items-center gap-5 justify-between max-w-[75rem] mx-auto">
        <div className=" max-w-[25.25rem] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[50%]">
          <h1 className="font-nunito text-xl leading-[39px] font-bold text-primary  md:text-[45px] lg:text-[52px] lg:leading-[60px] md:leading-[50px]">
            The Coolest <br />{" "}
            <span className="text-accent-900">Ice-Cream</span> in the Warm Heart
            of Ladakh
          </h1>
          <p className="font-nunito text-neutral-300 text-base mt-3.5 max-w-[26rem]">
            We make fresh, tasty ice cream right here in Nubra Valley. If you're
            visiting this summer, stop by our shop and enjoy a scoop under the
            mountain sun.
          </p>
          <Button className="mt-7.5">Visit our store</Button>
        </div>
        <div className="mt-7.5 rounded-lg overflow-clip sm:mb-3 sm:max-w-[50%]">
          <img
            src={heroImg}
            alt="A person holding a colorful ice cream cone in Nubra Valley."
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
