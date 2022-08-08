/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "background-blue": "#00ADFF",
                "background-gray": "#576C82",
            },
        },
    },
    plugins: [],
};
