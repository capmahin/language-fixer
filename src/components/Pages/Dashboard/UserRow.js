import React from "react";

const UserRow = ({ user, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(
            `https://young-plains-25750.herokuapp.com/user/addAdmin/${email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <tr className="text-black">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== "admin" && (
                    <button
                        onClick={makeAdmin}
                        className="btn btn-outline btn-sm btn-success"
                    >
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                {role === "admin" && (
                    <button className="btn btn-outline btn-sm btn-error">
                        Remove Admin
                    </button>
                )}
            </td>
        </tr>
    );
};

export default UserRow;
