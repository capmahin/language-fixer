export const saveLanguage = (lang) => {
    localStorage.setItem("language", lang);
};

export const getLanguage = () => {
    return localStorage.getItem("language") || "en";
};
