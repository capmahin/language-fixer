import React from "react";
import brain from "../../../assets/brain.svg";

import borderWhite from "../../../assets/borderWhite.png";
import underline from "../../../assets/underline.png";
import { useTranslation } from "react-i18next";

const WhyLF = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-gray-50 text-slate-800 py-20">
            <div className="mt-12 mb-10">
                <h2 className="text-center font-black text-4xl px-4 ">
                    {t(`Why Language Fixer?`)}
                </h2>
                <img className="mx-auto mt-1" src={underline} alt="" />
            </div>

            <div className="grid grid-cols-3 mx-10">
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            {" "}
                            <i className="fa-solid fa-fire-flame-curved"></i>
                            &nbsp; {t(`Effective and efficient`)}
                        </h1>
                        <p className="ml-7">{t(`We are fast and efficient`)}</p>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            {" "}
                            <i className="fa-solid fa-circle-check"></i>
                            &nbsp; {t(`Personalized Learning`)}
                        </h1>
                        <p className="ml-7">
                            {t(`We are personalized learning`)}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src={brain} alt="brain" />
                </div>
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            <i className="fa-solid fa-crown"></i> &nbsp;{" "}
                            {t(`Stay Motivated`)}
                        </h1>
                        <p className="ml-9">{t(`Motivated Learning`)}</p>
                    </div>

                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            <i className="fa-solid fa-child-reaching"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp; {t(`Have fun with it!`)}
                        </h1>
                        <p className="ml-9">
                            {t(`We provide a fun and motivating environment`)}
                        </p>
                    </div>
                </div>
            </div>
            <img className="mt-16 absolute w-screen" src={borderWhite} alt="" />
        </div>
    );
};

export default WhyLF;
