import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	root: {
		animation: '$pulse 2s infinite',
		width: ({ width }) => width,
		height: ({ height }) => height,
		backgroundColor: ({ colorSchema }) => theme.palette[colorSchema].light
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.default, 0.7)}` },
		'70%': { boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const DotChart = ({ width, height, colorSchema, className }) => {
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const SCALE_BASE = mdDown ? 0.8 : 1;
	const classes = useStyles({ width: width * SCALE_BASE, height: height * SCALE_BASE, colorSchema });

	return <div className={clsx(classes.root, className, 'rounded-full')} />;
};

DotChart.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	colorSchema: PropTypes.oneOf(['primary', 'secondary', 'warning', 'info', 'success', 'error'])
};

export default DotChart;
