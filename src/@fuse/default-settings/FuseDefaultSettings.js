import { fuseDark, gray, red, orange, yellow, green, teal, blue, indigo, purple, pink } from '@fuse/colors';
import { lightBlue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import qs from 'qs';

import _ from '@lodash';

/**
 * SETTINGS DEFAULTS
 */
export const defaultSettings = {
	customScrollbars: true,
	animations: true,
	direction: 'ltr',
	theme: {
		main: 'defaultDark',
		navbar: 'defaultDark',
		toolbar: 'defaultDark',
		footer: 'defaultDark'
	}
};

export function getParsedQuerySettings() {
	const parsedQueryString = qs.parse(window.location.search, { ignoreQueryPrefix: true });

	if (parsedQueryString && parsedQueryString.defaultSettings) {
		return JSON.parse(parsedQueryString.defaultSettings);
	}
	return {};

	// Generating route params from settings
	/* const settings = qs.stringify({
        defaultSettings: JSON.stringify(defaultSettings, {strictNullHandling: true})
    });
    console.info(settings); */
}

/**
 * THEME DEFAULTS
 */
export const defaultThemeOptions = {
	typography: {
		fontFamily: ['Noto Sans TC', 'Muli', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		useNextVariants: true,
		suppressDeprecationWarnings: true
	}
};

export const mustHaveThemeOptions = {
	typography: {
		htmlFontSize: 10,
		body1: {
			fontSize: '1.4rem'
		},
		body2: {
			fontSize: '1.4rem'
		}
	}
};

export const defaultThemes = {
	default: {
		palette: {
			type: 'light',
			primary: fuseDark,
			secondary: {
				light: lightBlue[400],
				main: lightBlue[600],
				dark: lightBlue[700]
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	defaultDark: {
		palette: {
			type: 'dark',
			primary: fuseDark,
			secondary: {
				light: lightBlue[400],
				main: lightBlue[600],
				dark: lightBlue[700]
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	}
};

export function extendThemeWithMixins(obj) {
	const theme = createMuiTheme(obj);
	return {
		border: (width = 1) => ({
			borderWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderLeft: (width = 1) => ({
			borderLeftWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderRight: (width = 1) => ({
			borderRightWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderTop: (width = 1) => ({
			borderTopWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderBottom: (width = 1) => ({
			borderBottomWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		})
	};
}

export function mainThemeVariations(theme) {
	return {
		mainThemeDark: createMuiTheme(
			_.merge({}, defaultThemeOptions, theme, {
				palette: {
					type: 'dark',
					success: {
						light: '#53D28B',
						main: '#28C76F',
						dark: '#1C8B4D'
					},
					successGradient: 'linear-gradient(30deg, #28C76F, rgba(40, 199, 111, .5))',
					danger: {
						light: '#EE7677',
						main: '#EA5455',
						dark: '#A33A3B'
					},
					dangerGradient: 'linear-gradient(30deg, #EA5455, rgba(234, 84, 85, .5))',
					warning: {
						light: '#FFB268',
						main: '#FF9F43',
						dark: '#B26f2E'
					},
					warningGradient: 'linear-gradient(30deg, #FF9F43, rgba(255, 159, 67, .5))',
					info: {
						light: '#33D8EC',
						main: '#00CfE8',
						dark: '#0090A2'
					},
					infoGradient: 'linear-gradient(30deg, #00CFE8, rgba(0, 207, 232, .5))',
					gray: {
						light: gray[400],
						main: gray[600],
						dark: gray[700]
					},
					red: {
						light: red[400],
						main: red[600],
						dark: red[700]
					},
					orange: {
						light: orange[400],
						main: orange[600],
						dark: orange[700]
					},
					yellow: {
						light: yellow[400],
						main: yellow[600],
						dark: yellow[700]
					},
					green: {
						light: green[400],
						main: green[600],
						dark: green[700]
					},
					teal: {
						light: teal[400],
						main: teal[600],
						dark: teal[700]
					},
					blue: {
						light: blue[400],
						main: blue[600],
						dark: blue[700]
					},
					indigo: {
						light: indigo[400],
						main: indigo[600],
						dark: indigo[700]
					},
					purple: {
						light: purple[400],
						main: purple[600],
						dark: purple[700]
					},
					pink: {
						light: pink[400],
						main: pink[600],
						dark: pink[700]
					},

					background: {
						paper: '#10163A',
						default: '#262C49'
					}
				},
				...mustHaveThemeOptions
			})
		),
		mainThemeLight: createMuiTheme(
			_.merge({}, defaultThemeOptions, theme, {
				palette: {
					type: 'light',
					background: {
						paper: '#FFFFFF',
						default: '#F7F7F7'
					}
				},
				...mustHaveThemeOptions
			})
		)
	};
}
