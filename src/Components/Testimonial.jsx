import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Controller, EffectFade, Thumbs } from "swiper/modules";
import image1 from "../Assets/Images/test1.png";
import image2 from "../Assets/Images/test-2.png";
import image3 from "../Assets/Images/test3.png";
import image4 from "../Assets/Images/test4.png";
import image5 from "../Assets/Images/test5.png";
import image6 from "../Assets/Images/test6.png";
import image7 from "../Assets/Images/test7.png";
const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const TestimonialData = [
    {
      img: image1,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image2,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image3,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image4,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image5,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image6,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image7,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image2,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
    {
      img: image4,
      name: "Treepi Shoty",
      Profession: "Teacher",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.",
    },
  ];
  return (
    <div className="mx-auto px-3 max-w-[1320px] md:pt-[30px]">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start  gap-2">
                <span className="w-[95px] h-[1px] bg-black"></span>
                <p className="text-xl font-ff-pop font-normal not-italic leading-normal text-[#BD7D41]">
                Customer Says                </p>
              </div>
      <h2 className="text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 leading-normal">
        Testimonial
      </h2>
      <div className="mt-[51px] mb-12 sm:mb-16 md:mb-20 lg:mb-[109px]">
        <div>
          <Swiper
            loop={true}
            spaceBetween={55}
            breakpoints={{
              400: { slidesPerView: 2 },
              450: { slidesPerView: 3 },
              700: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
            }}
            centeredSlides={true}
            slidesPerView={1}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Controller, Thumbs]}
            className="mySwiper2 "
          >
            {TestimonialData.map((items, index) => (
              <SwiperSlide key={index}>
                <img className="sm:w-full w-1/2" src={items.img} alt="img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-5">
          <Swiper
            onSwiper={setThumbsSwiper}
            centeredSlides={false}
            loop={true}
            slidesPerView={1}
            watchSlidesProgress={true}
            effect={"fade"}
            modules={[EffectFade, Thumbs]}
            autoplay={true}
            className="mySwiper flex justify-center items-center duration-300"
          >
            {TestimonialData.map((items, index) => (
              <SwiperSlide key={index}>
                <h2 className="text-black text-lg font-Poppins font-semibold pt-2 leading-normal text-center">
                  {items.name}
                </h2>
                <p className="text-[#4D4D4D] text-xs font-Poppins pt-1 font-light leading-normal text-center">
                  {items.Profession}
                </p>
                <p className="text-black font-Poppins font-light leading-normal text-sm mt-3 max-w-[350px] mx-auto text-center">
                  {items.bio}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
