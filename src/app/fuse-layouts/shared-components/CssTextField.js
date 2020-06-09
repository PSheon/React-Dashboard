import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// TODO fix here to https://material-ui.com/components/text-fields/
const CssTextFieldOld = withStyles({
	root: {
		borderRadius: '0.8rem',

		'& label': {
			transition: 'all .15s ease-in',
			color: '#ffffff',
			fontSize: '1.6rem',

			'&.Mui-focused': {
				color: '#c2c6dc'
			}
		},
		'& .MuiFormHelperText-filled': {
			fontSize: '1.4rem',
			transition: 'height .3s ease-in'
		},
		'& .MuiOutlinedInput-root': {
			color: '#c2c6dc',
			fontSize: '1.6rem',
			borderRadius: '.8rem',
			backgroundColor: '#262c49',

			'&.Mui-error': {
				'& .MuiIconButton-label': {
					color: '#F56565'
				}
			},
			'& legend': {
				fontSize: '1.4rem'
			},
			'& fieldset': {
				borderColor: '#262c49'
			},
			'&:hover fieldset': {
				borderColor: '#7367f0'
			},
			'&.Mui-focused fieldset': {
				borderColor: '#7367f0'
			}
		}
	}
})(TextField);

// TODO
// const InputLabelClasses = {
// 	root: { transition: 'all .15s ease-in', color: '#ffffff', fontSize: '1.6rem' },
// 	focused: { color: '#c2c6dc' }
// };

// const FormHelperTextClasses = {
// 	filled: { fontSize: '1.4rem', transition: 'height .3s ease-in' }
// };

// const InputClasses = {
// 	root: { color: '#c2c6dc', fontSize: '1.6rem', borderRadius: '.8rem', backgroundColor: '#262c49' },
// 	error: {
// 		'& .MuiIconButton-label': {
// 			color: '#F56565'
// 		}
// 	},
// 	notchedOutline: {
// 		borderColor: '#262c49'
// 	}
// };

// const CssTextField = () => (
// 	<TextField
// 		classes={{ root: { borderRadius: '0.8rem' } }}
// 		InputLabelProps={InputLabelClasses}
// 		FormHelperTextProps={FormHelperTextClasses}
// 		InputProps={InputClasses}
// 	/>
// );

export default CssTextFieldOld;
