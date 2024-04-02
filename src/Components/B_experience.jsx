import React from "react";
import rectangle from "../assets/Rectangle1451.png";
import material from "../assets/Rectangle1446.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import material_1 from "../assets/Group48095417.png";
import material_2 from "../assets/Group48095419.png";

const B_experience = () => {
  return (
    <div>
      <section className="m-2 sm:m-0 sm:mt-10">
        <div className="md:flex md:gap-20">
          <div className="flex relative flex-col items-center">
            <img
              className="rounded-xl h-[445px] w-[629px] z-50"
              src={rectangle}
              alt="image"
            />
            <div className="absolute md:block hidden w-full h-[80px] z-10 -top-12 rounded-3xl -left-24 bg-[#F7f7f7]"></div>
            <div className="absolute md:block hidden w-full h-[301px] z-10 top-16 rounded-3xl -right-12 bg-[#F7f7f7]"></div>
          </div>
          <div className=" text-center p-2 md:w-[400px] md:text-left">
            <h5 className="italic text-[#E58411] font-ABeeZee mb-5  tracking-widest text-sm leading-5">
              EXPERIENCES
            </h5>
            <h2 className="text-[#1E1E1E] italic text-[30px] lg:text-[42px] font-ABeeZee font-normal lg:leading-[49.64px]">
              We Provide You The <br /> Best Experience
            </h2>
            <p className="text-[#1E1E1E]  text-[18px] opacity-70 font-ABeeZee font-normal italic mt-4 lg:eading-[33.3px]">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
            <a
              href="#"
              className="mt-6 flex justify-center md:justify-start italic font-ABeeZee font-normal leading-[26px] text-[14px] text-[#E58411]"
            >
              More info
              <i className="ml-3">
                <svg
                  width="48"
                  height="24"
                  viewBox="0 0 48 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.4H42M42 12.4C42 12.4 37.5119 9.44842 36.6 7M42 12.4C42 12.4 38.0324 15.1734 36.6 17.8"
                    stroke="#E58411"
                    stroke-linecap="square"
                  />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </section>

      <section className="m-2  sm:m-0 sm:mt-20">
        <div className="flex flex-col-reverse md:flex md:flex-row md:gap-20 md:justify-end">
          <div className="text-center justify-center flex flex-col py-2 sm:pl-[5%] md:w-[400px] md:text-left lgb:mt-24">
            <h5 className="italic text-[#E58411] font-ABeeZee mb-5  tracking-widest text-sm leading-5">
              MATERIALS
            </h5>
            <h2 className="text-[#1E1E1E] italic text-[30px] lg:text-[42px] font-ABeeZee font-normal lg:leading-[49.64px]">
              Very Serious Materials For <br /> Making Furniture
            </h2>
            <p className="text-[#1E1E1E]  text-[18px] opacity-70 font-ABeeZee font-normal italic mt-5 lg:eading-[33.3px]">
              Because WG was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <a
              href="#"
              className="mt-6 flex justify-center md:justify-start italic font-ABeeZee font-normal leading-[26px] text-[14px] text-[#E58411]"
            >
              More info
              <i className="ml-3">
                <svg
                  width="48"
                  height="24"
                  viewBox="0 0 48 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.4H42M42 12.4C42 12.4 37.5119 9.44842 36.6 7M42 12.4C42 12.4 38.0324 15.1734 36.6 17.8"
                    stroke="#E58411"
                    stroke-linecap="square"
                  />
                </svg>
              </i>
            </a>
          </div>

          <div className=" flex flex-col  items-center md:flex md:flex-row md:justify-center">
            <div className=" flex flex-col justify-end">
              <img
                className="w-[223px] h-[200px] lg:h-[250px] hidden md:block"
                src={material_1}
                alt="chair"
              />
              <img
                className="w-[223px] h-[200px] lg:h-[338.42px] hidden md:block"
                src={material_2}
                alt="sofa"
              />
            </div>

            <div className="flex h-[629px] justify-center w-[345px] flex-col items-center">
              <img className="rounded-xl" src={material} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B_experience;
