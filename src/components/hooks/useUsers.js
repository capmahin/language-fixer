import { useQuery } from "react-query";


const useUsers = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () =>
        fetch("https://young-plains-25750.herokuapp.com/users", {
            method: "GET",
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            // },
        }).then((res) => res.json())
    );

    return [users, isLoading, refetch]

}

export default useUsers;