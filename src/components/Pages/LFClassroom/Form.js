// import React, { useState } from "react";
// import Loading from "../Shared/Loading";

// const Form = () => {
//   const [assignBody, setAssignBody] = useState("");
//   //   const [assignEmail, setAssignEmail] = useState("");

//   const handleAssignSub = (e) => {
//     e.preventDefault();
//     const assignmentBody = { assignBody };

//     fetch("http://localhost:5000/assignSub", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(assignmentBody),
//     }).then(() => {
//       <Loading />;
//       console.log("new assignment added");
//     });

//     e.target.reset();
//   };
//   return (
//     <div>
//       <form className="bg-gray-300 p-6 m-12 rounded" onSubmit={handleAssignSub}>
//         <textarea
//           required
//           value={assignBody}
//           onChange={(e) => setAssignBody(e.target.value)}
//           placeholder="type here....."
//           className="p-3 rounded text-gray-400"
//           name="task"
//           id=""
//           cols="40"
//           rows="3"
//         ></textarea>
//         {/* <div className="form-control text-center">
//           <label className="input-group">
//             <span className="text-zinc-700">Email</span>
//             <input
//               type="email"
//               name="email"
//               value={assignEmail}
//               onChange={(e) => setAssignEmail(e.target.value)}
//               placeholder="yourmail@gmail.com"
//               className="input input-bordered"
//             />
//           </label>
//         </div> */}
//         <div className="card-actions mt-3">
//           <button className="mx-auto btn btn-warning">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
