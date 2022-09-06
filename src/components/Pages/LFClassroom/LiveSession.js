import React from "react";

const LiveSession = () => {
    return (
        <div className="flex flex-col justify-center items-center m-52">
            <h1 className="text-white">Please join the live session</h1>
            <button className="btn bg-accent my-5 border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 modal-button ">
                <a
                    target="blank"
                    href="https://still-shore-96079.herokuapp.com/"
                >
                    Join Now
                </a>
            </button>
        </div>
    );
};

export default LiveSession;
