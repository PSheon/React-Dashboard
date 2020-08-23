import React from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Chart from 'react-apexcharts';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Settings } from 'react-feather';

const OPTIONS = ({ labelColor, dangerLight, strokeColor, primary }) => ({
	chart: {
		toolbar: {
			show: false
		},
		animations: {
			enabled: false
		}
	},
	stroke: {
		curve: 'smooth',
		dashArray: [0, 8],
		width: [4, 2]
	},
	grid: {
		borderColor: labelColor
	},
	legend: {
		show: false
	},
	colors: [dangerLight, strokeColor],

	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			inverseColors: false,
			gradientToColors: [primary, strokeColor],
			shadeIntensity: 1,
			type: 'horizontal',
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100, 100, 100]
		}
	},
	markers: {
		size: 0,
		hover: {
			size: 5
		}
	},
	xaxis: {
		labels: {
			style: {
				colors: strokeColor
			}
		},
		axisTicks: {
			show: false
		},
		categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
		axisBorder: {
			show: false
		},
		tickPlacement: 'on'
	},
	yaxis: {
		tickAmount: 5,
		labels: {
			style: {
				color: strokeColor
			},
			formatter: val => {
				return val > 999 ? `${(val / 1000).toFixed(1)}k` : val;
			}
		}
	},
	tooltip: {
		theme: 'dark',
		x: { show: false }
	}
});

const SERIES = [
	{
		name: '本月份',
		data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
	},
	{
		name: '上個月',
		data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.background.paper,
		flex: 2,
		margin: '2rem',
		borderRadius: '.8rem',
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

function WidgetStockChart(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className={clsx(classes.root, 'rounded-8 mx-16 mb-24')}>
			<FuseAnimate delay={100}>
				<div className="container relative px-24 pt-20 sm:pt-16 flex flex-row justify-between items-center">
					<Typography className="h1 font-medium" color="textPrimary">
						我的利潤
					</Typography>

					<div className="flex justify-between items-center">
						<div className="flex items-center mr-12">
							{smUp && (
								<Button className="py-8 px-12 rounded-8" size="small" disabled>
									2018
								</Button>
							)}
							<Button className="py-8 px-12 rounded-8" size="small" disabled>
								2019
							</Button>
							<Button className="py-8 px-12 rounded-8" size="small">
								2020
							</Button>
						</div>
						<Settings size={20} className="cursor-pointer mx-0 sm:ml-12 sm:mr-8" />
					</div>
				</div>
			</FuseAnimate>

			<FuseAnimate delay={100}>
				<div className="px-20">
					<div className="flex justify-start py-12 sm:py-16">
						<div className="flex flex-col justify-center items-start px-8 pr-12 mr-16">
							<Typography className="mb-8 font-medium text-16">總金額</Typography>
							<Typography className="font-400 flex justify-center items-start">
								<sup className="text-20 font-medium mr-8">$</sup>
								<span className="text-28 text-teal">86,589</span>
							</Typography>
						</div>
						<div className="flex flex-col justify-center items-start px-8 pr-12 mr-16">
							<Typography className="mb-8 font-medium text-16">淨利</Typography>
							<Typography className="font-400 flex justify-center items-start">
								<sup className="text-20 font-medium mr-8">$</sup>
								<span className="text-28">73,683</span>
							</Typography>
						</div>
						{smUp && (
							<div className="flex flex-col justify-center items-start px-8 pr-12 mr-16">
								<Typography className="mb-8 font-medium text-16">返傭</Typography>
								<Typography className="font-400 flex justify-center items-start">
									<sup className="text-20 font-medium mr-8">$</sup>
									<span className="text-28">43,683</span>
								</Typography>
							</div>
						)}
						{smUp && (
							<div className="flex flex-col justify-center items-start px-8 pr-12 mr-16">
								<Typography className="mb-8 font-medium text-16">獎金</Typography>
								<Typography className="font-400 flex justify-center items-start">
									<sup className="text-20 font-medium mr-8">$</sup>
									<span className="text-28">20,683</span>
								</Typography>
							</div>
						)}
					</div>
					<Chart
						className="-ml-16 -mr-12 sm:mx-0"
						options={OPTIONS({
							labelColor: '#e7eef7',
							dangerLight: '#f29292',
							strokeColor: '#b9c3cd',
							primary: '#7367F0'
						})}
						series={SERIES}
						type="line"
						height={260}
					/>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default React.memo(WidgetStockChart);
