import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useUsers from "../../hooks/useUsers";

const AddStudents = () => {
  const [users] = useUsers([]);
  const [user] = useAuthState(auth);

  const addStudents = (sEmail) => {
    // console.log(sEmail);

    const students = { sEmail };

    const url = `https://young-plains-25750.herokuapp.com/user/addStudent/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(students),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Student Added to classroom successfully");
        console.log(data);
      });
  };
  return (
    <div>
      {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" /> */}
      <h3 className="font-bold text-lg py-3 text-center">
        Let's add students to your class.
      </h3>

      <div className="overflow-x-auto px-6 my-10">
        <table className="table hover w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users
              ?.filter((user) => !user.className && !user.language)
              ?.map((u, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{u.email}</td>
                  <td>
                    {
                      <button
                        onClick={() => addStudents(u.email)}
                        className="btn bg-success my-5 border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 modal-button"
                      >
                        Add as Student
                      </button>
                    }
                  </td>
                  <td>
                    <button className="btn bg-error my-5 border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 modal-button">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddStudents;
