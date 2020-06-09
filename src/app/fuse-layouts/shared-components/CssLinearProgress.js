import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		height: '.8rem',
		borderRadius: '.8rem'
	},
	colorPrimary: {
		backgroundColor: '#262d49'
	},
	colorSecondary: {
		backgroundColor: '#262d49'
	},
	bar: {
		backgroundColor: ({ colorSchema }) => theme.palette[colorSchema].light,
		borderRadius: '.8rem'
	}
}));

const CssLinearProgress = ({ colorSchema, percentage }) => {
	const classes = useStyles({ colorSchema });

	return <LinearProgress classes={classes} variant="determinate" color="primary" value={percentage} />;
};

CssLinearProgress.propTypes = {
	colorSchema: PropTypes.oneOf(['primary', 'secondary']),
	percentage: PropTypes.number
};
CssLinearProgress.defaultProps = {
	colorSchema: 'primary',
	percentage: 100
};

export default CssLinearProgress;
