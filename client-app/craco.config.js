const path = require(`path`);

module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	webpack: {
		alias: {
			'@zeta': path.resolve(__dirname, 'src/@zeta'),
		},
	},
};
