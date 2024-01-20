import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "../Common_svg/icon";
import trend1 from "../Assets/Images/trend1.webp";
import trend2 from "../Assets/Images/trend2.webp";
import trend3 from "../Assets/Images/trend3.webp";
import trend4 from "../Assets/Images/cuttimg.webp";
import { Arrow_11, Arrow_22 } from "../Common_svg/icon";

const CustomPrev1Arrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[44px] h-[44px] rounded-[10px] duration-500 hover:bg-[#BD7D41] flex items-center justify-center  bg-[#fff]  absolute  left-[38%] 910:left-[0%] bottom-[-10%] 910:bottom-0 xl:bottom-[5%] lg1500:bottom-[15%]"
  >
    <Arrow_11 />
  </button>
);

const CustomNxtArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[44px] h-[44px] rounded-[10px] bg-[#fff] flex items-center justify-center duration-500 hover:bg-[#BD7D41]  absolute left-[55%] xs450px:left-[49%] 910:left-[7%] xl:left-[4%] bottom-[-10%] 910:bottom-0 xl:bottom-[5%] lg1500:bottom-[15%]"
  >
    <Arrow_22 />
  </button>
);
const Trending = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    prevArrow: <CustomPrev1Arrow />,
    nextArrow: <CustomNxtArrow />,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className=" overflow-hidden">
      <div className="bg-[#f7f7f8] md:mt-[60px] relative  md:pt-[40px] pb-[98px]">
        <div className=" max-w-[500px] lg:max-w-[641px] xl:max-w-[741px] max-h-[317px] lg:max-h-[417px] w-full h-full absolute bg-gradient-to-r from-[#243040] to-[#8C939B] right-0 z-[0] top-[-16%] lg:top-[-24%] hidden 910:block"></div>
        <div className="max-w-[1590px]  px-3 910:ps-3 mx-auto 910:mx-0 910:ms-auto ">
          <div className="flex flex-row justify-center flex-wrap   -mx-3  relative">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className=" 910:w-1/3 px-3 relative z-0 910:pt-[40px] lg:pt-0"
            >
              <div className="flex flex-col md:flex-row  items-center justify-center 910:justify-start gap-[11px] pt-5 lg:pt-0">
                <span className="w-[95px] h-[1px] bg-black "></span>
                <p className="text-xl font-ff-pop font-normal text-[#BD7D41] not-italic leading-normal">
                  Welcome Our Story
                </p>
              </div>
              <p className="910:max-w-[426px] text-center 910:text-start font-bold font-ff-pop  leading-[normal] text-[30px] min-[1100px]:text-[35px] text-[#243040] lg:pt-[24px] ">
                Buy trending furniture Products.
              </p>
              <p className="text-lg font-normal 910:text-start  max-w-[422px] text-black leading-normal font-ff-pop md:pt-[19px] text-center mx-auto 910:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, urna at pulvinar porta
              </p>
            </div>
            <div className=" 910:w-8/12 px-3 overflow-hidden mx-auto mt-[30px] 910:mt-0 sliderbutton ">
              <Slider {...settings}>
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="relative z-[2] min-[400px]:pl-[21px]"
                >
                  <div className=" p-[15px_12px_27px_17px]  bg-[#fff]  mt-4">
                    <div className=" w-full">
                      <img className="w-full" src={trend1} alt="" />
                    </div>
                    <div className="flex justify-between pt-[13px] items-center">
                      <p className=" font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                        Single Sofa
                      </p>
                      <div>
                        <div className=" flex items-center gap-[3px]">
                          <Star />
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center gap-[6px]">
                      <p className=" font-ff-pop text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                        ₹1200.00{" "}
                      </p>
                      <p className=" text-[#C4C4C4] font-ff-pop text-[11.636px] font-normal leading-[normal] mt-[10px]">
                        ₹ 1200.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative z-[2] min-[400px]:pl-[21px]">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className=" p-[15px_12px_27px_17px]  bg-[#fff]  mt-4"
                  >
                    <div className=" w-full">
                      <img className="w-full" src={trend2} alt="" />
                    </div>
                    <div className="flex justify-between pt-[13px] items-center">
                      <p className=" font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                        Single Sofa
                      </p>
                      <div>
                        <Star />
                      </div>
                    </div>
                    <div className=" flex items-center gap-[6px]">
                      <p className=" font-ff-pop text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                        ₹1200.00{" "}
                      </p>
                      <p className=" text-[#C4C4C4] font-ff-pop text-[11.636px] font-normal leading-[normal] mt-[10px]">
                        ₹ 1200.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative z-[2] min-[400px]:pl-[21px]">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className=" p-[15px_12px_27px_17px]  bg-[#fff] shadow-crd_sh_1 duration-500 mt-4"
                  >
                    <div className=" w-full">
                      <img className="w-full" src={trend3} alt="" />
                    </div>
                    <div className="flex justify-between pt-[13px] items-center">
                      <p className=" font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                        Single Sofa
                      </p>
                      <star />
                    </div>
                    <div className=" flex items-center gap-[6px]">
                      <p className=" font-ff-pop text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                        ₹1200.00{" "}
                      </p>
                      <p className=" text-[#C4C4C4] font-ff-pop text-[11.636px] font-normal leading-[normal] mt-[10px]">
                        ₹ 1200.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative z-[2] min-[400px]:pl-[21px]">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className=" p-[15px_12px_27px_17px]  bg-[#fff]  mt-4"
                  >
                    <div className=" w-full">
                      <img className="w-full" src={trend4} alt="" />
                    </div>
                    <div className="flex justify-between pt-[13px] items-center">
                      <p className=" font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-[20px] ">
                        Single Sofa
                      </p>
                      <div>
                        <div className=" flex items-center gap-[3px]">
                          <Star />
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center gap-[6px]">
                      <p className=" font-ff-pop text-nowrap font-semibold text-[#000] text-[24px] leading-[normal] xl:text-[28.6px] not-italic pt-[8px]">
                        ₹1200.00{" "}
                      </p>
                      <p className=" text-[#C4C4C4] font-ff-pop text-[11.636px] font-normal leading-[normal] mt-[10px]">
                        ₹ 1200.00
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
