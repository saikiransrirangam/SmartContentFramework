module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Experimental
    experimental: {
        applyComplexClasses: true,
        extendedSpacingScale: true,
    },

    // Future
    future: {
        removeDeprecatedGapUtilities: true,
    },

    // Options
    important: true,
    darkMode: false, // or 'media' or 'class'
    theme: {
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },

        extend: {},
        screens: {
            // XSmall
            xs: {
                min: '0',
                max: '599px',
            },
            // Small
            sm: {
                min: '600px',
                max: '959px',
            },
            // Medium
            md: {
                min: '960px',
                max: '1279px',
            },
            // Large
            lg: {
                min: '1280px',
                max: '1439px',
            },
            // XLarge
            xl: {
                min: '1440px',
            },
            // Less than Medium
            'lt-md': {
                max: '959px',
            },
            // Less than Large
            'lt-lg': {
                max: '1279px',
            },
            // Less than XLarge
            'lt-xl': {
                max: '1439px',
            },
            // Greater than XSmall
            'gt-xs': {
                min: '600px',
            },
            // Greater than Small
            'gt-sm': {
                min: '960px',
            },
            // Greater than Medium
            'gt-md': {
                min: '1280px',
            },
        },
    },
    variants: {
        extend: {
            borderStyle: ['hover'],
        },
    },
    plugins: [],
};