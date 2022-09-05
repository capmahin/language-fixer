import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Settings = ({ response }) => {
    const [languages, setLanguages] = useState([]);
    const [selectedLang, setSelectedLang] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (response.length > 0) {
            let lang = response.map((x) => x.language);
            // console.log("lang", lang);
            setLanguages([...new Set(lang)]);
        }
    }, [response]);

    return (
        <div className="text-center">
            <h1 className="text-white font-bold text-2xl my-10">
                Which language do you want to learn?
            </h1>
            {languages.map((x) => (
                <button
                    key={x}
                    onClick={() =>
                        navigate(`settings/start_learning/${x}`) &&
                        setSelectedLang(x)
                    }
                    className="btn btn-accent"
                >
                    {x}
                </button>
            ))}
            {selectedLang !== "" &&
                response
                    .filter((x) => x.language === selectedLang)
                    .map((x) => <p>{x.question}</p>)}
        </div>
    );
};

export default Settings;
