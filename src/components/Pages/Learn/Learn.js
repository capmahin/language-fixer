import React, { useEffect, useState } from "react";
import StartLearning from "./StartLearning";

const Learn = () => {
    const [languages, setLanguages] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect((language = "") => {
        setLoading(true);

        fetch(`details.json`)
            .then((response) => response.json())
            .then((data) => {
                let allLang = [];
                data.map((x) => (allLang = [...allLang, x.language]));

                const filteredQuestions = data.filter((question) => {
                    return question.language === language;
                });
                console.log(filteredQuestions);

                setLanguages([...new Set(allLang)]);
                setQuestions(data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    // const fetchDetails = async (language = "") => {
    //     console.log(language);
    //     const { data } = await axios.get(`details.json`);
    //     let allLang = [];
    //     data.map((x) => (allLang = [...allLang, x.language]));

    //     const filteredQuestions = data.filter((question) => {
    //         return question.language === language;
    //     });
    //     console.log(filteredQuestions);
    //     setLanguages([...new Set(allLang)]);
    //     setQuestions(data);
    // };

    const handleClick = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className="text-white">
            <h1 className="text-4xl text-center font-bold ">
                Which language do you want to learn...
            </h1>
            {languages.length > 0 &&
                languages.map((lang) => (
                    <button
                        key={lang}
                        onClick={handleClick}
                        className="btn btn-ghost border-black hover:border-white"
                    >
                        {lang}
                    </button>
                ))}
        </div>
    );
};

export default Learn;
