module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            zIndex: {
                1: '1',
            },
        },
        colors: {
            body: '#333',
            black: '#000',
            red: '#FA5757',
            green: '#219653',
            grey: '#E6E6E6',
            white: '#fff',
            'grey-light': '#F6F5F3',
            'green-light': '#6FCF97',
            'green-press': '#258229',
            // eslint-disable-next-line prettier/prettier
            'main-color': '#f3f3f3',
            caption: '#828282',
            border: '#E0E0E0',
        },
        container: {
            screens: {
                sm: '600px',
                md: '728px',
                lg: '960px',
                xl: '960px',
                '2xl': '960px',
            },
        },

        fontSize: {
            s: '0.5rem',
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
    },
    plugins: [],
};
