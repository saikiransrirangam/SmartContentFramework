const colors = require('tailwindcss/colors');

module.exports = {
    prefix: '',
    mode: 'jit',
    important: false,
    content: ['./src/**/*.{html,ts}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'fade-out-down': {
                    from: {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    to: {
                        opacity: '0',
                        transform: 'translateY(10px)',
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'fade-out-up': {
                    from: {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    to: {
                        opacity: '0',
                        transform: 'translateY(10px)',
                    },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                'fade-in-down': 'fade-in-down 0.3s ease-out',
                'fade-out-down': 'fade-out-down 0.3s ease-out',
                'fade-in-up': 'fade-in-up 0.3s ease-out',
                'fade-out-up': 'fade-out-up 0.3s ease-out',
            },
            boxShadow: {
                custom: '0px 0px 50px 0px rgb(82 63 105 / 15%)',
            },
            colors: {
                primary: colors.blue,
                night: {
                    50: '#E0E0E0',
                    100: '#E0E0E0',
                    200: '#D0D0D0',
                    300: '#D0D0D0',
                    400: '#909090',
                    500: '#808080   ',
                    600: '#303030',
                    700: '#141414',
                    800: '#0A0A0A',
                    900: '#000000',
                },
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'system-ui', 'sans-serif'],
            nunito: ['Nunito Sans', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
        scrollbar: ['dark', 'rounded'],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-scrollbar'),
    ],
};