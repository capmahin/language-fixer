import React, { useRef } from "react";
import "./Certificate.css";
import { exportComponentAsPNG } from "react-component-export-image";

const Certificate = ({ name }) => {
    const certificateRef = useRef();

    const ComponentToPrint = React.forwardRef((props, ref) => {
        console.log(ref.current);
        return (
            <div ref={ref}>
                <p className="name absolute text-black lg:top-[365px] lg:left-[950px] text-4xl ">
                    {name}
                </p>
                <img
                    className="w-[600px] block"
                    src="https://i.ibb.co/RQw9r7z/Blue-and-Yellow-Minimalist-Employee-of-the-Month-Certificate-2.png"
                    alt="certificate"
                />
            </div>
        );
    });
    return (
        <div>
            <h1 className="text-center text-accent text-2xl lg:text-4xl m-5">
                Certificate by Language Fixer
            </h1>
            <div className=" space-y-5 m-10 flex flex-col lg:flex-row justify-evenly items-center">
                <div className="space-y-5 text-white">
                    <p className="text-xl lg:text-2xl">
                        Congratulations,{" "}
                        <span className="text-accent font-bold">{name}</span>
                    </p>
                    <p>Please Download your certificate from here,</p>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            exportComponentAsPNG(certificateRef, {}).then(
                                (dataURL) => {
                                    const link = document.createElement("a");
                                    link.href = dataURL;
                                    link.download = "certificate.png";
                                    link.click();
                                }
                            );
                            console.log(certificateRef.current);
                        }}
                        className="btn btn-accent"
                    >
                        Download
                    </button>
                </div>
                <ComponentToPrint ref={certificateRef} />
            </div>
        </div>
    );
};

export default Certificate;
