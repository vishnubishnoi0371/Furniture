import React, { useEffect } from "react";
import { Facebook, Insta, Nav_icon, Twiter } from "../Common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const My_footer = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="bg-[#243040]">
        <div className="max-w-[1340px]  px-3 mx-auto lg:py-[55px]">
          <div className="flex flex-row items-center justify-center flex-wrap overflow-hidden  -mx-3 py-[30px] xl:py-[50px]">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className=" sm:w-1/2 w-full px-3 "
            >
              <div className="flex items-center cursor-pointer gap-[7px]">
                <div className="nav_svg">
                  <Nav_icon />
                </div>
                <p className="font-ff-rob font-bold text-white text-[27px] md:text-[33.02px]  not-italic">
                  FURNITURE{" "}
                </p>
              </div>
              <p className="text-[14px] font-normal text-white not-italic font-ff-rob md:max-w-[338px] leading-normal pb-[23px] pt-3 md:pt-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
              <div className="gap-3 flex items-center">
                <span className="cursor-pointer  duration-500 hover:translate-y-[-20%]    ">
                  <Insta />
                </span>
                <span className="w-[30px]  duration-500 hover:translate-y-[-20%]     cursor-pointer h-[30px] rounded-full bg-transparent border-[1px] border-white flex justify-center items-center">
                  <Twiter />
                </span>
                <span className="w-[30px]  duration-500 hover:translate-y-[-20%]     cursor-pointer h-[30px] rounded-full bg-transparent border-[1px] border-white flex justify-center items-center">
                  <Facebook />
                </span>
              </div>
            </div>
            <div className=" sm:w-1/2 w-full px-3">
              <div className="flex flex-row items-center pt-4 md:pt-0 flex-wrap   -mx-3">
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="w-1/2 xxs:w-1/3  px-3"
                >
                  <p className="text-white text-nowrap text-[14px] font-medium font-ff-rob not-italic leading-normal uppercase before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 relative">
                    ABOUT STORE
                  </p>
                  <ul className="ps-0 pt-3 md:pt-[19px]">
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Home
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Shop
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Product
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal text-nowrap  cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Festival Offer
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="w-1/2 xxs:w-1/3  px-3"
                >
                  <p className="text-white text-[14px] font-medium font-ff-rob not-italic leading-normal uppercase before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 relative">
                    BRANDS{" "}
                  </p>
                  <ul className="ps-0 pt-3  md:pt-[19px]">
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Album
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Shop
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Product
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Festival Offer
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="w-1/2 xxs:w-1/3  px-3"
                >
                  <p className="text-white pt-4 xxs:pt-0 text-[14px] font-medium font-ff-rob not-italic leading-normal uppercase before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-[#BD7D41] before:contents'' hover:before:w-full hover:before:right-0 relative">
                    CATEGORIES{" "}
                  </p>
                  <ul className="ps-0 pt-3 md:pt-[19px]">
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Single
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal text-nowrap cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Aleeper Sofas
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal text-nowrap cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Accent Chairs
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Festival Offer
                      </a>
                    </li>
                    <li className="md:pb-[13px]">
                      <a
                        href="#"
                        className="font-normal cursor-pointer  font-ff-rob text-[14px] text-white relative not-italic leading-normal before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-[#91979f] h-[1px]" />
        <p className="font-ff-rob font-normal text-[14px] text-white not-italic leading-normal text-center py-3 lg:py-[28px]">
          @copyright2021
        </p>
      </div>
    </div>
  );
};

export default My_footer;
