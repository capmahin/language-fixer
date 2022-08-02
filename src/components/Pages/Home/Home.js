import React from "react";
import Banner from "./Banner";

import Info from "./Info";
import AddReview from "./AddReview";
import Services from "./Services";
import WhyLF from "./WhyLF";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <WhyLF></WhyLF>
      <Reviews></Reviews>
      <AddReview></AddReview>
    </div>
  );
};

export default Home;
