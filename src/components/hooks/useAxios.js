import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "http://localhost:5000/learning";
        const fetchData = () => {
            axios
                .get(url)
                .then((res) => {
                    setResponse(res.data);
                    setLoading(false);
                    console.log("nigga", res);
                })
                .catch((err) => {
                    setErr(err);
                    setLoading(false);
                });
        };
        fetchData();
        console.log(response);
    }, [url]);

    return { response, err, loading };
};

export default useAxios;
