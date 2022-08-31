import React from "react";
import brain from "../../../assets/brain.svg";

import borderWhite from "../../../assets/borderWhite.png";
import underline from "../../../assets/underline.png";

const WhyLF = () => {
    return (
        <div className="bg-gray-50 text-slate-800 py-20">
            <div className="mt-12 mb-10">
                <h2 className="text-center font-black text-4xl px-4 ">
                    Why Language Fixer?
                </h2>
                <img className="mx-auto mt-1" src={underline} alt="" />
            </div>

            <div className="grid grid-cols-3 mx-10">
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            {" "}
                            <i className="fa-solid fa-fire-flame-curved"></i>
                            &nbsp; Effective and efficient
                        </h1>
                        <p className="ml-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nam, quis officia. Veniam blanditiis quisquam
                            velit dignissimos quibusdam temporibus facilis
                            ratione expedita, libero, ducimus optio error eius
                            aperiam vitae fuga voluptatibus asperiores
                            repudiandae eveniet. Explicabo sapiente omnis enim
                            dolor ex sequi impedit laudantium blanditiis atque
                            nesciunt? Totam quibusdam id laboriosam ab.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            {" "}
                            <i className="fa-solid fa-circle-check"></i>
                            &nbsp;Personalized Learning
                        </h1>
                        <p className="ml-7">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Atque repellendus maxime aspernatur, ea
                            impedit, mollitia consequatur excepturi id autem et
                            commodi quo animi accusantium maiores consequuntur
                            quia totam! Atque consequatur perspiciatis officiis
                            architecto aspernatur blanditiis a laudantium ullam
                            ipsa! Alias?
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src={brain} alt="brain" />
                </div>
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            <i className="fa-solid fa-crown"></i> &nbsp;Stay
                            Motivated
                        </h1>
                        <p className="ml-9">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo fugit aliquid accusamus iure saepe,
                            doloremque nulla ducimus maxime dolore, odio
                            corrupti molestias numquam rem perferendis ipsa
                            ipsum consequuntur id expedita earum culpa, tempora
                            dolorum! Possimus alias a quod velit error.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">
                            <i className="fa-solid fa-child-reaching"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;Have fun with it!
                        </h1>
                        <p className="ml-9">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Laborum ad possimus saepe, neque corporis
                            nulla quas nobis blanditiis veritatis rerum,
                            laboriosam similique, omnis obcaecati. Officiis
                            aspernatur velit, minima explicabo ullam ducimus.
                            Enim quaerat eos autem dolorum ratione omnis,
                            consequatur quod?
                        </p>
                    </div>
                </div>
            </div>
            <img className="mt-16 absolute w-screen" src={borderWhite} alt="" />
        </div>
    );
};

export default WhyLF;
