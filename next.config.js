module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/i,
      use: ['@svgr/webpack']
		});

		return config;
	},
};