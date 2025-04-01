// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", // If you’ve got an index.html (you probably do)
        "./src/**/*.{js,ts,jsx,tsx}", // All your source files
    ],
    theme: {
        extend: {}, // Add custom stuff here later if you’re feeling spicy
    },
    plugins: [], // Empty for now—v4.0’s got everything built-in
};