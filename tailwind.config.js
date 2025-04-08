export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                moveDots: {
                    "0%": { backgroundPosition: "0 0" },
                    "100%": { backgroundPosition: "100px 100px" },
                },
            },
            animation: {
                moveDots: "moveDots 40s linear infinite",
            },
        },
    },
    plugins: [],
};
