import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Test1 from "../Assets/Images/test1.webp";
import Test2 from "../Assets/Images/test-2.webp";
import Test3 from "../Assets/Images/test3.webp";
import Test4 from "../Assets/Images/test4.webp";
import Test5 from "../Assets/Images/test5.webp";
import Test6 from "../Assets/Images/test6.webp";
import Test7 from "../Assets/Images/test7.webp";
const Test = () => {
  var settings = {
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // centerPadding: "35px",
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div className="overflow-x-clip">
      <div className="max-w-[1341px] px-3 mx-auto xl:pt-[109px] pb-10">
        <div className="flex flex-col md:flex-row items-center justify-center 910:justify-start  gap-2 ">
          <span className="w-[95px] h-[1px] bg-black"></span>
          <p className="text-xl font-ff-pop font-normal not-italic leading-normal text-[#BD7D41]">
            Customer says
          </p>
        </div>
        <h2 className="text-[#243040] max-w-[436px]  font-poppines text-2xl text-center md:text-start  sm:text-[35px] leading-normal font-bold pt-3 sm:pt-6">
          Testimonial
        </h2>
        <div className="pt-5 md:pt-[50px]">
          <Slider
            {...settings}
            centerMode={true}
            asNavFor={nav2}
            slidesToShow={7}
            touchMove={true}
            arrows={false}
            ref={(slider1) => setNav1(slider1)}
          >
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test1}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[264px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test2}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[164px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test3}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[148px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test4}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[260px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test5}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[258px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test6}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[193px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test7}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[181px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={Test5}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[258px] "
              />
            </div>
          </Slider>
          <Slider
            {...settings}
            centerMode={true}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            swipeToSlide={true}
            fade={true}
            arrows={false}
            dots={false}
          >
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Teacher
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Professor
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Teacher
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Professor
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppines">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppines text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppines text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Test;
