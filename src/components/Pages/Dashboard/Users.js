// import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";
import { ToastContainer } from "react-toastify";

const Users = () => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch("http://localhost:5000/user", {
    //         method: "GET",
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setUsers(data);
    //             setLoading(false);
    //         });
    // }, []);
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="px-10 text-black">
            <h2 className="text-white text-2xl text-center font-bold py-2">
                All users: {users.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>MAke Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UserRow>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Users;
