import React from 'react';
import { Award, DollarSign, AlertOctagon, Layers, Users } from 'react-feather';

import Button from '@material-ui/core/Button';
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
		'&:hover': {
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
	btnChecked: {
		// backgroundColor: theme.palette.secondary.dark
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.default, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const SettingCard = ({ title, content, iconType, iconColorSchema }) => {
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 36 : 32;

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="py-24 sm:p-16 flex flex-col justify-around sm:justify-center items-center">
				<div className="w-full flex justify-around items-center p-0 md:p-8">
					<div className="flex flex-col justify-center items-start">
						<Typography className="text-28 sm:text-24 font-semibold leading-none my-8 sm:mt-12">
							{title}
						</Typography>
						<Typography className="text-18 sm:text-16" color="textSecondary">
							{content}
						</Typography>
					</div>
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
				<div className="flex flex-col justify-center items-center pt-24 pb-20">
					<Button
						variant="contained"
						startIcon={<Award width={20} />}
						color="primary"
						className={clsx(classes.btnChecked, 'h-64 rounded-8 font-medium text-14 text-white px-36')}
					>
						<Typography className="h2 text-semibold" color="textPrimary">
							開啟設定
						</Typography>
					</Button>
				</div>
			</div>
		</Card>
	);
};

SettingCard.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	iconType: PropTypes.oneOf(['dollar-sign', 'alert-octagon', 'layers', 'users']),
	iconColorSchema: PropTypes.oneOf(['primary', 'secondary', 'warning', 'info', 'success', 'error'])
};

export default SettingCard;
