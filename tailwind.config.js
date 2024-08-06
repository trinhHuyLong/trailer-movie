/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            backgroundImage: {
                banner: 'url(../public/banner.png)',
            },
        },
    },
    plugins: [],
};
