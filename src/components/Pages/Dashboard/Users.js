import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://young-plains-25750.herokuapp.com/", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);
    // const { data: users, isLoading } = useQuery("users", () =>
    //     fetch("https://young-plains-25750.herokuapp.com/", {
    //         method: "GET",
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //         },
    //     }).then((res) => res.json())
    // );
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (users) {
    //     console.log(users);
    // }

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
                                index={index}
                            ></UserRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
