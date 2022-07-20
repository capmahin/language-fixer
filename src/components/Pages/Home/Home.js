import React from "react";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
