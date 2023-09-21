import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import './footer.css';
import { Footer as InfinumFooter } from '@infinum/docusaurus-theme';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		// <InfinumFooter footer={footer} />
		<div
			className="es-footer flex flex-col desktop:flex-row items-center gap-8 desktop:justify-between px-side-padding py-8 border-t border-t-grey-200 bg-grey-100">
			<span className="text-14">Made with ❤️ by Marvin team.</span>
			<div className="flex gap-2"><a href="https://facebook.com/MarvinLuck"><svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24" width="24" height="24" fill="none">
				<path
					d="M22 11.994c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 4.99 3.656 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.79c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.239.195 2.239.195v2.46h-1.262c-1.242 0-1.63.771-1.63 1.563v1.876h2.774l-.443 2.891h-2.33v6.988c4.78-.75 8.437-4.887 8.437-9.879Z"
					fill="currentColor"></path>
			</svg></a><a href="https://instagram.com/MarvinLuck/"><svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24" width="24" height="24" fill="none">
				<path clip-rule="evenodd" fill-rule="evenodd"
					d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm10.9 2.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
					fill="currentColor"></path>
			</svg></a><a href="https://twitter.com/MarvinLuck"><svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24" width="24" height="24" fill="none">
				<path
					d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z"
					fill="currentColor"></path>
			</svg></a><a href="https://clutch.co/profile/MarvinLuck"><svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24" width="24" height="24" fill="none">
				<path
					d="M16.121 15.696a5.351 5.351 0 0 1-3.615 1.34c-3.065 0-5.316-2.25-5.316-5.339 0-3.089 2.179-5.243 5.316-5.243a5.483 5.483 0 0 1 3.64 1.316l.67.575 2.969-2.969-.743-.694a9.609 9.609 0 0 0-6.536-2.443C6.999 2.24 3 6.214 3 11.673c0 5.46 4.094 9.554 9.506 9.554a9.611 9.611 0 0 0 6.584-2.49l.718-.67-3.017-2.97-.67.599Z"
					fill="currentColor"></path>
				<circle cx="12.362" cy="11.7211" r="3.18451" fill="currentColor"></circle>
			</svg></a><a href="https://dribbble.com/MarvinLuck"><svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24" width="24" height="24" fill="none">
				<path clip-rule="evenodd" fill-rule="evenodd"
					d="M2 12C2 6.477 6.477 2 12 2A10 10 0 1 1 2 12Zm14.86-6.09A7.726 7.726 0 0 0 12 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74ZM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5ZM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01Zm12.22 6.53A57.5 57.5 0 0 0 15 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 0 1-3.24 4.99ZM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51Zm6.13-12.62a7.823 7.823 0 0 1 1.66 4.45 15.32 15.32 0 0 0-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08Z"
					fill="currentColor"></path>
			</svg></a><a href="https://linkedin.com/company/MarvinLuck/"><svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24" width="24" height="24" fill="none">
				<path clip-rule="evenodd" fill-rule="evenodd"
					d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26ZM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 1.57v8.37H5.5v-8.37h2.77Z"
					fill="currentColor"></path>
			</svg></a></div>
		</div>

	);
}

export default React.memo(Footer);
