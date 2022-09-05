import React from "react";
import effective from "../../../assets/effective.svg";
import borderPrimary from "../../../assets/border primary.png";
import { useTranslation } from "react-i18next";

const Effective = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex flex-col justify-center items-center lg:flex-row my-20 space-x-10 ">
                <div className="w-64">
                    <img src={effective} alt="effective" />
                </div>
                <div className="space-y-5 w-96">
                    <h1 className="text-accent font-bold text-2xl">
                        {t(`Effective and efficient learning`)}
                    </h1>
                    <p className="text-white">{t(`Our courses`)}</p>
                </div>
            </div>
            <img className="absolute" src={borderPrimary} alt="" />
        </div>
    );
};

export default Effective;
