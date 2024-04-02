import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import Navimg from "../assets/navbg.png";
import Trolley from "../assets/Trolley.png";
import Logo from "../assets/Logo.png";
import Wish from "../assets/Wishlist.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* <div
        className="relative h-[1084px] "
        style={{
          backgroundImage: `url(${Navimg})`,
          backgroundSize: "cover",
        }}
      > */}

      <div
        className="relative h-[1084px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Navimg})`,
        }}
      >
        <div
          className="h-24 p-4 flex text-white w-full 
                justify-between absolute text-sm font-light"
        >
          <div>
            <img src={Logo} alt="" className="h-12 w-24" />
          </div>

          <div className="flex gap-4 md:w-4/6 w-auto  justify-between">
            <div>
              <div className="flex justify-end md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text- focus:outline-none"
                >
                  <AiOutlineMenuUnfold size={32} className="ml- mt-2" />
                </button>
              </div>
              <div className={`md:flex ${showMenu ? "block" : "hidden"}`}>
                <ul className="flex md:flex-row font-abhaya-libre font-extrabold flex-col gap-7 pt-3 ">
                  <Link className="leading-5 text-lg" to="/">
                    Home
                  </Link>
                  <li className="relative group">
                    <div className="flex gap-2">
                      <div>
                        <Link
                          className="leading-5 text-lg flex gap-2"
                          to="/Shop"
                        >
                          Shop{" "}
                        </Link>
                      </div>
                      <div>
                        <IoIosArrowDown
                          onClick={() => toggleMenu()}
                          className="h-6"
                        />
                      </div>
                    </div>
                    {showMenu && (
                      <ol className="absolute text-black left-0 mt-2 font-poppins px-5 p-2 gap-12 font-semibold flex  bg-white shadow-lg h-40  rounded-md">
                        <li>
                          <Link className="leading-5 text-lg" to="/living">
                            {" "}
                            Living
                          </Link>
                          <ul className="mt-3 list-disc">
                            <li className="text-nowrap font-normal text-[14px] leading-[16.91px] ">
                              Modular Sofas
                            </li>
                            <li className="text-nowrap font-normal text-[14px] leading-[16.91px] ">
                              2 and 3 seater sofas
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link className="leading-5 text-lg" to="/dining">
                            Dining
                          </Link>
                          <ul className="mt-3 list-disc">
                            <li className="text-nowrap font-normal text-[14px] leading-[16.91px] ">
                              4-seater Dining
                            </li>
                            <li className="text-nowrap font-normal text-[14px] leading-[16.91px] ">
                              6- seater Dining
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link className="leading-5 text-lg" to="/bedroom">
                            Bedroom{" "}
                          </Link>
                          <ul className="mt-3 list-disc">
                            <li className="text-nowrap font-normal text-[14px] leading-[16.91px] ">
                              King size Beds
                            </li>
                            <li className="text-nowrap font-normal text-[14px] leading-[16.91px] ">
                              Queen size Beds
                            </li>
                            <li className="text-nowrap font-normal text-[14px] leading-[16.91px] ">
                              Single size Beds
                            </li>
                          </ul>
                        </li>
                      </ol>
                    )}
                  </li>

                  {/* <Link to="/Shop">Shop</Link> */}
                  <Link className="leading-5 text-lg" to="/OurStory">
                    Our Story
                  </Link>
                  <Link className="leading-5 text-lg" to="/Faq">
                    Faq
                  </Link>
                  <Link className="leading-5 text-lg" to="/Blog">
                    Blog
                  </Link>
                  <Link className="leading-5 text-lg" to="/Contact">
                    Contact
                  </Link>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 pb-5">
              <div className="flex items-center">
                <IoMdLogIn size={25} color="blue" />
                <Link to="/Login" style={{ opacity: 1 }}>
                  <h1 className="font-abhaya-libre font-semibold">Login</h1>
                </Link>
              </div>
              <div className="flex items-center ">
                <img src={Wish} alt="" className="h-6 w-6" />
              </div>
              <div className="flex items-center ">
                <img src={Trolley} alt="" className="h-6 w-7" />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="flex justify-center">
          <h1 className="absolute font-ABeeZee text-white text-[40px] md:text-[50px] lg:text-[60px] font-normal text-center mt-32 md:mt-32 lg:mt-36 italic">
            Make Your Interior More <br /> Minimalist & Modern
          </h1>

          {/* <div className="mt-[30rem] absolute border-2 bg-gray-400 bg-opacity-45 w-[344px] h-[56px] flex justify-between pl-2 pr-1 rounded-full ">
            <div className="text-white flex pl-4 font-abhaya-libre items-center">
              <h1>Search furniture</h1>
            </div>
            <div className="h-[40px] w-[40px] mt-1.5 bg-[#E58411] mr-1 rounded-full flex items-center justify-center">
              <IoSearch size={16} />
            </div>
          </div> */}
          <div className="mt-[30rem] absolute border-2 bg-gray-400 bg-opacity-45  sm:w-[200px] md:w-[250px] lg:w-[344px] h-[56px] flex justify-between pl-2 pr-1 rounded-full ">
            <div className="text-white flex pl-4 font-abhaya-libre items-center">
              <h1>Search furniture</h1>
            </div>
            <div className="h-[40px] w-[40px] mt-1.5 bg-[#E58411] mr-1 rounded-full flex items-center justify-center">
              <IoSearch size={16} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
