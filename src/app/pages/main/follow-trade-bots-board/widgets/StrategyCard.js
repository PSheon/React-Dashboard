import React from 'react';
import { Info } from 'react-feather';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import CssAvatarBadge from 'app/fuse-layouts/shared-components/CssAvatarBadge';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { formatNumber } from 'utils';

const getRiskColorScheme = riskScore => {
	if (riskScore < 4) {
		return 'success';
	}
	if (riskScore < 7) {
		return 'warning';
	}
	return 'danger';
};
const getGainColorScheme = gainRate => {
	if (gainRate < -10) {
		return 'danger';
	}
	if (gainRate < 10) {
		return 'warning';
	}
	return 'success';
};
const renderFollowersChange = change => {
	const percentage = Math.abs(change) * 100;

	if (change > 0) {
		return (
			<Typography className="flex justify-end items-center text-success">
				<Icon className="mx-4">trending_up</Icon>
				{percentage}%
			</Typography>
		);
	}
	return (
		<Typography className="flex justify-end items-center text-danger">
			<Icon className="mx-4">trending_down</Icon>
			{percentage}%
		</Typography>
	);
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
	gainRate: {
		color: ({ gainRateColorSchema }) => theme.palette[gainRateColorSchema].main
	},
	riskCard: {
		color: ({ riskScoreColorSchema }) => theme.palette[riskScoreColorSchema].main,
		border: ({ riskScoreColorSchema }) => `.2rem solid ${theme.palette[riskScoreColorSchema].main}`
	},
	followBtn: {
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: lighten(theme.palette.primary.main, 0.1)
		}
	}
}));

const StrategyCard = ({
	author,
	strategyId,
	strategyDisplayname,
	gainRate,
	riskScore,
	followersCount,
	followersChange
}) => {
	const classes = useStyles({
		gainRateColorSchema: getGainColorScheme(gainRate),
		riskScoreColorSchema: getRiskColorScheme(riskScore)
	});

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none flex flex-col justify-between')}>
			<div className="px-16 py-12 flex justify-between">
				<div className="flex justify-center items-center">
					<CssAvatarBadge
						overlap="circle"
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						dotschema="success"
						variant="dot"
					>
						<div className="border-4 p-2 rounded-full">
							<Avatar className="w-36 h-36" alt="user photo" src={author?.photoUrl} />
						</div>
					</CssAvatarBadge>
					<div className="flex flex-col pl-12">
						<Typography className="text-20 font-bold leading-none mt-8">{strategyDisplayname}</Typography>
						<Typography className="sm:text-16" color="textSecondary">
							{author?.displayName}
						</Typography>
					</div>
				</div>

				<IconButton
					component={Link}
					to={`/strategies-market/${strategyId}`}
					key="addToList"
					aria-label="加入觀察"
					className="h-48 p-12"
					color="inherit"
					size="small"
				>
					<Info size={24} />
				</IconButton>
			</div>

			<div className="px-16 py-8 sm:px-24 sm:py-12 flex justify-between">
				<div className="flex flex-col justify-center">
					<Typography
						className={clsx(classes.gainRate, 'text-24 font-bold leading-none')}
					>{`${gainRate} %`}</Typography>
					<Typography className="mt-8 sm:text-12" color="textSecondary">
						回報(過去6個月)
					</Typography>
				</div>

				<div className="relative flex flex-col items-center">
					<Typography
						className={clsx(classes.riskCard, 'text-18 font-bold leading-none rounded-8 px-8 py-4')}
					>
						{riskScore}
					</Typography>
					<Typography className="mt-4 sm:text-12" color="textSecondary">
						風險
					</Typography>
				</div>
			</div>

			<div className="px-16 sm:px-24 flex justify-center">
				<Button
					component={Link}
					to={`/strategies-market/${strategyId}`}
					variant="contained"
					className={clsx(classes.followBtn, 'w-full normal-case px-24 my-6 sm:my-12 text-16 text-white')}
				>
					查看策略
				</Button>
			</div>

			<div className="px-16 sm:px-24 pb-16 flex justify-center items-center">
				<Typography color="textSecondary">{`${formatNumber(followersCount)} 使用者`}</Typography>
				{renderFollowersChange(followersChange)}
			</div>
		</Card>
	);
};

StrategyCard.propTypes = {
	author: PropTypes.object.isRequired,
	strategyId: PropTypes.string.isRequired,
	strategyDisplayname: PropTypes.string.isRequired,
	gainRate: PropTypes.number.isRequired,
	riskScore: PropTypes.number.isRequired,
	followersCount: PropTypes.number.isRequired,
	followersChange: PropTypes.number.isRequired
};

StrategyCard.defaultProps = {
	author: {
		displayName: 'Paul',
		photoUrl: 'assets/images/avatars/default.jpg'
	},
	strategyId: 'to-the-moon',
	strategyDisplayname: 'To The Moon',
	gainRate: 70,
	riskScore: 3,
	followersCount: 254,
	followersChange: 120
};

export default StrategyCard;
