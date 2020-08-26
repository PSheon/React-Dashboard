import React from 'react';
import { PlusCircle } from 'react-feather';

import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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
		backgroundColor: fade(theme.palette.secondary.light, 0.25)
	},
	iconContent: {
		color: theme.palette.secondary.dark,
		width: '32px',
		height: '32px'
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.default, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const BotAddCard = () => {
	const classes = useStyles();
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 36 : 32;

	return (
		<Card
			className={clsx(
				classes.root,
				'w-full h-full rounded-8 shadow-none py-24 sm:p-16 flex flex-col justify-center items-center'
			)}
		>
			<div className="flex justify-center items-start p-0 md:p-8">
				<div
					className={clsx(
						classes.iconWrapper,
						'text-center whiteSpace-no-wrap relative text-white inline-flex p-24 sm:p-12 m-0'
					)}
				>
					<div className={clsx(classes.iconContent, 'flex justify-center items-center')}>
						<PlusCircle size={ICON_SIZE} />
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<Typography className="text-28 sm:text-24 font-semibold leading-none my-8 sm:mt-12">新增</Typography>
				<Typography className="text-20 sm:text-16" color="textSecondary">
					借貸機器人
				</Typography>
			</div>
		</Card>
	);
};

export default BotAddCard;
