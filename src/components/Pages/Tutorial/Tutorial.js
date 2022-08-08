import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();
  const navigateEnglish = () => {
    navigate("/englishtutorial");
  };
  const navigateFrench = () => {
    navigate("/franchtutorial");
  };
  const navigateChinese = () => {
    navigate("/chinesetutorial");
  };
  const navigateSpanish = () => {
    navigate("/spanishtutorial");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6 px-5 py-5">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Spanish Learning</h2>

          <div className="card-actions justify-end">
            <Link to="/spanishtutorial" onClick={navigateSpanish}>
              <button className="btn btn-ghost">Spanish</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chinese Learning</h2>

          <div className="card-actions justify-end">
            <Link to="/chinesetutorial" onClick={navigateChinese}>
              <button className="btn btn-ghost">Chinese</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">French Learning</h2>

          <div className="card-actions justify-end">
            <Link to="/franchtutorial" onClick={navigateFrench}>
              <button className="btn btn-ghost">French</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">English Learning</h2>

          <div className="card-actions justify-end">
            <Link to="/englishtutorial" onClick={navigateEnglish}>
              <button className="btn btn-ghost">English</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
