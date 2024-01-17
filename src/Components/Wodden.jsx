import React, { useEffect } from "react";
import woodensofa from "../Assets/Images/wooden-sofa.webp";
import Samebtn from "./Samebtn";
import AOS from "aos";
import "aos/dist/aos.css";
const Wodden = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className=" relative">
      <div className="bg-[#f7f7f8] ">
        <div className="max-w-[1340px]  px-3 mx-auto overflow-hidden">
          <div className="flex flex-row items-center justify-center flex-wrap py-[30px] md:pt-[64px]  -mx-3 ">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className=" 910:w-1/3 px-3"
            >
              <div className="flex flex-col md:flex-row items-center justify-center 910:justify-start  gap-2">
                <span className="w-[95px] h-[1px] bg-black"></span>
                <p className="text-xl font-ff-pop font-normal not-italic leading-normal text-[#BD7D41]">
                  Shopping Store
                </p>
              </div>
              <p className="910:max-w-[426px] text-center 910:text-start font-bold font-ff-pop leading-normal text-[30px] md:text-[35px] text-[#243040] not-italic md:pt-[24px] md:pb-[53px]">
                Wooden Sofa Starts From{" "}
                <span className="text-[33.53px] font-semibold">₹1200.00</span>
              </p>
              <div className="flex justify-center 910:justify-start">
                <Samebtn text="SHOP NOW" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className=" 910:w-2/3 z-10 px-3"
            >
              <div className="relative pt-5 md:pt-0">
                <img
                  className="w-full  relative z-50"
                  src={woodensofa}
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="w-[280px] md:w-[400px] z-0 xl:w-[741px] h-[100px] sm:h-[200px] xl:h-[270px] bg-[#243040] absolute bottom-0 xl:bottom-[-10%] right-0"></span>
      </div>
    </div>
  );
};

export default Wodden;
