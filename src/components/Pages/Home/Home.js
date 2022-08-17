import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import AddReview from "./AddReview";
import Services from "./Services";
import WhyLF from "./WhyLF";
import Reviews from "./Reviews";
import Effective from "./Effective";
import Newsletter from "./Newsletter";
import Blogs from "./Blogs";
import LFSchool from "./LFSchool";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <WhyLF></WhyLF>
      <Effective />
      <LFSchool></LFSchool>
      <Reviews></Reviews>
      <AddReview></AddReview>
      <Blogs></Blogs>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
