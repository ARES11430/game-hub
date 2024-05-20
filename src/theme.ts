import { extendTheme, ThemeConfig, StyleFunctionProps } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};

const colors = {
	gray: {
		50: '#f9f9f9',
		100: '#ededed',
		200: '#d3d3d3',
		300: '#b3b3b3',
		400: '#a0a0a0',
		500: '#898989',
		600: '#6c6c6c',
		700: '#202020',
		800: '#121212',
		900: '#111'
	},
	light: {
		background: '#e9f7f7', // Light blue sky background
		text: '#333', // Dark gray text
		primary: '#247ba0', // Deep blue primary
		secondary: '#6c757d' // Dark gray secondary
	},
	dark: {
		background: '#121212', // Very dark background
		text: '#cbd5e0', // Cool light gray text
		primary: '#90cdf4', // Cool blue primary
		secondary: '#718096' // Cool dark gray secondary
	}
};

const components = {
	Button: {
		variants: {
			solid: (props: StyleFunctionProps) => ({
				bg: props.colorMode === 'dark' ? 'dark.primary' : 'light.primary',
				color: 'white',
				_hover: {
					bg: props.colorMode === 'dark' ? 'dark.secondary' : 'light.secondary'
				}
			})
		}
	}
};

const container = {
	baseStyle: (props: StyleFunctionProps) => ({
		bg: props.colorMode === 'dark' ? 'dark.background' : 'light.background',
		color: props.colorMode === 'dark' ? 'dark.text' : 'light.text'
	})
};

const styles = {
	global: (props: StyleFunctionProps) => ({
		'html, body': {
			color: props.colorMode === 'dark' ? 'dark.text' : 'light.text',
			bg: props.colorMode === 'dark' ? 'dark.background' : 'light.background'
		}
	})
};

const theme = extendTheme({
	config,
	colors,
	components,
	container,
	styles
});

export default theme;
