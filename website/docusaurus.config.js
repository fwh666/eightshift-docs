const codeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
	title: 'Eightshift Development kit',
	tagline: 'All the tools you need to start building a modern WordPress project, using all the latest front end development tools.',
	url: 'https://eightshift.com',
	baseUrl: '/',
	favicon: '/img/favicon.png',
	organizationName: 'infinum',
	projectName: 'eightshift-docs',
	staticDirectories: ['static'],
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		}
	],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'Eightshift DevKit Logo',
				src: '/img/logo.svg',
			},
			items: [
				{
					to: 'docs/welcome',
					activeBasePath: 'welcome',
					label: 'Docs',
					position: 'right',
				},
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				{
					to: '/storybook/',
					activeBasePath: 'storybook',
					label: 'Storybook',
					position: 'right',
				},
				{
					to: '/sass',
					activeBasePath: 'sass',
					label: 'SCSS',
					position: 'right',
				},
				{
					to: '/showcase',
					activeBasePath: 'showcase',
					label: 'Showcase',
					position: 'right',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'Facebook',
							href: 'https://facebook.com/infinumcom',
							icon: 'facebook',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/infinumcom/',
							icon: 'instagram',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/infinum',
							icon: 'twitter',
						},
						{
							label: 'Clutch',
							href: 'https://clutch.co/profile/infinum',
							icon: 'clutch',
						},
						{
							label: 'Dribbble',
							href: 'https://dribbble.com/infinum',
							icon: 'dribbble',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/infinum/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Made with ❤️ by Infinum team.',
		},
		algolia: {
			appId: 'CWB1S6U3C4',
			apiKey: 'cbae3fc769aee256328548eff1e91c1c',
			indexName: 'infinum_eightshift',
		},
		prism: {
			theme: codeTheme,
			additionalLanguages: ['php'],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		trailingSlash: false
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: require.resolve('@infinum/docusaurus-theme/dist/style.css'),
				},
				blog: {
					blogTitle: 'Tutorials and articles about Eightshift development kit',
					blogDescription: 'Tutorials and articles about Eightshift development kit',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 6,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	customFields: {
		keywords: [
			'wordpress tools',
			'development tools',
			'wordpress project',
			'Gutenberg blocks',
			'development kit',
			'wordpress kit',
			'devkit'
		],
		image: 'img-why-boilerplate@2x.png',
	}
};
