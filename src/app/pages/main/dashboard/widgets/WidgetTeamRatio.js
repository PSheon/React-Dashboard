// TODO Dev this
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { HelpCircle, Monitor, ArrowUp, Smartphone, Tablet, ArrowDown, ChevronDown } from 'react-feather';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const OPTIONS = ({ primary, warning, danger, primaryLight, warningLight, dangerLight }) => ({
	colors: [primary, warning, danger],
	fill: {
		type: 'gradient',
		gradient: {
			// enabled: true,
			shade: 'dark',
			type: 'vertical',
			shadeIntensity: 0.5,
			gradientToColors: [primaryLight, warningLight, dangerLight],
			inverseColors: false,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100]
		}
	},
	stroke: {
		lineCap: 'round'
	},
	plotOptions: {
		radialBar: {
			size: 200,
			hollow: {
				size: '20%'
			},
			track: {
				strokeWidth: '100%',
				margin: 15
			},
			dataLabels: {
				name: {
					fontSize: '18px'
				},
				value: {
					fontSize: '16px'
				},
				total: {
					show: true,
					label: '總共',

					formatter: () => {
						return 42459;
					}
				}
			}
		}
	},
	labels: ['Finished', 'Pending', 'Rejected']
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

function WidgetTeamRatio(props) {
	const classes = useStyles();
	const theme = useTheme(props);

	// useInterval(() => {
	// 	setUsageRatio(Math.floor(Math.random() * 99) + 1);
	// }, 1500);

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="h1 font-medium">團隊階級佔比</Typography>
				<Tooltip
					arrow
					title="團隊階級佔比"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<HelpCircle size={20} className="cursor-pointer text-muted" />
				</Tooltip>
			</div>

			<div className="relative px-16 pt-16">
				<Chart
					options={OPTIONS({
						primary: theme.palette.primary.main,
						warning: theme.palette.warning.main,
						danger: theme.palette.danger.main,
						primaryLight: theme.palette.primary.light,
						warningLight: theme.palette.warning.light,
						dangerLight: theme.palette.danger.light
					})}
					series={[70, 52, 26]}
					type="radialBar"
					height={260}
				/>
			</div>

			<List className={classes.root}>
				<ListItem className="flex justify-between px-24">
					<div className="flex items-center">
						<Monitor size="18" className="text-primary" />
						<span className="font-600 ml-12 mr-8">Desktop</span>
						<span className="items-center"> - 58.6%</span>
					</div>
					<div className="flex items-center">
						<span className="justify-center">2%</span>
						<ArrowUp size="16" className="ml-4 text-success" />
					</div>
				</ListItem>
				<ListItem className="flex justify-between px-24">
					<div className="flex items-center">
						<Monitor size="18" className="text-secondary" />
						<span className="font-600 ml-12 mr-8">Mobile</span>
						<span className="items-center"> - 58.6%</span>
					</div>
					<div className="flex items-center">
						<span className="justify-center">2%</span>
						<ArrowUp size="16" className="ml-4 text-success" />
					</div>
				</ListItem>
				<ListItem className="flex justify-between px-24">
					<div className="flex items-center">
						<Monitor size="18" className="text-danger" />
						<span className="font-600 ml-12 mr-8">Mobile</span>
						<span className="items-center"> - 58.6%</span>
					</div>
					<div className="flex items-center">
						<span className="justify-center">2%</span>
						<ArrowUp size="16" className="ml-4 text-success" />
					</div>
				</ListItem>
			</List>
		</Card>
	);
}

export default React.memo(WidgetTeamRatio);
