import React from 'react';
import { Activity, Shield, Target, Award, Pocket, DollarSign, AlertOctagon, Layers, Users } from 'react-feather';

import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const renderCardIcon = (iconType, size) => {
	switch (iconType) {
		case 'activity':
			return <Activity size={size} />;
		case 'shield':
			return <Shield size={size} />;
		case 'target':
			return <Target size={size} />;
		case 'award':
			return <Award size={size} />;
		case 'pocket':
			return <Pocket size={size} />;
		case 'dollar-sign':
			return <DollarSign size={size} />;
		case 'alert-octagon':
			return <AlertOctagon size={size} />;
		case 'layers':
			return <Layers size={size} />;
		case 'users':
		default:
			return <Users size={size} />;
	}
};

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6],
			'& $iconWrapper': {
				transform: 'scale(1.1)'
			}
		}
	},
	iconWrapper: {
		transition: theme.transitions.create(['transform'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.shorter
		}),
		animation: '$pulse 2s infinite',
		borderRadius: '50%',
		cursor: 'pointer',
		fontSize: '.75rem',
		verticalAlign: 'middle',
		backgroundColor: ({ iconColorSchema }) => fade(theme.palette[iconColorSchema].light, 0.25)
	},
	iconContent: {
		color: ({ iconColorSchema }) => theme.palette[iconColorSchema].dark,
		width: '32px',
		height: '32px'
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.default, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const BasicCard = ({ title, content, iconType, iconColorSchema }) => {
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 36 : 32;

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="py-24 sm:p-16 flex flex-row-reverse sm:flex-col justify-around sm:justify-center items-center">
				<div className="flex justify-center items-start p-0 md:p-8">
					<div
						className={clsx(
							classes.iconWrapper,
							'whiteSpace-no-wrap relative text-white inline-flex p-12 sm:p-8 m-0'
						)}
					>
						<div className={clsx(classes.iconContent, 'flex justify-center items-center')}>
							{renderCardIcon(iconType, ICON_SIZE)}
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Typography className="text-28 sm:text-24 font-semibold leading-none my-8 sm:mt-12">
						{content}
					</Typography>
					<Typography className="text-16 sm:text-14" color="textSecondary">
						{title}
					</Typography>
				</div>
			</div>
		</Card>
	);
};

BasicCard.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	iconType: PropTypes.oneOf([
		'activity',
		'shield',
		'target',
		'award',
		'pocket',
		'dollar-sign',
		'alert-octagon',
		'layers',
		'users'
	]),
	iconColorSchema: PropTypes.oneOf(['primary', 'secondary', 'warning', 'info', 'success', 'error'])
};
BasicCard.defaultProps = {
	title: 'Title',
	content: 'Content',
	iconType: 'users',
	iconColorSchema: 'primary'
};

export default BasicCard;
