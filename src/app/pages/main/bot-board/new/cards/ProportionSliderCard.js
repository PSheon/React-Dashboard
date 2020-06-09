import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import { DollarSign, AlertOctagon, Layers, Users } from 'react-feather';

const SLIDER_MARKS = [
	{
		value: 3,
		label: '3%'
	},
	{
		value: 5,
		label: '5%'
	},
	{
		value: 10,
		label: '10%'
	},
	{
		value: 15,
		label: '15%'
	},
	{
		value: 20,
		label: '20%'
	},
	{
		value: 25,
		label: '25%'
	},
	{
		value: 30,
		label: '30%'
	}
];

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

const ProportionSliderCard = ({ active, selected, title, iconType, iconColorSchema, handleChange }) => {
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 36 : 32;

	return (
		<Card
			className={clsx(classes.root, selected ? classes.active : classes.pending, 'w-full rounded-8 shadow-nones')}
		>
			<div className="py-24 sm:p-16 flex flex-col justify-around sm:justify-center items-center">
				<div className="flex justify-center items-start p-0 md:p-8">
					<div
						className={clsx(
							classes.iconWrapper,
							'text-center whiteSpace-no-wrap relative text-white inline-flex p-24 sm:p-12 m-0'
						)}
					>
						<div className={clsx(classes.iconContent, 'flex justify-center items-center')}>
							{renderCardIcon(iconType, ICON_SIZE)}
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Typography className="text-20 sm:text-16" color="textSecondary">
						{title}
					</Typography>
				</div>
				<Slider
					className="w-3/5 sm:w-4/5 px-16 mt-24"
					value={active}
					max={30}
					getAriaValueText={value => `${value} %`}
					step={null}
					valueLabelDisplay="off"
					color="secondary"
					marks={SLIDER_MARKS}
					onChange={handleChange}
				/>
			</div>
		</Card>
	);
};

ProportionSliderCard.propTypes = {
	active: PropTypes.number,
	selected: PropTypes.bool,
	title: PropTypes.string,
	iconType: PropTypes.oneOf(['dollar-sign', 'alert-octagon', 'layers', 'users']),
	iconColorSchema: PropTypes.oneOf(['primary', 'secondary', 'warning', 'info', 'success', 'error']),
	handleChange: PropTypes.func
};
ProportionSliderCard.defaultProps = {
	active: 0,
	selected: false,
	title: 'Title',
	iconType: 'users',
	iconColorSchema: 'primary'
};

export default ProportionSliderCard;
