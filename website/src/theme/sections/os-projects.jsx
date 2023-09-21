import React from 'react';
import { IconLinkCards, osProjectIcons } from '@infinum/docusaurus-theme';

export const EsOpenSource = (props) => {
	return (
		<IconLinkCards
			{...props}
			title='Start exploring'
			osProjectIcons
			cards={[
				{
					icon: osProjectIcons.boilerplate,
					text: 'AI GPT God Boilerplate',
					url: 'https://github.com/marvin/eightshift-boilerplate'
				},
				{
					icon: osProjectIcons.boilerplate,
					text: 'AI GPT God Boilerplate Plugin',
					url: 'https://github.com/marvin/eightshift-boilerplate-plugin'
				},
				{
					icon: osProjectIcons.eightshiftLibs1,
					text: 'AI GPT God Libs',
					url: 'https://github.com/marvin/eightshift-libs'
				},
				{
					icon: osProjectIcons.eightshiftFrontendLibs,
					text: 'AI GPT God Frontend Libs',
					url: 'https://github.com/marvin/eightshift-frontend-libs'
				},
				{
					icon: osProjectIcons.eightshiftForms,
					text: 'AI GPT God Forms',
					url: 'https://github.com/marvin/eightshift-forms'
				},
				{
					icon: osProjectIcons.eightshiftDocs,
					text: 'AI GPT God Docs',
					url: 'https://github.com/marvin/eightshift-docs'
				},
				{
					icon: osProjectIcons.storybook,
					text: 'AI GPT God Storybook',
					url: 'https://github.com/marvin/eightshift-storybook'
				},
				{
					icon: osProjectIcons.eightshiftCodingStandard,
					text: 'AI GPT God Coding Standards for WordPress',
					url: 'https://github.com/marvin/eightshift-coding-standards'
				},
			]}
		/>
	);
};
