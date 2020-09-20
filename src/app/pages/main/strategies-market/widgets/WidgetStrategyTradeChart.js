import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Settings } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
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
	},
	chartRoot: {
		width: 'calc(100% + 2.4rem)'
	}
}));

function WidgetStrategyTradeChart(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const [activateBtn, setActivateBtn] = useState('all');

	return (
		<div className={clsx(classes.root, 'rounded-8 mx-16 sm:mx-24 mt-0 mb-24')}>
			<FuseAnimate delay={100}>
				<div className="container relative px-24 pt-20 sm:pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center">
					<Typography className="h1 font-medium" color="textPrimary">
						交易歷程圖
					</Typography>
					<div className="flex self-end sm:self-auto justify-between items-center">
						<div className="flex items-center mr-12">
							<Button
								className={clsx(activateBtn === 'long' && 'bg-primary', 'py-8 px-12 rounded-8')}
								size="small"
								onClick={() => setActivateBtn('long')}
							>
								做多
							</Button>
							<Button
								className={clsx(activateBtn === 'short' && 'bg-primary', 'py-8 px-12 rounded-8')}
								size="small"
								onClick={() => setActivateBtn('short')}
							>
								賣空
							</Button>
							<Button
								className={clsx(activateBtn === 'all' && 'bg-primary', 'py-8 px-12 rounded-8')}
								size="small"
								onClick={() => setActivateBtn('all')}
							>
								所有
							</Button>
						</div>
						<Settings size={20} className="cursor-pointer mx-0 sm:ml-12 sm:mr-8" />
					</div>
				</div>
			</FuseAnimate>

			<FuseAnimate delay={100}>
				<div className="px-20">
					<Chart
						className={clsx(classes.chartRoot, '-ml-16 -mr-8')}
						options={OPTIONS({
							buyLabelColor: theme.palette.orange.main,
							sellLabelColor: theme.palette.green.main,
							upwardColor: theme.palette.danger.main,
							downwardColor: theme.palette.green.main,
							winColor: fade(theme.palette.green.light, 0.4),
							loseColor: fade(theme.palette.warning.light, 0.4)
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

export default React.memo(WidgetStrategyTradeChart);
