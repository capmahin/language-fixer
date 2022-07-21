import React from "react";
import { Link, useNavigate } from "react-router-dom";
import banner2 from '../../../assets/banner/banner 2.png'

const Banner = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
  return (
    <div class="hero min-h-screen pb-10 ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner2} class="max-w-xs lg:max-w-xl rounded-lg" alt="" />
        <div className="px-4">
          <h1 class="text-5xl font-bold text-teal-500">
            New language, new opportunities, new you
          </h1>
          <p class="py-6 text-xl">
            Language acquisition is the process by which humans acquire the
            capacity to perceive and comprehend language, as well as to produce
            and use words and sentences to communicate. Language acquisition
            involves structures, rules and representation.
          </p>
          <button class="btn uppercase text-slate-200 font-bold bg-teal-500 hover:bg-teal-700 border-0 hover:text-slate-50">
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
