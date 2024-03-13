import React from "react";
import img from "../assets/OurStory.png";
import img1 from "../assets/OurStory2.png";
import img2 from "../assets/OurStory3.png";
const OurStory = () => {
  return (
    <div>
       <div>
      <div className="relative">
        <img
          src={img}
          alt="An Image"
          className="w-full h-auto z-[-1] opacity-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-medium text-2xl sm:text-3xl lg:text-4xl">
            Our Story
          </p>
          <p className="text-sm">
            Home <strong>&gt;</strong> Our Story
          </p>
        </div>
      </div>

      <p className="text-center mt-6 sm:mt-8 lg:mt-10 lg:font-bold font-outline-2 sm:text-5xl lg:text-6xl">
        The Future Of Wooden Galaxy
      </p>

      <h3 className="mb-3 sm:mb-4 lg:mb-5 text-center text-md sm:text-lg lg:text-2xl sm:mx-auto">
        "Where comfort meets craftsmanship: Wooden Galaxy's celestial <br />
        furniture collection."
      </h3>

      <div className="flex flex-col sm:flex-row items-center mt-8 sm:mt-10 lg:mt-20 lg:space-x-6 lg:ml-32 sm:ml-0">
        <img
          className="w-full sm:max-w-md lg:max-w-3xl lg:w-[45y0px] mt-6 lg:mt-0 ml-4 sm:ml-6 lg:ml-9"
          src={img1}
          alt="image"
        />
        <div className="sm:max-w-md lg:max-w-xl mt-6 lg:mt-0 sm:mx-auto">
          <h4 className="text-center sm:text-left ml-4 sm:ml-0">
            WE DESIGN FURNITURE <br />
            <br />
            <span className="text-orange-800 text-sm sm:text-lg lg:text-2xl">
              Simple Creative
            </span>
            <br />
            <br />
            Step into a universe of timeless elegance with Wooden Galaxy. Our
            curated collection brings together simplicity and creativity,
            offering you furniture pieces that elevate your space with natural
            charm. Explore the stars of craftsmanship and design, where every
            piece tells a story of style and sophistication.
          </h4>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-8 sm:mt-10 lg:mt-28 lg:ml-40 sm:mx-auto ">
        <div className="sm:max-w-md lg:max-w-xl mt-6 lg:mt-0 ">
          <h4 className="text-center sm:text-left ml-4 sm:ml-0">
            WE DESIGN FURNITURE <br />
            <br />
            <span className="text-orange-800 text-sm sm:text-lg lg:text-2xl">
              Simple Creative
            </span>
            <br />
            <br />
            Step into a universe of timeless elegance with Wooden Galaxy. Our
            curated collection brings together simplicity and creativity,
            offering you furniture pieces that elevate your space with natural
            charm. Explore the stars of craftsmanship and design, where every
            piece tells a story of style and sophistication.
          </h4>
        </div>
        <img
          className="w-full sm:max-w-md lg:max-w-3xl lg:w-[550px] mt-6 lg:mt-0 ml-4 sm:ml-6 lg:ml-9 "
          src={img2}
          alt="image"
        />
      </div>
    </div>
</div>
)
};
export default OurStory;
