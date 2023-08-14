/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                tm_drakblue: '#111827',
                tm_yellow: '#eec804',
            },
            backgroundImage: (theme) => ({
                'banner-pattern': "url('assets/images/bg-pettern.jpg')",
            }),
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
