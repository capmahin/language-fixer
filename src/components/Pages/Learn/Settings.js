import React from "react";

const Settings = () => {
    const handleClick = () => {
        console.log("Clicked");
    };

    return (
        <div className="text-center">
            <h1 className="text-white font-bold text-2xl my-10">
                Which language do you want to learn?
            </h1>
            <button onClick={handleClick} className="btn btn-accent">
                Korean
            </button>
        </div>
    );
};

export default Settings;
