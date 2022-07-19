import React from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../../assets/banner/banner.jpg";

const Banner = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold text-purple-800">
            Language Learner !!
          </h1>
          <p class="py-6 text-xl">
            Language acquisition is the process by which humans acquire the
            capacity to perceive and comprehend language, as well as to produce
            and use words and sentences to communicate. Language acquisition
            involves structures, rules and representation.
          </p>
          <button class="btn btn-primary uppercase text-white font-bold">
            <Link to="about" onClick={navigateAbout}>
              About
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
