import React from "react";

const startLearning = () => {
    return (
        <div className="text-white ">
            <h1 className="text-center text-2xl font-bold ">Question</h1>

            <div className=" flex justify-center gap-28 items-center mt-10">
                <div className="relative">
                    <p className="border rounded p-16 text-8xl">a</p>
                    <button className=" border rounded p-1 absolute top-2 left-[140..px]">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
                <div className="flex flex-col space-y-3">
                    <button className="btn px-20">option 1</button>
                    <button className="btn">option 2</button>
                    <button className="btn">Option 3</button>
                </div>
            </div>
            <div className="text-center mt-20 space-x-10">
                <button className="btn btn-error px-20">Give up</button>
                <button className="btn btn-success px-20">Next</button>
            </div>
        </div>
    );
};

export default startLearning;
