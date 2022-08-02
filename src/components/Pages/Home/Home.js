import React from "react";
import Banner from "./Banner";

import Info from "./Info";
import Review from "./Review";
import Services from "./Services";
import WhyLF from "./WhyLF";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <WhyLF></WhyLF>
      <Review></Review>
    </div>
  );
};

export default Home;
