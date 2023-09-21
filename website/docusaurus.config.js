const codeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
	title: 'AI GPT God',
	// todo-fwh-描述定制
	tagline: 'AI GPT God revolutionizes divine prescience with cutting-edge language modeling. Master of digital omniscience, it interprets human musings to offer wise insight and guidance. Generating sermons of text tailored to human quandaries, AI GPT God elevates linguistic prowess, delivering celestial enlightenment to seekers of wisdom.',
	url: 'https://aigptgod.com',
	baseUrl: '/',
	favicon: '/img/favicon.png',
	organizationName: 'aigptgod',
	projectName: 'aigptgod',
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
				alt: 'Ai GPT God Logo',
				// src: '/img/logo.svg',
				// src: '/img/ideogram.jpeg',
				src: '/img/acya7-riu3s.svg',
			},
			items: [
				{
					to: 'docs/welcome',
					activeBasePath: 'docs',
					label: 'DevKit',
					position: 'right',
				},
				{
					to: 'forms/welcome',
					activeBasePath: 'forms',
					label: 'Forms',
					position: 'right',
				},
				// {
				// 	to: '/storybook/',
				// 	activeBasePath: 'storybook',
				// 	label: 'Storybook',
				// 	position: 'right',
				// },
				// {
				// 	to: '/sass',
				// 	activeBasePath: 'sass',
				// 	label: 'SCSS',
				// 	position: 'right',
				// },
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				// {
				// 	to: '/showcase',
				// 	activeBasePath: 'showcase',
				// 	label: 'Showcase',
				// 	position: 'right',
				// },
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					//todo-fwh-账号注册变更
					items: [
						{
							label: 'Facebook',
							href: 'https://facebook.com/marvin',
							icon: 'facebook',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/marvin/',
							icon: 'instagram',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/marvin',
							icon: 'twitter',
						},
						{
							label: 'Clutch',
							href: 'https://clutch.co/profile/marvin',
							icon: 'clutch',
						},
						{
							label: 'Dribbble',
							href: 'https://dribbble.com/marvin',
							icon: 'dribbble',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/marvin/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Made with ❤️ by Marvin team.',
		},
		// todo-fwh-申请账号搜索
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
				// todo-fwh-谷歌统计
				gtag: {
					trackingID: 'G-V6Z995FS51',
					anonymizeIP: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/theme/styles.css'),
						require.resolve('@infinum/docusaurus-theme/dist/style.css'),
					],
				},
				//todo-fwh-博客设置
				blog: {
					blogTitle: 'Tutorials and articles about AI GPT God',
					blogDescription: 'Tutorials and articles about AI GPT God',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 9,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'forms',
				path: 'forms',
				routeBasePath: 'forms',
				sidebarPath: require.resolve('./sidebars-forms.js'),
			}, 
		],
	],
	// todo-fwh-关键词定制
	customFields: {
		keywords: [
			'ai gpt god',
			'AI GPT God',
			'AI GPT',
			'AI God',
			'GPT God',
			'god mode ai auto gpt',
			'god mode ai gpt',
			'god mode auto gpt',
			'god mode gpt',
			'god gpt',
			'chat gpt ai login',
			'chat gpt ai'
		],
		image: 'img-why-boilerplate@2x.png',
	}
};
