module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                biketheme: {
                    primary: "#2b3647",
                    secondary: "#f6d860",
                    accent: "#ffc000",
                    neutral: "#a991f7",
                    "base-100": "#ffffff",
                },
            },

            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
