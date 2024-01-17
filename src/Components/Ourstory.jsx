import React, { useEffect } from "react";
import sofa from "../Assets/Images/story_image_1.webp";
import Samebtn from "./Samebtn";
import { Video_icon } from "../Common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const Ourstory = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="max-w-[1340px]  px-3 mx-auto py-[67px] overflow-hidden">
        <div className="flex flex-row items-center justify-center flex-wrap lg:pb-[50px]  -mx-3 ">
          <div className=" 910:w-1/2 px-3">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex relative justify-center"
            >
              <span className="w-full h-full md:w-[416px] md:h-[336px]  bg-gradient-to-r from-[#243040] to-[#8C939B] absolute top-[-14%] xxs:left-[-10%] md:left-[-8%] lg:left-6"></span>
              <div className="relative z-10">
                <img
                  className="w-full md:w-[456px] z-10  max-h-[496px]"
                  src={sofa}
                  alt="#"
                />
                <div className="py-3 md:py-[17px] z-20 px-3 md:px-[15px] flex  items-center bg-white  gap-3 bottom-0 right-0 absolute">
                  <p className="text-[14px] font-normal font-ff-pop not-italic leading-normal text-[#243040] text-center">
                    Explore Video
                  </p>
                  <span className="w-[66px] h-[1px] bg-[#243040]"></span>
                  <div className="w-[45px] rounded-full h-[45px] flex justify-center items-center bg-[#BD7D41]">
                    <Video_icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className=" 910:w-1/2 px-3"
          >
            <div className="flex flex-col md:flex-row  items-center justify-center 910:justify-start gap-[11px] pt-5 lg:pt-0">
              <span className="w-[95px] h-[1px] bg-black "></span>
              <p className="text-xl font-ff-pop font-normal text-[#BD7D41] not-italic leading-normal">
                Welcome Our Story
              </p>
            </div>
            <p className="text-[30px] md:text-[35px] py-[19px] text-center 910:text-start font-ff-pop font-bold text-[#243040] 910:max-w-[436px] not-italic leading-normal">
              We create the product you tell us you wish existed.
            </p>
            <p className="font-ff-pop font-normal text-center 910:text-start 910:max-w-[596px] text-lg not-italic leading-normal pb-[34px] text-[#4d4d4d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, urna at pulvinar porta, augue lorem ullamcorper orci,
              non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper
              ante et mattis
            </p>
            <div className="flex justify-center 910:justify-start">
              <Samebtn text="Read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourstory;
