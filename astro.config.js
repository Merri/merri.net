import solid from '@astrojs/solid-js'
import { defineConfig } from 'astro/config'

export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
	integrations: [solid()],
	site: 'https://merri.net',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'fi'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
})
