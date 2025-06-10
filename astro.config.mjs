import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://arsharaj.github.io/resource-books-summary',
	base: '/resource-books-summary/',
	output: 'static',
	integrations: [
		starlight({
			title: 'Books Summary',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/arsharaj/resource-books-summary'
				}
			],
			sidebar: [
				{
					label: 'Academic Books',
					autogenerate: { directory: 'books-academic' },
				}
			],
		}),
	],
});
