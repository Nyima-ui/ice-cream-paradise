import React from "react";
import threeIceCreams from "../assets/images/timingDesktop.webp";
import threeIceCreamsForMobile from "../assets/images/timingMobile.webp";
import Button from "./Button";

const BusinessHoursBanner = () => {
  return (
    <section className="mb-10 md:mt-20 md:mb-22.5 lg:mb-40 lg:mt-33">
      <div className="sm:flex sm:items-center max-w-[75rem] mx-auto h-auto">
        <picture className="sm:order-2">
          <source media="(max-width: 430px)" srcSet={threeIceCreamsForMobile} />
          <source media="(min-width: 431px)" srcSet={threeIceCreams} />
          <img
            src={threeIceCreams}
            alt="Three ice creams being held together."
            className="md:transform md:scale-135 lg:scale-150 md:-translate-x-17 lg:-translate-x-28"
            loading="lazy"
          />
        </picture>
        <div className="container py-7.5 pl-7.5 pr-2 sm:order-1 lg:pl-17.5">
          <h2
            className="font-fredoka font-normal text-lg text-primary leading-[30px] lg:text-[40px] lg:leading-[47px]"
            aria-labelledby="Business hours heading"
          >
            Open daily from <br /> 10 AM to 8 PM
          </h2>
          <p className="font-nunito text-neutral-300 my-3.5 lg:my-5 lg:text-[18px]">
            Perfect for a mid-day treat or <br /> evening chill with a view.
          </p>
          <Button className="sm:hidden">Visit our store</Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessHoursBanner;
