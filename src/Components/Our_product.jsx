import React from "react";
import Samebtn from "./Samebtn";
import { mycard } from "../Common_product/Same_product";
import { Star } from "../Common_svg/icon";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Our_product = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [first, setfirst] = useState();
  function index(first) {
    setfirst(!first);
  }

  return (
    <div>
      <div className="max-w-[1340px]  px-3 mx-auto pt-5 md:py-[60px] overflow-hidden">
        <div className=" sm:flex justify-between items-center pt-[30px] sm:pt-0  xl:pt-[60px] xl:pb-[45px]">
          <div>
            <div className="flex flex-col md:flex-row items-center justify-center 910:justify-start  gap-2 ">
              <span className="w-[95px] h-[1px] bg-black"></span>
              <p className="text-xl font-ff-pop font-normal not-italic leading-normal text-[#BD7D41]">
                Shopping Store
              </p>
            </div>
            <p className="text-[30px] md:text-[35px] text-center sm:text-start md:pt-[19px] font-bold font-ff-pop leading-normal not-italic text-[#243040]">
              Our Products
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Samebtn text="VIEW ALL PRODUCT" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap   -mx-3 xl:pt-[45px]">
          {mycard.map((obj, index) => (
            <div className=" lg:w-1/3 sm:w-1/2 px-3">
              <div
                data-aos="zoom-out"
                data-aos-duration="2000"
                className=" px-[23px] py-[18px]  bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4"
              >
                <div className=" w-full">
                  <img className="w-full" src={obj.img} alt="" />
                </div>
                <div className="flex justify-between pt-[19px] items-center">
                  <p
                    className={`${
                      obj.name === "" ? "" : ""
                    }  font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl `}
                  >
                    {obj.name}
                  </p>
                  <div>
                    <Star />
                  </div>
                </div>

                <div className="md:py-[16px] text-base font-normal font-ff-mon leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-2 md:pb-[15px]  sm:pb-[32px] ">
                  {obj.para}
                </div>
                <div className="flex justify-between items-center md:pb-4">
                  <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                    {obj.number}
                  </p>
                  <div className=" py-[10px] px-[10px] text-base text-nowrap md:text-xl shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] lg:text-lg xl:text-xl font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center ">
                    {obj.button}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_product;
