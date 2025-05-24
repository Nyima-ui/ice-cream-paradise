import React from "react";
import aboutus1 from "../assets/images/aboutUs1.webp";
import aboutUs2 from "../assets/images/aboutUs2.webp";

const AboutUs = () => {
  return (
    <section className="mb-10 md:mb-30">
      <div className="bg-accent-500/15 p-2.5 rounded-md sm:flex sm:items-center max-w-[75rem] mx-auto lg:p-5">
        <div className="flex gap-4">
          <div className="shadow-xl h-fit">
            <img
              src={aboutus1}
              alt="A hand holding a colorful ice cream cone with traditional temples in the background."
              loading="lazy"
              width="100%"
              height="100%"
            />
          </div>
          <div className="mt-22 shadow-xl">
            <img
              src={aboutUs2}
              alt="A group of friends holding different flavored ice creams against a scenic mountain backdrop."
              loading="lazy"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="pl-7.5 md:pl-15 mt-2 max-w-[22.313rem] sm:max-w-[50%] md:max-w-[23.75rem]">
          <h2 className="font-fredoka font-normal text-lg text-primary leading-[30px] lg:text-[2.5rem] lg:leading-[47px]">
            About Us
          </h2>
          <p className="font-nunito text-neutral-300 my-3.5 lg:my-5 lg:text-[18px]">
            We began our ice cream journey last year in sunny Nubra, starting
            with classic flavors like chocolate, mango, and vanilla. This year,
            with better machines and creamier scoops, you can now enjoy your ice
            cream at our cozy spot with a stunning view of Diskit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
