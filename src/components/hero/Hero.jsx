import React from "react";
import HeroBg from "../../assets/hero/hero.png";
import Navbar from "../navbar/Navbar";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center !pt-8 "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <Navbar />
      <div className="flex flex-col items-center h-full text-center text-white !mt-40">
        <h1 className="text-[#DA6300]  text-[32px] lg:text-[48px] font-semibold lg:leading-[48px] lg:tracking-[-0.31px] !px-4 lg:!px-0">
          Experienced Salesforce Implementation <br />
          Consultants
          <span className="!ml-2 text-white">Based in North America</span>
        </h1>
        <p className="text-[#E6DFDA] text-center lg:text-[18px] font-normal leading-[32px] w-full lg:w-[725px] !mt-4 !px-4 lg:!px-0">
          We help businesses deploy cloud based Solutions that improve
          productivity and are readily available and accessible to all employees
          working within the organization.
        </p>

        <button className="bg-[#DA6300] !px-[21px] !pt-[13px] !pb-[14.19px] rounded-[6px] text-white lg:!mt-50 !mt-20 flex items-center gap-2">
          Request a Free Consultation <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default Hero;
