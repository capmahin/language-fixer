import React from "react";

const Test = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div className="text-white">
            <h1 className="mb-10">Count : {count}</h1>
            <button className="m-10 btn btn-accent">Increase</button>
            <button className="m-10 btn btn-accent">Decrease</button>
        </div>
    );
};

export default Test;
