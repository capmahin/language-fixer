import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import banner2 from "../../../assets/banner/banner 2.png";
import borderPrimary from "../../../assets/border primary.png";

const Banner = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-primary">
            <div className="hero min-h-screen pb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        data-aos="fade-left"
                        src={banner2}
                        className="max-w-xs lg:max-w-xl rounded-lg"
                        alt=""
                    />
                    <div data-aos="fade-right" className="px-4">
                        <h1 className="text-5xl font-bold text-accent">
                            {t(`New language, new opportunities, new you`)}
                        </h1>
                        <p className="py-6 text-xl text-slate-300">
                            {t(`Learn a new language with us`)}
                        </p>
                        <div className="flex flex-col space-y-4">
                            <Link to="/trial">
                                <button className="btn uppercase text-primary font-bold bg-accent hover:bg-amber-300 border-0 hover:text-slate-50">
                                    {t(`Try 1-on-1 free lesson`)}
                                </button>
                            </Link>
                            <Link to="/learn">
                                <button className="btn uppercase text-primary font-bold bg-accent hover:bg-amber-300 border-0 hover:text-slate-50">
                                    {t(`Start Learning`)}
                                </button>
                            </Link>{" "}
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute w-screen" src={borderPrimary} alt="" />
        </div>
    );
};

export default Banner;
