// TODO Dev this
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { HelpCircle } from 'react-feather';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

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
					fontSize: '2.4rem',
					formatter: val => {
						const score = Math.round(val / 10);
						if (score < 3) {
							return '低風險';
						}
						if (score < 7) {
							return '中風險';
						}
						return '高風險';
					}
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

function WidgetStrategyDescription(props) {
	const classes = useStyles();
	const theme = useTheme(props);
	const [usageRatio, setUsageRatio] = useState(20);

	// useInterval(() => {
	// 	setUsageRatio(Math.floor(Math.random() * 99) + 1);
	// }, 1500);

	return (
		<div className="widget w-full p-16 pb-24">
			<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
				<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
					<Typography className="h1 font-medium">風險等級</Typography>
					<Tooltip
						arrow
						title="風險等級"
						placement="top"
						classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
					>
						<IconButton aria-label="風險等級說明" className="h-36 p-8" color="inherit" size="small">
							<HelpCircle size={20} className="cursor-pointer text-muted" />
						</IconButton>
					</Tooltip>
				</div>

				<div className="relative p-16">
					<Chart
						options={OPTIONS({ success: theme.palette.green.light, strokeColor: theme.palette.green.main })}
						series={[usageRatio]}
						type="radialBar"
						height={200}
					/>
				</div>

				<div className="flex justify-center items-center mt-20">
					<div className="border-t-1 border-r-1 text-center w-1/2 pt-16 pb-12">
						<p className="text-24 font-semibold mb-4">462 天</p>
						<p className="mb-4 font-300">運行天數</p>
					</div>
					<div className="border-t-1 border-l-1 text-center w-1/2 pt-16 pb-12">
						<p className="text-24 font-semibold mb-4">4 天</p>
						<p className="mb-4 font-300">平均持倉時間</p>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className="border-t-1 border-r-1 text-center w-1/2 pt-16 pb-12">
						<p className="text-24 font-semibold mb-4">1</p>
						<p className="mb-4 font-300">槓桿倍數</p>
					</div>
					<div className="border-t-1 border-l-1 text-center w-1/2 pt-16 pb-12">
						<p className="text-24 font-semibold mb-4">4.6 %</p>
						<p className="mb-4 font-300">最大回撤率</p>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className="border-t-1 border-r-1 text-center w-1/2 pt-16 pb-12">
						<p className="text-24 font-semibold mb-4">0</p>
						<p className="mb-4 font-300">手續費率</p>
					</div>
					<div className="border-t-1 border-l-1 text-center w-1/2 pt-16 pb-12">
						<p className="text-24 font-semibold mb-4">$500</p>
						<p className="mb-4 font-300">最低需求</p>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default React.memo(WidgetStrategyDescription);
