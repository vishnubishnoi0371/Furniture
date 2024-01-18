import React from "react";
import Backtotop from "../Components/Backtotop";
import My_nav from "../Components/My_nav";
import Ourstory from "../Components/Ourstory";
import Trending from "../Components/Trending";
import Our_product from "../Components/Our_product";
import Wodden from "../Components/Wodden";
import Latest_deal from "../Components/Latest_deal";
import Festival_offer from "../Components/Festival_offer";
import My_footer from "../Components/My_footer";
import Preload from "../Components/Preload";
import Test from "../Components/Test";
const Home = () => {
  return (
    <div>
      <Backtotop />
      <Preload />
      <My_nav />
      <Ourstory />
      <Trending />
      <Our_product />
      <Wodden />
      <Latest_deal />
      <Festival_offer />
      <Test/>
      <My_footer />
    </div>
  );
};

export default Home;
