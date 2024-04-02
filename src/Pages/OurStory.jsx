import React from "react";
import img from "../assets/OurStory.png";
import img1 from "../assets/OurStory2.png";
import img2 from "../assets/OurStory3.png";
import backimg from "../assets/Back.png";
import { Link } from "react-router-dom";
import SubFooter from "../Components/SubFooter";
import Footer2 from "../Components/Footer2";

const OurStory = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="relative">
          <img
            src={img}
            alt="An Image"
            className="w-full h-[316px] z-[-1] opacity-50 object-cover "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="font-medium sm:text-3xl lg:text-5xl size-[48px] leadig-[72px] h-[72px] w-[224px] font-poppins">
              Our Story
            </p>
            <p className="">
              <ul className="md:mt-3 flex gap-1 ml-10 mt-10">
                <li>
                  <Link to="/" className="font-poppins text-black opacity-95 ">
                    Home
                  </Link>
                </li>
                <li className="font-poppins text-black opacity-95">
                  <strong>&gt;</strong>
                </li>
                <li>
                  <Link
                    to="/OurStory"
                    className="font-poppins text-black opacity-95 lg:text-base "
                  >
                    Our Story
                  </Link>
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="w-full ">
          <p className="text-center mt-6 sm:mt-8 lg:mt-10  sm:text-5xl lg:text-6xl text-[#AF835E;] font-poppins ">
            The Future Of Wooden Galaxy
          </p>

          <h3 className="mb-3 sm:mb-4 lg:mb-0 lg:mt-5 font-poppins text-center text-md sm:text-lg lg:text-2xl sm:mx-auto ml-3 mr-3 mt-2">
          "Where comfort meets craftsmanship: Wooden Galaxy's celestial <br />
          furniture collection."
        </h3>

        <div
          className="bg-opacity-50 bg-cover lg:pt-20"
          style={{ backgroundImage: `url(${backimg})` }}
        >
          <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
            <img
              className="lg:h-[748px] lg:w-[7048px] lg:ml-2 mt-6 -ml-3 md:-ml-10 max-size-[748px] sm:ml-8"
              src={img1}
              alt="image"
            />

          

          {/* <div
            className="bg-opacity-50 bg-cover lg:pt-20"
            style={{ backgroundImage: `url(${backimg})` }}
          >
            <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
              <img
                className="w-full sm:w-1/2 lg:w-1/3 lg:ml-2 mt-6 -ml-3 md:-ml-10 max-size-[748px] sm:ml-8"
                src={img1}
                alt="image"
              /> */}

              {/* <div className=" mt-6 lg:mt-0">
                <p className=" text-center md:text-left lg:text-left sm:text-lg lg:text-2xl font-normal lg:ml-16 font-poppins ">
                  WE DESIGN FURNITURE
                </p>
                <br />
                <p className=" text-center md:text-left text-[#AF835E;] text-sm sm:text-lg lg:text-2xl font-normal lg:ml-16 lg:text-[46px] font-poppins">
                  Simple Creative
                </p>
                <br />
                <br />
                <div className="mx-auto px-3 font-normal text-[26px] leading-[39px] text-start lg:ml-12 lg:mr-36"> */}

              <div className=" mt-6 lg:mt-0">
                <p className=" text-center md:text-left lg:text-left sm:text-lg lg:text-2xl font-normal lg:ml-16 font-poppins ">
                  WE DESIGN FURNITURE
                </p>
                <br />
                <p className=" text-center md:text-left text-[#AF835E;] text-sm sm:text-lg lg:text-2xl font-normal lg:ml-16 lg:text-[46px] font-poppins">
                  Simple Creative
                </p>
                <br />
                <br />
                <div className="mx-auto px-3 font-normal text-[26px] leading-[39px] text-start lg:ml-12 lg:mr-36">
                  Step into a universe of timeless elegance with Wooden Galaxy.
                  Our curated collection brings together simplicity and
                  creativity, offering you furniture pieces that elevate your
                  space with natural charm. Explore the stars of craftsmanship
                  and design, where every piece tells a story of style and
                  sophistication Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Obcaecati adipisci, molestias odit possimus,
                  numquam reiciendis laboriosam neque eos, itaque mollitia
                  voluptatem. Ipsum quod corporis vel culpa eius sit
                  repellendus. Vel.
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
              <div className=" mt-6 lg:mt-24 lg:ml-12 ">
                <p className="text-sm sm:text-lg lg:text-2xl font-normal font-poppins lg:ml-5 text-center md:text-left">
                  WE DESIGN FURNITURE
                </p>
                <br />
                <p className="text-[#AF835E;] lg:text-2xl font-normal lg:text-[46px] lg:ml-5 text-center md:text-left">
                  Design Quaility
                </p>
                <br />
                <br />
                <div className="mx-auto px-3 font-normal text-[26px] leading-[39px] text-start">
                  Step into a universe of timeless elegance with Wooden Galaxy.
                  Our curated collection brings together simplicity and
                  creativity, offering you furniture pieces that elevate your
                  space with natural charm. Explore the stars of craftsmanship
                  and design, where every piece tells a story of style and
                  sophistication Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Obcaecati adipisci, molestias odit possimus,
                  numquam reiciendis laboriosam neque eos, itaque mollitia
                  voluptatem. Ipsum quod corporis vel culpa eius sit
                  repellendus. Vel.
                </div>
              </div>
              <img
                className="max-size-[748px] lg:h-[748px] mt-24"
                src={img2}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
      <Footer2 />
    </>
  );
};

export default OurStory;
