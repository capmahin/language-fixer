import React from "react";

const ErrorMessage = ({ children }) => {
    return <div className="text-red-500">{children}</div>;
};

export default ErrorMessage;
