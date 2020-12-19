import React from 'react';
import Chart from 'react-apexcharts';
import { Settings } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import moment from 'moment';

const DATA = {
	columns: [
		{
			id: 'transaction_type',
			title: '交易種類'
		},
		{
			id: 'transaction_amount',
			title: '交易量'
		},
		{
			id: 'buying_price',
			title: '買入價 ($)'
		},
		{
			id: 'buying_timestamp',
			title: '買入時間'
		},
		{
			id: 'selling_price',
			title: '賣出價 ($)'
		},
		{
			id: 'selling_timestamp',
			title: '賣出時間'
		},
		{
			id: 'profit_perc',
			title: '獲利量 (%)'
		}
	],
	rows: [
		{
			id: 1,
			cells: [
				{
					id: 'transaction_type',
					value: 'Wireframing',
					classes: 'bg-blue text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$14,880.00',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '$14,000.00',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '%94.08',
					classes: 'text-green',
					icon: 'trending_up'
				},
				{
					id: 'selling_price',
					value: '$880.00',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '%5.92',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '%5.92',
					classes: 'text-blue',
					icon: 'trending_flat'
				}
			]
		},
		{
			id: 2,
			cells: [
				{
					id: 'transaction_type',
					value: 'Design',
					classes: 'bg-green text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$21,080.00',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '$17,240.34',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '%81.78',
					classes: 'text-green',
					icon: 'trending_up'
				},
				{
					id: 'selling_price',
					value: '$3,839.66',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '%18.22',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '%5.92',
					classes: 'text-blue',
					icon: 'trending_flat'
				}
			]
		},
		{
			id: 3,
			cells: [
				{
					id: 'transaction_type',
					value: 'Coding',
					classes: 'bg-red text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$34,720.00',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '$3,518.00',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '%10.13',
					classes: 'text-red',
					icon: 'trending_down'
				},
				{
					id: 'selling_price',
					value: '$31,202.00',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '%89.87',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '%5.92',
					classes: 'text-blue',
					icon: 'trending_flat'
				}
			]
		},
		{
			id: 4,
			cells: [
				{
					id: 'transaction_type',
					value: 'Marketing',
					classes: 'bg-pink text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$34,720.00',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '$0.00',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '%0.00',
					classes: 'text-blue',
					icon: 'trending_flat'
				},
				{
					id: 'selling_price',
					value: '$34,720.00',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '%100.00',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '%5.92',
					classes: 'text-blue',
					icon: 'trending_flat'
				}
			]
		},
		{
			id: 5,
			cells: [
				{
					id: 'transaction_type',
					value: 'Extra',
					classes: 'bg-orange text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$18,600.00',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '$0.00',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '%0.00',
					classes: 'text-blue',
					icon: 'trending_flat'
				},
				{
					id: 'selling_price',
					value: '$34,720.00',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '%100.00',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '%5.92',
					classes: 'text-blue',
					icon: 'trending_flat'
				}
			]
		}
	]
};

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.background.paper,
		flex: 2,
		borderRadius: '.8rem',
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

function WidgetLoanLeaderboard(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className={clsx(classes.root, 'rounded-8 mx-24 mt-16 mb-24')}>
			<FuseAnimate delay={100}>
				<Paper className="w-full rounded-8 shadow-1">
					<div className="table-responsive">
						<Table className="w-full min-w-full">
							<TableHead>
								<TableRow>
									{DATA.columns.map(column => (
										<TableCell key={column.id} className="whitespace-no-wrap">
											{column.title}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{DATA.rows.map(row => (
									<TableRow key={row.id}>
										{row.cells.map(cell => {
											switch (cell.id) {
												case 'transaction_type': {
													return (
														<TableCell key={cell.id} component="th" scope="row">
															<Typography
																className={clsx(
																	cell.classes,
																	'inline text-11 font-500 px-8 py-4 rounded-4'
																)}
															>
																{cell.value}
															</Typography>
														</TableCell>
													);
												}
												case 'profit_perc': {
													return (
														<TableCell key={cell.id} component="th" scope="row">
															<Typography
																className={clsx(cell.classes, 'flex items-center')}
															>
																{cell.value}
																<Icon className="text-14 mx-4">{cell.icon}</Icon>
															</Typography>
														</TableCell>
													);
												}
												default: {
													return (
														<TableCell key={cell.id} component="th" scope="row">
															<Typography className={cell.classes}>
																{cell.value}
															</Typography>
														</TableCell>
													);
												}
											}
										})}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</Paper>
			</FuseAnimate>
		</div>
	);
}

export default React.memo(WidgetLoanLeaderboard);
