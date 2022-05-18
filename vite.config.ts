import { defineConfig, ConfigEnv } from 'vite'

export default defineConfig(({ mode }: ConfigEnv) => {
	if (!process.argv.includes('--local-development')) {
		return {
			server: {
				hmr: {
					port: 443,
				},
			},
		}
	}
	return {}
})
