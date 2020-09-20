import React from 'react';
import Chart from 'react-apexcharts';
import { Info } from 'react-feather';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import CssAvatarBadge from 'app/fuse-layouts/shared-components/CssAvatarBadge';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { formatNumber } from 'utils';

const OPTIONS = ({ labelColor, dangerLight, strokeColor, success }) => ({
	chart: {
		stacked: true,
		toolbar: { show: false }
	},
	plotOptions: {
		bar: {
			columnWidth: '50%',
			endingShape: 'rounded'
		}
	},
	colors: [success, dangerLight],
	dataLabels: {
		enabled: false
	},
	grid: {
		borderColor: labelColor,
		padding: {
			left: 0,
			right: 0
		}
	},
	legend: {
		show: false
	},
	xaxis: {
		show: false,
		labels: {
			// show: false,
			style: {
				colors: strokeColor
			}
		},
		axisTicks: {
			show: false
		},
		categories: [
			'一月',
			'二月',
			'三月',
			'四月',
			'五月',
			'六月',
			'七月',
			'八月',
			'九月',
			'十月',
			'十一月',
			'十二月'
		],
		axisBorder: {
			show: false
		}
	},
	yaxis: {
		show: false,
		tickAmount: 5
	},
	tooltip: {
		theme: 'dark',
		x: {
			show: false
		},
		y: {
			formatter: val => `${val}%`
		}
	}
});
const SERIES = [
	{
		name: '獲利',
		data: [12.14, 7.13, 5.02, 6.86, 17.68, 4.17, 0, 0, 0, 0, 1.36, 7.46]
	},
	{
		name: '虧損',
		data: [0, 0, 0, 0, 0, 0, -5.19, -4.71, -4.61, -1.81, 0, 0]
	}
];

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
	chartRoot: {
		'& .apexcharts-canvas .apexcharts-legend': {
			left: '10px !important'
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

const WidgetStrategyFeatureCard = ({
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
	const theme = useTheme();

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

			<div className="mx-16 sm:mx-24">
				<Chart
					className={clsx(classes.chartRoot, 'w-full -mt-16 -mb-24')}
					options={OPTIONS({
						labelColor: '#e7eef7',
						strokeColor: '#b9c3cd',
						success: theme.palette.success.main,
						warning: theme.palette.warning.main,
						danger: theme.palette.danger.main,
						primaryLight: theme.palette.primary.light,
						warningLight: theme.palette.warning.light,
						dangerLight: theme.palette.danger.light
					})}
					series={SERIES}
					type="bar"
					height={200}
				/>
			</div>

			<div className="px-16 sm:px-24 flex justify-center">
				<Button
					component={Link}
					to={`/strategies-market/${strategyId}`}
					variant="contained"
					className={clsx(classes.followBtn, 'w-full normal-case px-24 my-6 sm:my-12 text-16 text-white')}
				>
					使用策略
				</Button>
			</div>

			<div className="px-16 sm:px-24 pb-16 flex justify-center items-center">
				<Typography color="textSecondary">{`${formatNumber(followersCount)} 使用者`}</Typography>
				{renderFollowersChange(followersChange)}
			</div>
		</Card>
	);
};

WidgetStrategyFeatureCard.propTypes = {
	author: PropTypes.object.isRequired,
	strategyId: PropTypes.string.isRequired,
	strategyDisplayname: PropTypes.string.isRequired,
	gainRate: PropTypes.number.isRequired,
	riskScore: PropTypes.number.isRequired,
	followersCount: PropTypes.number.isRequired,
	followersChange: PropTypes.number.isRequired
};

WidgetStrategyFeatureCard.defaultProps = {
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

export default WidgetStrategyFeatureCard;
