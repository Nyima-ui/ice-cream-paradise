import React from "react";
import Button from "./Button";

const LocatedAt = () => {
  return (
    <section className="mb-10 lg:mb-30">
      <div className="sm:flex max-w-[75rem] mx-auto justify-between items-center">
        <div className="min-w-[280px] max-w-[814px] h-[456px] grow-1">
          <iframe
          title="Map showing Ice-cream paradise location."
          aria-label="Google map for Ice-cream paradise."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.3877295070083!2d77.54638451875135!3d34.54839821729434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdb5298497b2e7%3A0xbf1f57f9731dfee0!2sNubra%20Souvenir!5e0!3m2!1sen!2sin!4v1747971268829!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="py-7.5 pl-7.5 lg:pl-15 pr-2 sm:max-w-[40%]">
          <h2 className="font-fredoka font-normal text-lg text-primary leading-[30px] lg:text-[40px] lg:leading-[45px]">
            Where to find us?
          </h2>
          <p className="font-nunito text-neutral-300 my-3.5 lg:my-5 lg:text-[18px] lg:max-w-[320px]">
            We're located in the Lamdon Complex, <br className="hidden lg:block"/> Diskit Nubra—just minutes from
            the famous sand dunes and conveniently close to a popular gift shop.
          </p>
          <Button className="mt-3.5">Leave a review</Button>
        </div>
      </div>
    </section>
  );
};

export default LocatedAt;
