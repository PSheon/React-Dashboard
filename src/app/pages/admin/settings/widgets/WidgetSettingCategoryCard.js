import React from 'react';
import { Volume2, Bell, Tool, DollarSign, MapPin, Settings } from 'react-feather';

import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const renderCardIcon = (iconType, size) => {
	switch (iconType) {
		case 'volumn-2':
			return <Volume2 size={size} />;
		case 'bell':
			return <Bell size={size} />;
		case 'tool':
			return <Tool size={size} />;
		case 'dollar-sign':
			return <DollarSign size={size} />;
		case 'map-pin':
			return <MapPin size={size} />;
		case 'settings':
		default:
			return <Settings size={size} />;
	}
};

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color, background-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&.activate, &:hover': {
			backgroundColor: theme.palette.primary.main,
			boxShadow: theme.shadows[6],
			'& $iconWrapper': {
				animation: '$pulse 2s infinite',
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				transform: 'scale(1.1)'
			}
		}
	},
	iconWrapper: {
		transition: theme.transitions.create(['transform', 'backgroundColor'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.shorter
		}),
		borderRadius: '50%',
		cursor: 'pointer',
		fontSize: '.75rem',
		verticalAlign: 'middle',
		backgroundColor: ({ iconColorSchema }) => fade(theme.palette[iconColorSchema].light, 0.25)
	},
	iconContent: {
		transition: theme.transitions.create(['color'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.shorter
		}),
		color: ({ iconColorSchema }) => theme.palette[iconColorSchema].dark,
		width: '32px',
		height: '32px'
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.paper, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const WidgetSettingCategoryCard = ({ title, iconType, iconColorSchema, activate }) => {
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 28 : 20;

	return (
		<Card className={clsx(classes.root, activate && 'activate', 'w-full rounded-8 shadow-none cursor-pointer')}>
			<div className="flex justify-around md:justify-center items-center px-24 py-16">
				<div
					className={clsx(
						classes.iconWrapper,
						'text-center whiteSpace-no-wrap relative text-white inline-flex p-8 md:p-12 m-0'
					)}
				>
					<div className={clsx(classes.iconContent, 'flex justify-center items-center')}>
						{renderCardIcon(iconType, ICON_SIZE)}
					</div>
				</div>
				<div className="flex flex-col justify-center items-start mt-12 md:mt-0">
					<Typography className="text-16 font-semibold leading-none my-8 md:mt-24">{title}</Typography>
				</div>
			</div>
		</Card>
	);
};

WidgetSettingCategoryCard.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	iconType: PropTypes.oneOf(['dollar-sign', 'alert-octagon', 'layers', 'users']),
	iconColorSchema: PropTypes.oneOf(['primary', 'secondary', 'warning', 'info', 'success', 'error'])
};

export default WidgetSettingCategoryCard;
