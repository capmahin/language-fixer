import React from "react";
import { useQuery } from "react-query";
import Register from "./Register";

const Learn = () => {
    const {
        data: details,
        isLoading,
        refetch,
    } = useQuery("details", () =>
        fetch("details.json").then((res) => res.json())
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="text-white">
            <Register details={details} refetch={refetch} />
        </div>
    );
};

export default Learn;
