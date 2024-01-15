import { Nav_icon, Search, Search_2 } from "../Common_svg/icon";
import React, { useState, useEffect } from "react";
import Samebtn from "./Samebtn";
import AOS from "aos";
import "aos/dist/aos.css";
const My_nav = () => {
    useEffect(() => {
      AOS.init({ once: true });
    }, []);
  const [first, setfirst] = useState(false);
  function view() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <div className="sm:pb-[67px]">
      <div className="bg-[url('./Assets/Images/bg_hero.png')]  bg-no-repeat md:bg-100% h-[600px] md:h-[810px] bg-cover bg-right lg:h-[930px]  overflow-hidden">
        <div className="max-w-[1340px] relative px-3 mx-auto ">
          <div className="flex justify-between py-[20px]">
            <div className="flex items-center cursor-pointer gap-[7px]">
              <div className="nav_svg">
                <Nav_icon />
              </div>
              <p className="font-ff-rob font-bold text-white text-xl sm:text-[27px] md:text-[33.02px]  not-italic">
                FURNITURE{" "}
              </p>
            </div>
            <div className="flex items-center gap-[40px]">
              <ul
                className={`${
                  first ? "left-0" : "left-[-100%]"
                } flex items-center fixed z-40  ps-0 gap-[55px] duration-500   nav_set`}
              >
                <li className="list-none uppercase cursor-pointer text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 ">
                  <a href="#locatio">Home</a>
                </li>
                <li className="list-none uppercase cursor-pointer text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 ">
                  <a href="#schdul">About us</a>
                </li>
                <li className="list-none uppercase cursor-pointer text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 ">
                  <a href="#Ticke">Shop</a>
                </li>
                <li className="list-none cursor-pointer uppercase text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0">
                  <a href="#memoris">Contact us</a>
                </li>
              </ul>
              <div className="flex relative items-center gap-[15px] md:gap-[28px]">
                <a href="#">
                  <Search />
                </a>
                <a href="#">
                  <Search_2 />
                </a>
                <button
                  onClick={view}
                  className=" z-30 absolute block font-medium md:font-bold border-none tracking-[3px] rotate-90 lg:hidden right-[70px] md:right-[80px] top-0   text-white"
                >
                  |||
                </button>
              </div>
            </div>
          </div>
          <div  data-aos="zoom-in"
              data-aos-duration="2000" className="flex flex-col justify-center items-center h-[450px] sm:h-[385px] lg:h-[580px] xl:h-[620px]">
            <p className="font-ff-pop font-bold not-italic max-w-[908px] text-center md:leading-normal text-white text-3xl sm:text-5xl">
              Awesome Design Best Furniture For Your Interior
            </p>
            <p className="text-lg sm:text-xl text-white text-center font-normal not-italic font-ff-pop pt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus{" "}
            </p>
            <div className="pt-[51px] pb-10 sm:pb-0">
              <Samebtn text="SHOP NOW" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_nav;
