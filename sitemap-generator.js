module.exports = {
	siteUrl: "https://captis.com",
	exclude: ["/404"],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: ["/"],
				disallow: ["/404"],
			},
		],
		additionalSitemaps: ["https://captis.com/sitemap.xml"],
	},
};
