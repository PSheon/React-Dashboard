import React from 'react';
import Chart from 'react-apexcharts';
import { HelpCircle } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const OPTIONS = ({ labelColor, dangerLight, strokeColor, success }) => ({
	chart: {
		stacked: true,
		toolbar: { show: false }
	},
	plotOptions: {
		bar: {
			columnWidth: '50%'
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
		show: true,
		position: 'top',
		horizontalAlign: 'left',
		offsetX: 0,
		fontSize: '14px',
		markers: {
			radius: 50,
			width: 10,
			height: 10
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
		tickAmount: 5,
		labels: {
			style: {
				color: strokeColor
			},
			formatter: val => `${val}%`
		}
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

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	chartRoot: {
		width: 'calc(100% + 3.2rem)',
		'& .apexcharts-canvas .apexcharts-legend': {
			left: '10px !important'
		}
	}
}));

const StrategyReturn = () => {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<div
			className={clsx(
				classes.root,
				'w-full px-24 pt-20 sm:pt-16 flex flex-col justify-center items-center bg-bgPaper rounded-8'
			)}
		>
			{/* Title */}
			<div className="w-full flex justify-between items-center text-center">
				<Typography className="h1 text-semibold">累計獲利</Typography>

				<div className="flex justify-center items-center">
					<Button className="py-8 px-12 rounded-8" size="small">
						2019
					</Button>
					<Button className="py-8 px-12 rounded-8" size="small">
						2020
					</Button>
					<Tooltip
						arrow
						title="每月平均獲利"
						placement="top"
						classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
					>
						<IconButton
							aria-label="開啟列表"
							className="py-12 sm:ml-16 h-36 p-8"
							color="inherit"
							size="small"
						>
							<HelpCircle size={20} className="cursor-pointer text-muted" />
						</IconButton>
					</Tooltip>
				</div>
			</div>

			<Divider className="w-full mt-16 mb-4" />

			{/* Retention */}
			<FuseAnimate delay={100}>
				<Chart
					className={clsx(classes.chartRoot, '-ml-24 -mr-8')}
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
			</FuseAnimate>
		</div>
	);
};

export default StrategyReturn;
