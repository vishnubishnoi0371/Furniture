import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Prodct_1 from "../Assets/Images/sofa_1.webp";
import Prodct_2 from "../Assets/Images/sofa_2.webp";
import Prodct_3 from "../Assets/Images/sofa_3.webp";
import Prodct_4 from "../Assets/Images/sofa_4.webp";
import Prodct_5 from "../Assets/Images/sofa_5.webp";
import Prodct_6 from "../Assets/Images/sofa_5.webp";
import { Cross, Star } from "../Common_svg/icon";
import Samebtn from "./Samebtn";
import Same_btn_2 from "./Same_btn_2";
const mycardinfo = [
  {
    img: Prodct_1,
  },
  {
    img: Prodct_2,
  },
  {
    img: Prodct_3,
  },
  {
    img: Prodct_4,
  },
  {
    img: Prodct_5,
  },
  {
    img: Prodct_6,
  },
];
const Prodct = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  const [sidebar, setSidebar] = useState(false);
  const [Addcart, setAddCart] = useState([]);
  function addcart(mycard) {
    setSidebar(true);
    setAddCart([...Addcart, mycard]);
  }
  function close() {
    setSidebar(false);
  }
  const sideCard = Addcart.map((mycard, index) => (
    <div
      key={index}
      className="px-[23px] py-[18px] m-3 lg:m-8 bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4"
      data-aos="zoom-in"
    >
      <img className="w-full" src={mycard.img} alt="img" />
      <div className=" flex items-center justify-between mt-[19px]">
        <p className=" font-medium font-ff-pop text-[20px] text-[#000]">
          Single Sofa
        </p>
        <div className=" flex items-center gap-[3px]">
          <Star />
        </div>
      </div>
      <p className=" text-[#000000b3] text-[18px] font-normal font-ff-pop leading-[normal] mt-[16px]">
        Lorem ipsum dolor{" "}
      </p>
      <div className=" flex items-center justify-between pt-[16px]">
        <p className=" font-ff-pop text-[21px] lg:text-[28.667px] font-semibold text-[#000]">
          ₹ 1200.00
        </p>
        <Same_btn_2 text="ADD TO CART" />
      </div>
    </div>
  ));
  const mycard = mycardinfo.map((mycard) => (
    <div className=" lg:w-1/3 sm:w-1/2 px-3   xl:pt-[42px]">
      <div
        className=" px-[23px] py-[18px]  bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4"
        data-aos="zoom-in"
      >
        <img className="w-full" src={mycard.img} alt="" />
        <div className=" flex items-center justify-between mt-[19px]">
          <p className=" font-medium font-ff-pop text-[20px] text-[#000]">
            Single Sofa
          </p>
          <div className=" flex items-center gap-[3px]">
            <Star />
          </div>
        </div>
        <p className=" text-[#000000b3] text-[18px] font-normal font-ff-pop leading-[normal] mt-[16px]">
          Lorem ipsum dolor
        </p>
        <div className=" flex items-center justify-between pt-[16px]">
          <p className=" font-ff-pop text-[23.667px] xl:text-[28.667px] font-semibold text-[#000]">
            ₹ 1200.00
          </p>

          <Same_btn_2 funxn={() => addcart(mycard)} text="ADD TO CART" />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div
        className={`${
          sidebar ? "left-0" : "left-[-100%]"
        } overflow-y-scroll bg-gradient-to-r from-[#243040] to-[#8C939B] w-[100%] sm:w-[50%] md:w-[40%] xl:w-[30%]   duration-500 ease-in-out h-full fixed top-0 pt-[40px] z-30`}
      >
        <button
          onClick={close}
          className="absolute fill-[#BD7D41] w-[26px] h-[26px] lg:w-[36px] lg:h-[36px] top-1 right-[26%] lg:right-1"
        >
          <Cross />
        </button>
        {sideCard}
      </div>
      <div className=" max-w-[1340px]  px-3 mx-auto xxs:pt-5 md:py-[60px] overflow-hidden">
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
        <div className="flex flex-wrap flex-row -mx-3 md:pt-[48px]">
          {mycard}
        </div>
      </div>
    </>
  );
};

export default Prodct;
