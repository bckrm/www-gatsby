/* eslint-disable global-require */
module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'brand-1': '#FBF7E9',
                'brand-2': '#E9DDC9',
                'brand-3': '#E2B394',
                'brand-4': '#B5734D',
                'brand-5': '#7C4121',
                'brand-6': '#F7A037',
                'brand-7': '#EA4E25',
                'brand-8': '#FFD4CB',
                'brand-9': '#1F2A48',
            },
            gridTemplateRows: {
                10: 'repeat(10, minmax(0, 1fr))',
            },
            typography: {
                default: {
                    css: {
                        h2: {
                            fontSize: '2.5rem',
                        },
                    },
                },
            },
        },
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};
