import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://young-plains-25750.herokuapp.com/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast("You are not authorized to do this", {
                        type: "error",
                    });
                }
                return res.json();
            })

            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast("Successfully made an admin", { type: "success" });
                }
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
                <button className="btn btn-outline btn-sm btn-error">
                    Remove User
                </button>
            </td>
        </tr>
    );
};

export default UserRow;
