import React from 'react';
import Chart from 'react-apexcharts';
import { Award, HelpCircle } from 'react-feather';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const OPTIONS = ({ white, danger, primary }) => ({
	chart: {},
	plotOptions: {
		radialBar: {
			size: 150,
			offsetY: 20,
			startAngle: -150,
			endAngle: 150,
			hollow: {
				size: '65%'
			},
			track: {
				background: white,
				strokeWidth: '100%'
			},
			dataLabels: {
				value: {
					offsetY: 30,
					color: '#99a2ac',
					fontSize: '2rem'
				}
			}
		}
	},
	colors: [danger],
	fill: {
		type: 'gradient',
		gradient: {
			// enabled: true,
			shade: 'dark',
			type: 'horizontal',
			shadeIntensity: 0.5,
			gradientToColors: [primary],
			inverseColors: true,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100]
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		dashArray: 8
	},
	labels: ['獲得獎勵']
});
const SERIES = [80];

const useStyles = makeStyles(theme => ({
	editButton: {
		background: theme.palette.primaryGradient
	}
}));

const ClaimCard = () => {
	const classes = useStyles();

	return (
		<Grow in>
			<div className="w-full p-24 mb-20 flex flex-col justify-center items-center bg-bgPaper rounded-8">
				{/* Title */}
				<div className="w-full flex justify-between items-start text-center">
					<Typography className="h2">獲得獎勵</Typography>

					<Tooltip
						arrow
						title="每 24 小時可以獲得一次推薦獎勵，根據 VIP 等級與推薦數量會有不同的獎勵加成"
						placement="top"
						classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
					>
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</Tooltip>
				</div>

				<Divider className="w-full mt-16 mb-24" />

				{/* Detail */}
				<div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center text-center sm:justify-around sm:items-start mb-12">
					<div className="w-full flex sm:w-2/5 flex-col justify-center items-center mt-24 sm:mt-0 pl-12 pr-24">
						<div className="sm:mt-12">
							<Typography className="text-32 font-semibold">3</Typography>
							<Typography className="h3" color="textSecondary">
								已推薦好友數
							</Typography>
						</div>

						<div className="mt-12 sm:mt-24">
							<Typography className="min-w-200 text-32 font-semibold flex justify-between items-center">
								3 <span className="text-20">x</span> 0.5 <span className="text-20">=</span> 1.5
							</Typography>
							<Typography className="h3" color="textSecondary">
								推薦獎勵數
							</Typography>
						</div>

						<div className="mt-28 sm:mt-36">
							<Button
								variant="contained"
								startIcon={<Award width={16} />}
								className={clsx(classes.editButton, 'rounded-8 font-medium text-14 text-white px-36')}
							>
								獲得獎勵
							</Button>
						</div>
					</div>

					<Chart
						options={OPTIONS({ white: '#fff', danger: '#EA5455', primary: '#7367F0' })}
						series={SERIES}
						type="radialBar"
						height={350}
						className="w-full sm:w-3/5 -mt-48"
					/>
				</div>

				<div className="w-full pt-24 flex justify-around items-center">
					<div className="flex flex-col items-center justify-center">
						<Typography className="text-16 font-300">我的點數</Typography>
						<Typography className="text-32 font-semibold" color="textPrimary">
							25
						</Typography>
					</div>

					<div className="flex flex-col items-center justify-center">
						<Typography className="text-16 font-300">Open Tickets</Typography>
						<Typography className="text-32 font-semibold" color="textPrimary">
							3M
						</Typography>
					</div>

					<div className="flex flex-col items-center justify-center">
						<Typography className="text-16 font-300">Response Time</Typography>
						<Typography className="text-32 font-semibold" color="textPrimary">
							3df
						</Typography>
					</div>
				</div>
			</div>
		</Grow>
	);
};

export default ClaimCard;
