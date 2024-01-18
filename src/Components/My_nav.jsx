import { Nav_icon, Search, Search_2 } from "../Common_svg/icon";
import React, { useState, useEffect } from "react";
import Samebtn from "./Samebtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const My_nav = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [first, setfirst] = useState(false);
  function view() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  }
  const [data, setdata] = useState(true);
  function InputImg() {
    const newColor = data === "srch" ? "srchbar" : "srch";
    setdata(newColor);
  }
  return (
    <div className="sm:pb-[67px]">
      <div className="bg-[url('./Assets/Images/bg_hero.webp')]  bg-no-repeat md:bg-100% h-[600px] md:h-[810px] bg-cover bg-right lg:h-[930px]  overflow-hidden">
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
            <div className="flex items-center gap-[25px] xl:gap-[40px]">
              <ul
                className={`${
                  first ? "left-0" : "left-[-100%]"
                } flex flex-col fixed md:ps-8 items-center z-30 justify-center top-0 right-full bg-[#505c6a] lg:w-[unset] lg:flex-row lg:h-[unset] lg:bg-transparent duration-300   ps-0 gap-[30px]  xl:gap-[55px]  w-full h-full   nav_set`}
              >
                <Link
                  onClick={view}
                  to="/"
                  className="list-none rounded-[3px] text-nowrap uppercase cursor-pointer text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-2 stroke  before:right-full before:duration-500 duration-500  before:h-[3px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 "
                >
                  <a href="#locatio">Home</a>
                </Link>
                <Link
                  onClick={view}
                  to="/about"
                  className="list-none rounded-[3px] text-nowrap uppercase cursor-pointer text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-2 stroke  before:right-full before:duration-500 duration-500  before:h-[3px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 "
                >
                  <a href="#schdul">About us</a>
                </Link>
                <Link
                  onClick={view}
                  to="/shop"
                  className="list-none rounded-[3px] text-nowrap uppercase cursor-pointer text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-2 stroke  before:right-full before:duration-500 duration-500  before:h-[3px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 "
                >
                  <a href="#Ticke">Shop</a>
                </Link>
                <Link
                  onClick={view}
                  to="/contact"
                  className="list-none rounded-[3px] cursor-pointer text-nowrap uppercase text-white text-lg font-normal font-ff-rob leading-normal not-italic relative before:absolute before:w-0 before:-bottom-2 stroke  before:right-full before:duration-500 duration-500  before:h-[3px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0"
                >
                  <a href="#memoris">Contact us</a>
                </Link>
              </ul>
              <div className="flex items-center">
                <div
                  className={`${
                    data === "srch"
                      ? "px-1 right-0  "
                      : " right-100 z-10 px-3 border border-gray-400  bg-slate-600  "
                  }  rounded-[8px] items-center max-[380px]:max-w-[280px]   w-full md:right-[80%] xxs:static top-[100%] xxs:top-[8%] md:top-0 max-[640px]:max-w-[200px] right-5 xsm:right-9 justify-between absolute  md:py-1 flex  lg:h-unset lg:static lg:right-0 lg:bg-transparent z-10 transition-all ease-linear duration-300`}
                >
                  <input
                    type="search"
                    placeholder="Search"
                    id="abc"
                    className={`${
                      data === "srch"
                        ? "w-0  duration-600"
                        : "max-[425px]:w-[100%] w-full duration-600"
                    } outline-none text-white bg-transparent font-medium  transition-all duration-500 `}
                  />
                </div>
                <span onClick={InputImg} className="group  cursor-pointer ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      className="group-hover:fill-[#BD7D41] duration-300 transition-all ease-linear"
                      d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            
              <a href="#" className="pe-16">
                <Search_2 />
              </a>
              <button
                onClick={view}
                className=" z-30 absolute block font-medium md:font-bold border-none tracking-[3px] rotate-90 lg:hidden right-[20px] xxs:right-[30px] md:right-[30px] top-[26px] xxs:top-[34px] md:top-[38px]   text-white"
              >
                |||
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="3500"
          className="flex flex-col justify-center items-center h-[450px] sm:h-[385px] lg:h-[580px] xl:h-[620px]"
        >
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
  );
};

export default My_nav;
