import React from "react";
import logo from "../assets/svg/logo.svg";

const Footer = () => {
  return (
    <footer className="footer pb-10 pt-0.5" id="Footer">
      <div className="mt-40 md:mt-20 pl-7.5 pr-5 space-y-8 py-10 flex max-sm:flex-col gap-9 flex-wrap max-w-[75rem] justify-between md:pl-0 mx-auto">
        <div>
          <a href="/">
            <img src={logo} alt="Logo of ice-cream paradise." />
          </a>
          <p className="paragraph-text">
            Scoopin’ happiness daily, <br /> one flavor at a time. <br /> Made
            with love, served with a smile.
          </p>
        </div>
        <div>
          <h3 className="h3">Address</h3>
          <address>
            <p className="paragraph-text">
              <a
                href="https://maps.app.goo.gl/Rgnmpt6LvywmtmGc7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-100"
              >
                Lamdon Complex, <br /> Taste of Tibet. <br /> Diskit Nubra
              </a>
            </p>
          </address>
        </div>
        <div>
          <h3 className="h3">Contact</h3>
          <ul className="paragraph-text">
            <li>
              <a
                href="tel:9419529117"
                className="hover:text-primary transition-all duration-100"
                title="Call 9419529117"
                rel="noreferrer"
              >
                9419529117
              </a>
            </li>
            <li>
              <a
                href="tel:3458723474"
                rel="noreferrer"
                className="hover:text-primary transition-all duration-100"
              >
                3458723474
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Social media links">
          <h3 className="h3">Socials</h3>
          <ul className="flex gap-5 pt-2.5">
            <li>
              <a
                href="https://www.instagram.com/nawang.gyatso.5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:text-primary/60 transition-colors duration-150"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-3xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/nawang.gyatso.5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:text-primary/60 transition-colors duration-150"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook text-3xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nawanggyatso450@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:text-primary/60 transition-colors duration-150"
                aria-label="Email"
              >
                <i className="fa-regular fa-envelope text-3xl"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
