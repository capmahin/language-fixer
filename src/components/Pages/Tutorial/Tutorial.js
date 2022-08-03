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
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Spanish Learning</h2>

                    <div class="card-actions justify-end">
                        <Link to="/spanishtutorial" onClick={navigateSpanish}>
                            <button class="btn btn-ghost">Spanish</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Chinese Learning</h2>

                    <div class="card-actions justify-end">
                        <Link to="/chinesetutorial" onClick={navigateChinese}>
                            <button class="btn btn-ghost">Chinese</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">French Learning</h2>

                    <div class="card-actions justify-end">
                        <Link to="/franchtutorial" onClick={navigateFrench}>
                            <button class="btn btn-ghost">French</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">English Learning</h2>

                    <div class="card-actions justify-end">
                        <Link to="/englishtutorial" onClick={navigateEnglish}>
                            <button class="btn btn-ghost">English</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/quiz">
                <button className="btn brn-primary">Take Exam</button>
            </Link>
        </div>
    );
};

export default Tutorial;
