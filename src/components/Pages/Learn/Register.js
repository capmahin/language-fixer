import React from "react";

const Register = ({ details, refetch }) => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl">
                I want to learn....
                <audio src={details.sound}></audio>
                {details.map((detail) => (
                    <p key={detail}>
                        {detail.question} {detail.language}
                    </p>
                ))}
            </h1>
        </div>
    );
};

export default Register;
