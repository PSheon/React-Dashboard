import React from 'react';
import { DollarSign, AlertOctagon, Layers, Users } from 'react-feather';

import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const renderCardIcon = (iconType, size) => {
	switch (iconType) {
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
		cursor: 'pointer',
		transitionProperty: 'box-shadow, border-color, transform',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		border: `.5rem solid ${theme.palette.background.paper}`,
		'&:hover': {
			boxShadow: theme.shadows[6],
			border: `.5rem solid ${fade(theme.palette.secondary.main, 0.5)}`,
			transform: 'translateY(-.25rem)',
			'& $iconWrapper': {
				transform: 'scale(1.1)'
			}
		}
	},
	pending: {
		animation: '$pendingPulse 2s infinite'
	},
	active: {
		border: `.5rem solid ${theme.palette.secondary.main} !important`
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
	'@keyframes pendingPulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.paper, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.default, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const SelectCard = ({ active, selected, title, content, iconType, iconColorSchema, handleClick }) => {
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 36 : 32;

	return (
		<Card
			className={clsx(
				classes.root,
				active && classes.active,
				!selected && classes.pending,
				'w-full rounded-8 shadow-nones'
			)}
			onClick={handleClick}
		>
			<div className="py-24 sm:p-16 flex flex-col justify-around sm:justify-center items-center">
				<div className="flex justify-center items-start p-0 md:p-8">
					<div
						className={clsx(
							classes.iconWrapper,
							'whiteSpace-no-wrap relative text-white inline-flex p-16 sm:p-8 m-0'
						)}
					>
						<div className={clsx(classes.iconContent, 'flex justify-center items-center')}>
							{renderCardIcon(iconType, ICON_SIZE)}
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Typography className="text-32 sm:text-24 md:text-20 font-semibold leading-none my-8 sm:mt-12">
						{content}
					</Typography>
					<Typography className="text-18 sm:text-16" color="textSecondary">
						{title}
					</Typography>
				</div>
			</div>
		</Card>
	);
};

SelectCard.propTypes = {
	active: PropTypes.bool,
	selected: PropTypes.bool,
	title: PropTypes.string,
	content: PropTypes.string,
	iconType: PropTypes.oneOf(['dollar-sign', 'alert-octagon', 'layers', 'users']),
	iconColorSchema: PropTypes.oneOf(['primary', 'secondary', 'warning', 'info', 'success', 'error']),
	handleClick: PropTypes.func
};
SelectCard.defaultProps = {
	active: false,
	selected: false,
	title: 'Title',
	content: 'Content',
	iconType: 'users',
	iconColorSchema: 'primary'
};

export default SelectCard;
