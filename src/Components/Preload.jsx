import React, { useState, useEffect } from "react";
// import Loadd from "../Assets/images/plane.webp";

import AOS from "aos";
import "aos/dist/aos.css";

const Preload = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 3000,
    });
  }, []);
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoad(true);
      document.body.style.overflow = "";
    }, 2500);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div>
      <div
        className="preloader min-h-full z-50 min-w-full flex items-center justify-center  bg-black fixed top-0 start-0"
        style={{ display: Load ? "none" : "block", zIndex: 80 }}
      >
        <div class="waviy flex justify-center items-center m-auto h-screen">
          <span className="--i:1">F</span>
          <span className="--i:2">U</span>
          <span className="--i:3">R</span>
          <span className="--i:4">N</span>
          <span className="--i:5">I</span>
          <span className="--i:7">T</span>
          <span className="--i:8">U</span>
          <span className="--i:9">R</span>
          <span className="--i:10">E</span>
        </div>
      </div>
    </div>
  );
};

export default Preload;
