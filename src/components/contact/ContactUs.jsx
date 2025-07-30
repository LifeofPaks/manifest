import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactUs = () => {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

  return (
    <div
      className="max-w-[1400px] !mx-auto !py-20 text-white !px-4 "
      id="contact"
    >
      <div className="flex flex-col lg:flex-row items-start justify-center lg:!mb-40 !mb-20 gap-12">
        <div className="w-full lg:w-[700px]">
          <h1 className="text-white text-[32px] font-medium leading-[56px] uppercase">
            Transition To Cloud Seamlessly
          </h1>

          <p className="text-[#ABBCD5] text-[16px] font-normal leading-[32px] w-full lg:w-[500px] !mt-4">
            We offer variable pricing with friendly rate for larger
            organizations.
            <span className="inline text-[#FC8019]"> Get in touch</span> with us
            and we’ll figure out something that works for everyone.
          </p>

          <div className="flex gap-4 !mt-20">
            <div className="grid place-content-center bg-[#FC8019] h-[40px] w-[40px] rounded-full">
              <FaFacebookF className="text-[20px] cursor-pointer" />
            </div>
            <div className="grid place-content-center bg-[#FC8019] h-[40px] w-[40px] rounded-full">
              <FaLinkedinIn className="text-[20px] cursor-pointer" />
            </div>
            <div className="grid place-content-center bg-[#FC8019] h-[40px] w-[40px] rounded-full">
              <FaTwitter className="text-[20px] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="!p-8 w-full lg:w-[500px] rounded-[12px] border border-white/30  backdrop-blur-[45px] bg-[linear-gradient(109deg,rgba(201,201,201,0.50)_1.57%,rgba(196,196,196,0.10)_100%)]">
          <form className="!text-white">
            <label className=""> Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full !p-2 !mb-4  bg-[#949393cc] rounded !mt-1"
            />
            <label className=""> Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full !p-2 !mb-4  bg-[#949393cc] rounded !mt-1"
            />
            <label>What can we help you with?</label>
            <textarea
              placeholder="Enter your message"
              className="w-full h-[100px] !p-2 mb-4  bg-[#949393cc] rounded mt-1 resize-none"
            ></textarea>

            <button className="w-full !mt-6 bg-[#FC8019] h-[50px] rounded font-[600]">
              {" "}
              Send us a message
            </button>
          </form>
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-center lg:!mb-20 !mb-10 gap-8 lg:gap-40 lg:flex-row text-[14px]">
          <a onClick={scrollToTop} className="cursor-pointer">
            HOME
          </a>
          <a href="#services" className="cursor-pointer">
            SERVICES
          </a>
          <a href="#team" className="cursor-pointer">
            OUR TEAM
          </a>
          <a href="#contact" className="cursor-pointer">
            CONTACT US
          </a>
        </ul>
        <div className="flex flex-col items-center justify-center text-center gap-2 text-[14px]">
          <p>© {new Date().getFullYear()} Your Company</p>
          <p>776 Laurelwood Dr. Waterloo, Ontario, Canada.</p>
          <p>business@manifest-company.ca | +1 902 580 7448</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
