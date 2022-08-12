import React from "react";
import Banner from "./Banner";

import Info from "./Info";
import AddReview from "./AddReview";
import Services from "./Services";
import WhyLF from "./WhyLF";
import Reviews from "./Reviews";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <WhyLF></WhyLF>
      <Reviews></Reviews>
      <AddReview></AddReview>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
