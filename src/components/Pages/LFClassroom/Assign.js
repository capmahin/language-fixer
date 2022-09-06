import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Assign = () => {
    const [assignBody, setAssignBody] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    //   const [assignEmail, setAssignEmail] = useState("");
    const inputAssignment = useRef(null);

    const handleAssignSub = (e) => {
        e.preventDefault();
        const assignment = inputAssignment.current.value;
        console.log(assignment);

        const assignmentBody = {
            assignmentBody: assignment,
        };

        fetch("https://young-plains-25750.herokuapp.com/assign", {
            method: "POST",

            headers: { "Content-type": "application/json" },
            body: JSON.stringify(assignmentBody),
        }).then(() => {
            console.log("new assignment added");
        });

        e.target.reset();
    };

    useEffect(() => {
        fetch("https://young-plains-25750.herokuapp.com/assign")
            .then((res) => res.json())
            .then((data) => setAssignBody(data));
    }, []);

    return (
        <div className="m-12">
            {!admin ? (
                <>
                    <div class="card bg-gray-700 shadow-xl text-center">
                        <div class="card-body">
                            <h2
                                class="card-title text-gray-300 mx-auto
               text-center"
                            >
                                Assignment Questions
                            </h2>
                            <form className="" onSubmit={handleAssignSub}>
                                <textarea
                                    required
                                    ref={inputAssignment}
                                    placeholder="type here assignment questions"
                                    className="p-2 my-2
                   rounded text-gray-200 bg-gray-500  "
                                    name="task"
                                    id=""
                                    cols="30"
                                    rows="3"
                                ></textarea>
                                <div className="text-center">
                                    <input
                                        className="btn btn-accent bg-gray-300"
                                        type="submit"
                                        value="submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <h2>dhur admin na apne</h2>
            )}
        </div>
    );
};

export default Assign;
