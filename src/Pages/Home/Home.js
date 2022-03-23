import React from "react";
import Banner from "./Banner";
import Description from "./Description";
import OurWork from "./OurWork";
import RegisterBanner from "./RegisterBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RegisterBanner></RegisterBanner>
      <Description></Description>
      <OurWork></OurWork>
    </div>
  );
};

export default Home;
