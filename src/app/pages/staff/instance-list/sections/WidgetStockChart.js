import React from 'react';
import Chart from 'react-apexcharts';
import { Settings } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

import { OPTIONS, SERIES } from './source';

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
		<div className={clsx(classes.root, 'rounded-8 mx-24 mb-24')}>
			<FuseAnimate delay={100}>
				<div className="container relative px-24 pt-20 sm:pt-16 flex flex-row justify-between items-center">
					<Typography className="h1 font-medium" color="textPrimary">
						市場歷史
					</Typography>

					<div className="flex justify-between items-center">
						<div className="flex items-center mr-12">
							{smUp && (
								<Button className="py-8 px-12 rounded-8" size="small" disabled>
									XRP
								</Button>
							)}
							<Button className="py-8 px-12 rounded-8" size="small" disabled>
								ETH
							</Button>
							<Button className="py-8 px-12 rounded-8" size="small">
								BTC
							</Button>
						</div>
						<Settings size={20} className="cursor-pointer mx-0 sm:ml-12 sm:mr-8" />
					</div>
				</div>
			</FuseAnimate>

			<FuseAnimate delay={100}>
				<div className="px-20">
					<Chart
						className="-ml-16 -mr-12 sm:mx-0"
						options={OPTIONS({
							buyLabelColor: theme.palette.orange.main,
							sellLabelColor: theme.palette.green.main,
							dangerLight: '#f29292',
							strokeColor: '#b9c3cd',
							upward: theme.palette.danger.main,
							downward: theme.palette.green.main,
							primary: '#7367F0'
						})}
						series={SERIES}
						type="candlestick"
						height={260}
					/>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default React.memo(WidgetStockChart);
