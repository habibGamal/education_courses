import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    corePlugins: {
        preflight: false, // <== disable this!
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    0: "#FEFCE8",
                    50: "#FEF9C3",
                    100: "#FEF08A",
                    200: "#FDE047",
                    300: "#FACC15",
                    400: "#EAB308",
                    500: "#CA8A04",
                    600: "#A16207",
                    700: "#854D0E",
                    800: "#713F12",
                    900: "#422006",
                },
                secondary: {
                    0: "#E8F9FC",
                    50: "#D0F0F6",
                    100: "#A4DDEE",
                    200: "#6DB1CD",
                    300: "#417B9B",
                    400: "#143D59",
                    500: "#0E2F4C",
                    600: "#0A2340",
                    700: "#061933",
                    800: "#03112A",
                    900: "#020A17",
                },
            },
        },
    },

    plugins: [],
};
