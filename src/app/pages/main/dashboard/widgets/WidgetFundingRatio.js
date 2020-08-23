// TODO Dev this
import React, { useState } from 'react';
import { useInterval } from '@fuse/hooks';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Chart from 'react-apexcharts';
import { HelpCircle } from 'react-feather';

const OPTIONS = ({ success, strokeColor }) => ({
	chart: {
		sparkline: {
			enabled: true
		},
		dropShadow: {
			enabled: true,
			blur: 3,
			left: 1,
			top: 1,
			opacity: 0.1
		}
	},
	colors: [success],
	plotOptions: {
		radialBar: {
			size: 110,
			startAngle: -140,
			endAngle: 150,
			hollow: {
				size: '77%'
			},
			track: {
				background: strokeColor,
				strokeWidth: '50%'
			},
			dataLabels: {
				name: {
					show: false
				},
				value: {
					offsetY: 18,
					color: strokeColor,
					fontSize: '4rem'
				}
			}
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			type: 'horizontal',
			shadeIntensity: 0.5,
			gradientToColors: ['#00b5b5'],
			inverseColors: true,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100]
		}
	},
	stroke: {
		lineCap: 'round'
	}
});

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

function WidgetFundingRatio(props) {
	const classes = useStyles();
	const theme = useTheme(props);
	const [usageRatio, setUsageRatio] = useState(82);

	// useInterval(() => {
	// 	setUsageRatio(Math.floor(Math.random() * 99) + 1);
	// }, 1500);

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="h1 font-medium">成功掛單比率</Typography>
				<Tooltip
					arrow
					title="成功掛單比率"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<HelpCircle size={20} className="cursor-pointer text-muted" />
				</Tooltip>
			</div>

			<div className="relative p-16">
				<Chart
					options={OPTIONS({ success: theme.palette.green.light, strokeColor: theme.palette.green.main })}
					series={[usageRatio]}
					type="radialBar"
					height={260}
				/>
			</div>

			<div className="flex justify-center items-center mt-20">
				<div className="border-t-1 border-r-1 text-center w-1/2 py-16">
					<p className="mb-4 font-300">已借出</p>
					<p className="text-28 font-semibold mb-4">786,617</p>
				</div>
				<div className="border-t-1 border-l-1 text-center w-1/2 py-16">
					<p className="mb-4 font-300">等待借出</p>
					<p className="text-28 font-semibold mb-4">13,561</p>
				</div>
			</div>
		</Card>
	);
}

export default React.memo(WidgetFundingRatio);
