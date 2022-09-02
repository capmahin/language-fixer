import { useEffect, useState } from "react";

const useUpdateUser = (user) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://young-plains-25750.herokuapp.com/userUpdateDB/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data);
        });
    }
  }, [user]);

  return [currentUser];
};

export default useUpdateUser;
