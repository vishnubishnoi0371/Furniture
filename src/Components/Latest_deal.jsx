import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal2 from "../Assets/Images/deal_2.webp";
import deal1 from "../Assets/Images/dell1.webp";
import deal3 from "../Assets/Images/deal_3.webp";
import { Arrow_1, Arrow_2, Star } from "../Common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[50px] overflow-visible mb-2 h-[50px] 2xl:w-[99px] 2xl:h-[99px] rounded-full duration-500 hover:bg-[#BD7D41] flex items-center justify-center sliderbutton bg-[#fff] shadow-crd_sh_1 absolute bottom-[-10%] sm:bottom-[-10%]  lg:bottom-[-10%] left-[10%] sm:left-[30%]  lg:left-7  2xl:bottom-[38%] 2xl:left-[-10%]"
  >
    <Arrow_1 />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[50px] overflow-visible mb-2 h-[50px] 2xl:w-[99px] 2xl:h-[99px] rounded-full bg-[#fff] flex items-center justify-center duration-500 hover:bg-[#BD7D41] sliderbutton shadow-crd_sh_1 absolute bottom-[-10%] sm:bottom-[-10%]  lg:bottom-[-10%]  right-[10%] sm:right-[30%]  lg:right-6  2xl:bottom-[38%] 2xl:right-[-10%]"
  >
    <Arrow_2 />
  </button>
);

const Latest_deal = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 652,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="xl:pt-[60px]">
      <div className="max-w-[1340px]  px-3 mx-auto py-[50px]  ">
        <div className="flex flex-col md:flex-row items-center justify-center 910:justify-start  gap-2 ">
          <span className="w-[95px] h-[1px] bg-black"></span>
          <p className="text-xl font-ff-pop font-normal not-italic leading-normal text-[#BD7D41]">
            Shopping Store
          </p>
        </div>
        <p className="910:max-w-[426px] text-center 910:text-start font-bold font-ff-pop leading-normal text-[30px] md:text-[35px] text-[#243040] not-italic md:pt-[19px] md:pb-[33px]">
          Latest Deal{" "}
        </p>
        <Slider {...settings}>
          <div>
            <div
              data-aos="zoom-out"
              data-aos-duration="2000"
              className=" px-[23px] py-[18px] overflow-hidden bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4 mx-1 mb-10"
            >
              <div className=" w-full">
                <img className="w-full overflow-hidden" src={deal1} alt="" />
              </div>
              <div className="flex justify-between pt-[19px] items-center">
                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                  Best Guide
                </p>
                <div>
                  <Star />
                </div>
              </div>

              <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                Lorem ipsum dolor{" "}
              </div>
              <div className="flex justify-between items-center md:pb-4">
                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                  ₹1200.00{" "}
                </p>
                <button className=" py-[10px] px-[10px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] text-base text-nowrap md:text-xl lg:text-lg xl:text-xl font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center ">
                  ADD TO CART{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="zoom-out"
              data-aos-duration="2000"
              className=" px-[23px] py-[18px]  bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4 mx-1 mb-10"
            >
              <div className=" w-full">
                <img className="w-full" src={deal2} alt="" />
              </div>
              <div className="flex justify-between pt-[19px] items-center">
                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                  Best Guide
                </p>
                <div>
                  <Star />
                </div>
              </div>

              <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                Lorem ipsum dolor{" "}
              </div>
              <div className="flex justify-between items-center md:pb-4">
                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                  ₹1200.00{" "}
                </p>
                <button className=" py-[10px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] px-[10px] text-base text-nowrap md:text-xl lg:text-lg xl:text-xl font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center ">
                  ADD TO CART{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="zoom-out"
              data-aos-duration="2000"
              className=" px-[23px] py-[18px]  bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4 mx-1 mb-10"
            >
              <div className=" w-full">
                <img className="w-full" src={deal3} alt="" />
              </div>
              <div className="flex justify-between pt-[19px] items-center">
                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                  Best Guide
                </p>
                <div>
                  <Star />
                </div>
              </div>

              <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                Lorem ipsum dolor{" "}
              </div>
              <div className="flex justify-between items-center md:pb-4">
                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                  ₹1200.00{" "}
                </p>
                <button className=" py-[10px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] px-[10px] text-base text-nowrap md:text-xl lg:text-lg xl:text-xl font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center ">
                  ADD TO CART{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="zoom-out"
              data-aos-duration="2000"
              className=" px-[23px] py-[18px]  bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4 mx-1 mb-10"
            >
              <div className=" w-full">
                <img className="w-full" src={deal1} alt="" />
              </div>
              <div className="flex justify-between pt-[19px] items-center">
                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                  Best Guide
                </p>
                <div>
                  <Star />
                </div>
              </div>

              <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                Lorem ipsum dolor{" "}
              </div>
              <div className="flex justify-between items-center md:pb-4">
                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                  ₹1200.00{" "}
                </p>
                <button className=" py-[10px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] px-[10px] text-base text-nowrap md:text-xl lg:text-lg xl:text-xl font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center ">
                  ADD TO CART{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="zoom-out"
              data-aos-duration="2000"
              className=" px-[23px] py-[18px]  bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4 mx-1 mb-10"
            >
              <div className=" w-full">
                <img className="w-full" src={deal2} alt="" />
              </div>
              <div className="flex justify-between pt-[19px] items-center">
                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                  Best Guide
                </p>
                <div>
                  <Star />
                </div>
              </div>

              <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                Lorem ipsum dolor{" "}
              </div>
              <div className="flex justify-between items-center md:pb-4">
                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                  ₹1200.00{" "}
                </p>
                <button className=" py-[10px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] px-[10px] text-base text-nowrap md:text-xl lg:text-lg xl:text-xl font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center ">
                  ADD TO CART{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="zoom-out"
              data-aos-duration="2000"
              className=" px-[23px] py-[18px]  bg-[#fff] hover:shadow-crd_sh_1 duration-500 mt-4 mx-1 mb-10"
            >
              <div className=" w-full ">
                <img className="w-full" src={deal3} alt="" />
              </div>
              <div className="flex justify-between pt-[19px] items-center">
                <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                  Best Guide
                </p>
                <div>
                  <Star />
                </div>
              </div>

              <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                Lorem ipsum dolor{" "}
              </div>
              <div className="flex justify-between items-center md:pb-4">
                <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                  ₹1200.00{" "}
                </p>
                <button className=" py-[10px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41] px-[10px] text-base text-nowrap md:text-xl lg:text-lg xl:text-xl font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center ">
                  ADD TO CART{" "}
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Latest_deal;
