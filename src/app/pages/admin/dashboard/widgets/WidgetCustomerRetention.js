import React from 'react';
import Chart from 'react-apexcharts';
import { ArrowRight } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const OPTIONS = ({ labelColor, dangerLight, strokeColor, primary }) => ({
	chart: {
		stacked: true,
		toolbar: { show: false }
	},
	plotOptions: {
		bar: {
			columnWidth: '10%'
		}
	},
	colors: [primary, dangerLight],
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
		name: '新客戶',
		data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
	},
	{
		name: '流失數',
		data: [-144, -155, -141, -167, -122, -143, -158, -107, -126, -131, -140, -137]
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

const WidgetCustomerRetention = () => {
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
				<Typography className="h1 text-semibold">客戶流失率</Typography>

				<div className="flex justify-center items-center">
					{/* {smUp && (
						<Button className="py-8 px-12 rounded-8" size="small">
							更新方案
						</Button>
					)}
					<Button className="py-8 px-12 rounded-8" size="small">
						新加入戶
					</Button>
					<Button className="py-8 px-12 rounded-8" size="small">
						更新方案
					</Button> */}
					<IconButton aria-label="開啟列表" className="py-12 sm:ml-16 h-36 p-8" color="inherit" size="small">
						<ArrowRight size={20} className="cursor-pointer" />
					</IconButton>
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
						primary: theme.palette.primary.main,
						warning: theme.palette.warning.main,
						danger: theme.palette.danger.main,
						primaryLight: theme.palette.primary.light,
						warningLight: theme.palette.warning.light,
						dangerLight: theme.palette.danger.light
					})}
					series={SERIES}
					type="bar"
					height={260}
				/>
			</FuseAnimate>
		</div>
	);
};

export default WidgetCustomerRetention;
