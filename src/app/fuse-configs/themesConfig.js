import { skyBlue, fuseDark, gray, red, orange, yellow, green, teal, blue, indigo, purple, pink } from '@fuse/colors';

const themesConfig = {
	default: {
		palette: {
			type: 'light',
			primary: fuseDark,
			secondary: {
				light: skyBlue[100],
				main: skyBlue[500],
				dark: skyBlue[900]
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
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
			primary: {
				light: '#8f85f3',
				main: '#5048a8',
				dark: '#7367f0'
			},
			primaryGradient: 'linear-gradient(30deg, #7367f0, rgba(115, 103, 240, .5))',
			secondary: {
				light: '#FFB268',
				main: '#FF9F43',
				dark: '#B26f2E'
			},
			secondaryGradient: 'linear-gradient(30deg, #FF9F43, rgba(255, 159, 67, .5))',
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
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	}
};

export default themesConfig;
