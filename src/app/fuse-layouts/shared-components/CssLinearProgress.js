import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	root: {
		height: '.8rem',
		borderRadius: '.8rem'
	},
	colorPrimary: {
		backgroundColor: lighten(theme.palette.background.default, 0.15)
	},
	colorSecondary: {
		backgroundColor: lighten(theme.palette.background.default, 0.15)
	},
	bar: {
		backgroundColor: ({ colorSchema }) => theme.palette[colorSchema].light,
		borderRadius: '.8rem'
	}
}));

const CssLinearProgress = ({ colorSchema, percentage = 50 }) => {
	const classes = useStyles({ colorSchema });

	return <LinearProgress classes={classes} variant="determinate" value={percentage} />;
};

CssLinearProgress.propTypes = {
	colorSchema: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'danger', 'success']),
	percentage: PropTypes.number
};
CssLinearProgress.defaultProps = {
	colorSchema: 'primary',
	percentage: 100
};

export default CssLinearProgress;
