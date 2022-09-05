import React from "react";
import livechat from "../../../assets/live chat.jpg";
import quiz from "../../../assets/quiz.jpeg";
import tutorial from "../../../assets/tutorial.jpg";
import Service from "./Service";
import borderPrimary from "../../../assets/border primary.png";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();
    const services = [
        {
            _id: 1,
            name: t("Live Chat"),
            description: ".....",
            route: "/join",
            image: livechat,
        },
        {
            _id: 2,
            name: t("Quiz"),
            description: ".....",
            route: "/quiz",
            image: quiz,
        },
        {
            _id: 3,
            name: t("Tutorial"),
            description: ".....",
            route: "/tutorial",
            image: tutorial,
        },
    ];
    return (
        <div className="my-28 text-slate-300">
            <div className="text-center ">
                <h2 className="text-accent text-5xl font-bold uppercase pb-10">
                    {t(`Our Services`)}
                </h2>
                <h2 className="text-2xl pb-8">{t(`Service we provide`)}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 ">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
            <img
                className="mt-28 absolute w-screen"
                src={borderPrimary}
                alt=""
            />
        </div>
    );
};

export default Services;
