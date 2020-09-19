import React from 'react';
import { Package, Clipboard, CheckCircle } from 'react-feather';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		transitionProperty: 'background',
		transitionDuration: theme.transitions.duration.slow,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	active: {
		background: theme.palette.primaryGradient,
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
	},
	completed: {
		background: theme.palette.primaryGradient
	}
}));

const StepperIcon = props => {
	const classes = useStyles();
	const { active, completed } = props;

	const icons = {
		1: <Package size={24} />,
		2: <Clipboard size={24} />,
		3: <CheckCircle size={24} />
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed
			})}
		>
			{icons[String(props.icon)]}
		</div>
	);
};

StepperIcon.propTypes = {
	active: PropTypes.bool,
	completed: PropTypes.bool,
	icon: PropTypes.node
};

export default StepperIcon;
