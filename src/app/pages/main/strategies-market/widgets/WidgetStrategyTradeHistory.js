import React from 'react';
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

const DATA = {
	columns: [
		{
			id: 'transaction_type',
			title: '交易種類'
		},
		{
			id: 'transaction_amount',
			title: '交易量/保險倉'
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
					value: '買入',
					classes: 'bg-orange-900 text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$120,000 / 60,000',
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
					value: '2020-08-17',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_price',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '-%',
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
					value: '賣出',
					classes: 'bg-green text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$120,000 / 60,000',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_price',
					value: '$11921',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '2020-08-11',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '7.32%',
					classes: 'text-green',
					icon: 'trending_up'
				}
			]
		},
		{
			id: 3,
			cells: [
				{
					id: 'transaction_type',
					value: '買入',
					classes: 'bg-orange-900 text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$120,000 / 60,000',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '$11086',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '2020-07-30',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_price',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '-%',
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
					value: '賣出',
					classes: 'bg-green text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$120,000 / 60,000',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '-',
					classes: 'text-blue',
					icon: 'trending_flat'
				},
				{
					id: 'selling_price',
					value: '$9182',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '2020-07-14',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '-0.74%',
					classes: 'text-red',
					icon: 'trending_down'
				}
			]
		},
		{
			id: 5,
			cells: [
				{
					id: 'transaction_type',
					value: '買入',
					classes: 'bg-orange-900 text-white',
					icon: ''
				},
				{
					id: 'transaction_amount',
					value: '$120,000 / 60,000',
					classes: 'font-bold',
					icon: ''
				},
				{
					id: 'buying_price',
					value: '$9242',
					classes: '',
					icon: ''
				},
				{
					id: 'buying_timestamp',
					value: '2020-07-10',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_price',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'selling_timestamp',
					value: '-',
					classes: '',
					icon: ''
				},
				{
					id: 'profit_perc',
					value: '-%',
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

function WidgetStrategyTradeHistory(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className={clsx(classes.root, 'rounded-8 mx-16 sm:mx-24 mb-24')}>
			<FuseAnimate delay={100}>
				<Paper className="w-full rounded-8 shadow-1">
					<div className="flex items-center justify-between px-24 h-64 border-b-1">
						<Typography className="h1 font-medium" color="textPrimary">
							交易細節
						</Typography>
					</div>
					<div className="table-responsive">
						<Table className="w-full min-w-full">
							<TableHead>
								<TableRow>
									{DATA.columns.map(column => (
										<TableCell key={column.id} className="whitespace-no-wrap border-lightGray">
											{column.title}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{DATA.rows.map(row => (
									<TableRow
										key={row.id}
										className="cursor-pointer rounded-8 transition ease-in duration-150 transform hover:-translate-y-2"
									>
										{row.cells.map(cell => {
											switch (cell.id) {
												case 'transaction_type': {
													return (
														<TableCell
															key={cell.id}
															component="th"
															scope="row"
															className="border-none"
														>
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
														<TableCell
															key={cell.id}
															component="th"
															scope="row"
															className="border-none"
														>
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
														<TableCell
															key={cell.id}
															component="th"
															scope="row"
															className="border-none"
														>
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

export default React.memo(WidgetStrategyTradeHistory);
