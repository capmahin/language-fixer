import React from "react";
import InfoCard from "./InfoCard";
import english from "../../../assets/Info/english.jpg";
import french from "../../../assets/Info/french.jpg";
import spanish from "../../../assets/Info/spanish.jpg";
import chinese from "../../../assets/Info/Chinese.jpg";
import borderAccent from "../../../assets/border accent.png";
import { useTranslation } from "react-i18next";

const Info = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pb-28 px-6 bg-accent text-slate-700 pt-44">
                <InfoCard
                    cardTitle={t(`Learn English`)}
                    img={english}
                ></InfoCard>
                <InfoCard
                    cardTitle={t(`Learn Spanish`)}
                    img={spanish}
                ></InfoCard>
                <InfoCard
                    cardTitle={t(`Learn  French`)}
                    img={french}
                ></InfoCard>
                <InfoCard
                    cardTitle={t(`Learn Chinese`)}
                    img={chinese}
                ></InfoCard>
            </div>
            <img className="w-screen" src={borderAccent} alt="" />
        </div>
    );
};

export default Info;
