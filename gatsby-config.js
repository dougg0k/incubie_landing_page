module.exports = {
	siteMetadata: {
		title: `Incubie: Feedback & Idea Management Tool`,
		description: `Collect and prioritize ideas and feedback to build great products.`,
		author: ``,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Open Sans`,
						variants: [`300`, `400`, `700`],
					},
				],
			},
		},
		`gatsby-plugin-react-svg`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop"],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
