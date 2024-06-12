
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'radley': ['Radley', 'serif'],
                'radioCanada' : ['Radio Canada', 'sans-serif'],
                'palanquin': ['Palanquin', 'sans-serif'],
            },
            cursor: {
                'penguin': 'url(https://cdn.custom-cursor.com/db/10548/32/origami-penguin-cursor.png), pointer',
                'penguinHover': 'url(https://cdn.custom-cursor.com/db/10547/32/origami-penguin-pointer.png), pointer',
            }
        },
    },
    plugins: [],
}