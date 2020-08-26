import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Cpu, Server, Activity } from 'react-feather';

import { useInterval } from '@fuse/hooks';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

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

const renderCardIcon = (iconType, size) => {
	switch (iconType) {
		case 'btc':
			return <Activity size={size} />;
		case 'eth':
			return <Server size={size} />;
		case 'xrp':
			return <Server size={size} />;
		case 'iota':
			return <Server size={size} />;
		case 'eos':
			return <Server size={size} />;

		case 'cpu':
		default:
			return <Cpu size={size} />;
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

const WidgetCryptoCard = ({ title, content, iconType, iconColorSchema, chartId, chartColors, tooltipTitle }) => {
	const classes = useStyles({ iconColorSchema });
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const [usageList, setUsageList] = useState(new Array(30).fill(0));

	const ICON_SIZE = mdDown ? 36 : 32;

	useInterval(() => {
		// TODO
		const restList = usageList.splice(1);
		const newUsageList = [...restList, Math.floor(Math.random() * 6) + 100];

		setUsageList(newUsageList);
	}, 1500);

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none flex flex-col justify-between')}>
			<div className="p-24 flex justify-between">
				<div className="flex flex-col">
					<Typography className="text-20 sm:text-16" color="textSecondary">
						{title}
					</Typography>
					<Typography className="text-28 sm:text-24 font-semibold leading-none mt-8 sm:mt-12">
						{content}
					</Typography>
				</div>

				<div className="flex justify-center items-start py-8">
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
			</div>
			<Chart
				options={generateOptions(chartId, [theme.palette[chartColors].light])}
				series={generateSeries(tooltipTitle, usageList)}
				type="area"
				height={100}
			/>
		</Card>
	);
};
export default WidgetCryptoCard;