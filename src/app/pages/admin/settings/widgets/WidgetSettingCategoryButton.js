import React from 'react';
import { Cpu } from 'react-feather';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	iconWrapper: {
		borderRadius: '50%',
		cursor: 'pointer',
		fontSize: '.75rem',
		verticalAlign: 'middle',
		backgroundColor: fade(theme.palette.primary.light, 0.15)
	},
	iconContent: {
		color: theme.palette.primary.dark,
		width: '32px',
		height: '32px'
	}
}));

const WidgetSettingCategoryButton = props => {
	const classes = useStyles(props);

	return 123;
};

export default WidgetSettingCategoryButton;
