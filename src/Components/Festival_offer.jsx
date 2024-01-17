import React, { useEffect } from "react";
import Samebtn from "./Samebtn";
import Same_btn_2 from "./Same_btn_2";
import AOS from "aos";
import "aos/dist/aos.css";
const Festival_offer = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="max-w-[1340px]  px-3 mx-auto xl:py-[50px] overflow-hidden">
        <div className="flex flex-row items-center justify-center flex-wrap py-[50px]  -mx-3 ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className=" sm:w-1/2 w-full px-3 relative"
          >
            <div className="bg-[url('./Assets/Images/offer_1.webp')]  bg-no-repeat md:bg-100%  bg-center   w-full object-cover overflow-hidden">
              <div className="pt-[32px] pb-[70px] lg:flex items-start gap-2  ps-6 lg:ps-0">
                <span className="w-[95px] h-[1px] bg-black mt-3"></span>
                <div>
                  <p className="text-xl font-normal font-ff-pop text-black leading-normal not-italic">
                    Festival Offer
                  </p>
                  <p className="pt-[20px] text-[30px] md:text-[35px] font-bold font-ff-pop not-italic leading-normal text-[#BD7D41] pb-[15px]">
                    Upto 40% Off
                  </p>
                  <p className="text-lg font-normal font-ff-pop not-italic leading-normal text-black max-w-[262px] pb-[38px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>

                  <button className="text-xl shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] py-[10px] px-[12px] bg-[#BD7D41] text-white font-medium font-ff-pop not-italic text-center leading-normal">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className=" sm:w-1/2 w-full px-3 pt-6 sm:pt-0"
          >
            <div className="bg-[url('./Assets/Images/offer_2.webp')]   bg-no-repeat md:bg-100% bg-center bg-cover  w-full  object-cover overflow-hidden">
              <div className="pt-[32px] pb-[70px] lg:flex items-start gap-2 ps-6 lg:ps-0">
                <span className="w-[95px] h-[1px] bg-[#000] mt-3"></span>
                <div>
                  <p className="text-xl font-normal font-ff-pop text-black leading-normal not-italic">
                    Festival Offer
                  </p>
                  <p className="pt-[20px] text-[35px] font-bold font-ff-pop not-italic leading-normal text-[#BD7D41] pb-[15px]">
                    Upto 40% Off
                  </p>
                  <p className="text-lg font-normal font-ff-pop not-italic leading-normal text-black max-w-[262px] pb-[38px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>

                  <button className="text-xl shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] py-[10px] px-[12px] bg-[#BD7D41] text-white font-medium font-ff-pop not-italic text-center leading-normal">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Festival_offer;
