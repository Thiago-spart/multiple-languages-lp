/* eslint-disable @typescript-eslint/no-require-imports */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { i18n } = require("./next-i18next.config");

module.exports = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	exportPathMap: () => {
		return {
			"/": { page: "/" },
			/*
			 * "/privacy-policy": { page: "/privacy-policy" },
			 * "/terms-of-service": { page: "/terms-of-service" },
			 */
		};
	},
};
