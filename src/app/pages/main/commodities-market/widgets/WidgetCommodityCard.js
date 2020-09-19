import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { AlertCircle } from 'react-feather';
import { Link } from 'react-router-dom';

import { useInterval } from '@fuse/hooks';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BITCOIN_IMG from 'app/assets/images/market/bitcoin.svg';
import COTTON_IMG from 'app/assets/images/market/cotton.svg';
import DOGE_IMG from 'app/assets/images/market/dogecoin.svg';
import ETHERUM_IMG from 'app/assets/images/market/ethereum.svg';
import LITECOIN_IMG from 'app/assets/images/market/litecoin.svg';
import TETHER_IMG from 'app/assets/images/market/tether.svg';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { formatPrice } from 'utils';

const generateOptions = (chartId, chartColors) => ({
	chart: {
		id: chartId,
		toolbar: {
			show: false
		},
		sparkline: {
			enabled: true
		}
	},
	grid: {
		show: false
	},
	colors: chartColors,
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 2.5
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 0.9,
			opacityFrom: 0.7,
			opacityTo: 0.5,
			stops: [0, 80, 100]
		}
	},

	xaxis: {
		labels: {
			show: false
		},
		axisBorder: {
			show: false
		}
	},
	yaxis: {
		labels: {
			show: false
		}
	},
	tooltip: {
		theme: 'dark',
		x: { show: false }
	}
});
const generateSeries = (tooltipTitle, series) => [
	{
		name: tooltipTitle,
		data: series
	}
];

const renderCardIcon = (iconType = 'pending', size = 48) => {
	switch (iconType.toLowerCase()) {
		case 'btc':
			return <img src={BITCOIN_IMG} alt="Bitcoin Logo" width={size} />;
		case 'eth':
			return <img src={ETHERUM_IMG} alt="Etherum Logo" width={size} />;
		case 'ltc':
			return <img src={LITECOIN_IMG} alt="Litecoin Logo" width={size} />;
		case 'usdt':
			return <img src={TETHER_IMG} alt="Tether Logo" width={size} />;
		case 'doge':
			return <img src={DOGE_IMG} alt="Doge Logo" width={size} />;
		case 'cotton':
			return <img src={COTTON_IMG} alt="Cotton Logo" width={size} />;
		case 'pending':
		default:
			return <AlertCircle size={size} />;
	}
};
const renderChange = change => {
	const upDown = change > 0 ? 'up' : 'down';
	const percentage = Math.abs(change) * 100;

	if (upDown === 'up') {
		return (
			<Typography color="textSecondary" className="flex justify-end items-center">
				過去7天
				<Icon className="text-14 text-success mx-4">trending_up</Icon>
				<span className="text-18 sm:text-16 text-success">{percentage}%</span>
			</Typography>
		);
	}
	return (
		<Typography color="textSecondary" className="flex justify-end items-center">
			過去7天
			<Icon className="text-14 text-danger mx-4">trending_down</Icon>
			<span className="text-18 sm:text-16 text-danger">{percentage}%</span>
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
		height: '32px',
		'& img': {
			zIndex: '2'
		}
	},
	iconContentBg: {
		width: '30px',
		height: '30px',
		backgroundColor: '#fff',
		borderRadius: '999px',
		zIndex: '1'
	},
	'@keyframes pulse': {
		'0%': { boxShadow: `0 0 0 0 ${fade(theme.palette.background.default, 0.7)}` },
		'70%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
		'100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
	}
}));

const WidgetCommodityCard = ({
	title,
	abbreviation,
	price,
	change,
	iconColorSchema,
	chartId,
	chartColors,
	tooltipTitle
}) => {
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const [usageList, setUsageList] = useState(new Array(30).fill(0));

	const ICON_SIZE = mdDown ? 36 : 32;
	const CHART_HEIGHT = mdDown ? 128 : 160;

	useInterval(() => {
		// TODO
		const restList = usageList.splice(1);
		const newUsageList = [...restList, Math.floor(Math.random() * 6) + 100];

		setUsageList(newUsageList);
	}, 1500);

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none flex flex-col justify-between')}>
			<div className="px-16 py-12 flex justify-between">
				<div className="flex justify-center items-center">
					<div
						className={clsx(
							classes.iconWrapper,
							'whiteSpace-no-wrap relative text-white inline-flex p-12 sm:p-8 m-0'
						)}
					>
						<div className={clsx(classes.iconContent, 'relative flex justify-center items-center')}>
							<div className={clsx(classes.iconContentBg, 'absolute')} />
							{renderCardIcon(abbreviation, ICON_SIZE)}
						</div>
					</div>
					<Hidden xsDown>
						<div className="flex flex-col pl-12">
							<Typography className="text-20 font-bold leading-none mt-8">{title}</Typography>
							<Typography className="sm:text-16" color="textSecondary">
								{abbreviation.toUpperCase()}
							</Typography>
						</div>
					</Hidden>
				</div>

				<div className="flex flex-col">
					<Typography className="text-20 text-right font-bold leading-none mt-8">
						<span className="text-16 mr-4">$</span>
						{formatPrice(price)}
					</Typography>
					{renderChange(change)}
				</div>
			</div>
			<Link to={`/commodities-market/${abbreviation}`}>
				<Chart
					options={generateOptions(chartId, [theme.palette[chartColors].light])}
					series={generateSeries(tooltipTitle, usageList)}
					type="area"
					height={CHART_HEIGHT}
				/>
			</Link>
		</Card>
	);
};

WidgetCommodityCard.propTypes = {
	title: PropTypes.string.isRequired,
	abbreviation: PropTypes.string.isRequired,
	price: PropTypes.number,
	change: PropTypes.number,
	iconColorSchema: PropTypes.oneOfType(['primary', 'secondary', 'info', 'warning', 'success', 'danger']).isRequired,
	chartId: PropTypes.string.isRequired,
	chartColors: PropTypes.string.isRequired,
	tooltipTitle: PropTypes.string.isRequired
};

WidgetCommodityCard.defaultProps = {
	title: 'Crypto',
	abbreviation: 'crypto',
	price: 100,
	change: 0.1,
	iconColorSchema: 'primary',
	chartId: 'price-history-chart',
	chartColors: 'primary',
	tooltipTitle: 'Crypto 價格'
};

export default WidgetCommodityCard;
