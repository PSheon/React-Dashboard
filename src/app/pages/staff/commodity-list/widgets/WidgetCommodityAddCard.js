import React from 'react';
import { PlusCircle } from 'react-feather';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as Actions from 'app/store/actions';
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
			},
			'& $hintText': {
				color: theme.palette.text.primary
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
		width: '46px',
		height: '46px'
	},
	hintText: {
		transition: 'color .3s',
		color: fade(theme.palette.gray.light, 0.7)
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.default, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const WidgetCommodityAddCard = ({ iconColorSchema }) => {
	const dispatch = useDispatch();
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 64 : 46;

	return (
		<Card
			component={Link}
			to="/staff/commodity/new"
			role="button"
			className={clsx(classes.root, 'w-full rounded-8 shadow-none')}
			// @ANCHOR
			// onClick={() => dispatch(Actions.openCommodityInfoDialog())}
		>
			<div className="h-full py-24 sm:p-16 flex flex-col justify-center items-center">
				<div className="flex justify-center items-start pb-16 md:p-8">
					<div
						className={clsx(
							classes.iconWrapper,
							'whiteSpace-no-wrap relative text-white inline-flex p-12 sm:p-8 m-0'
						)}
					>
						<div className={clsx(classes.iconContent, 'flex justify-center items-center')}>
							<PlusCircle size={ICON_SIZE} />
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Typography
						className={clsx(
							classes.hintText,
							'text-24 sm:text-20 font-semibold leading-none my-8 sm:mt-12'
						)}
					>
						新增商品
					</Typography>
				</div>
			</div>
		</Card>
	);
};

WidgetCommodityAddCard.propTypes = {
	iconColorSchema: PropTypes.oneOf(['primary', 'secondary', 'warning', 'info', 'success', 'error'])
};
WidgetCommodityAddCard.defaultProps = {
	iconColorSchema: 'primary'
};

export default WidgetCommodityAddCard;
