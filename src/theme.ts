import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	fonts: {
		heading: `'Comic Neue', sans-serif`,
		body: `'Comic Neue', sans-serif`,
	},
	styles: {
		global: {
			body: {
				bg: '#367C2B',
				color: 'white',
			},
		},
	},
})
