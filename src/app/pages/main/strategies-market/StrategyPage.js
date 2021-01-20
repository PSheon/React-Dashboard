import React from 'react';
import { useDispatch } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import clsx from 'clsx';

import WidgetStrategyDescription from './widgets/WidgetStrategyDescription';
import WidgetStrategyInfo from './widgets/WidgetStrategyInfo';
import WidgetStrategyMetrics from './widgets/WidgetStrategyMetrics';
import WidgetStrategyMonthlyReturn from './widgets/WidgetStrategyMonthlyReturn';
import WidgetStrategyTradeChart from './widgets/WidgetStrategyTradeChart';
import WidgetStrategyTradeHistory from './widgets/WidgetStrategyTradeHistory';

const useStyles = makeStyles(theme => ({
	headerWrapper: {
		cursor: 'pointer',
		background: `url(${BACKGROUND})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

function StrategyPage(props) {
	const dispatch = useDispatch();

	const classes = useStyles(props);

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle="策略細節"
					breadCrumbs={[
						{ to: '/strategies-market', title: '策略市場' },
						{ title: '策略細節', isActive: true }
					]}
				/>
			</FuseAnimate>

			<WidgetStrategyInfo />

			<div className="flex flex-col md:flex-row sm:p-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<WidgetStrategyMetrics />

					<WidgetStrategyMonthlyReturn />
				</div>

				<div className="flex flex-wrap w-full md:w-320 lg:w-400">
					<WidgetStrategyDescription />
				</div>
			</div>

			<WidgetStrategyTradeChart />

			<WidgetStrategyTradeHistory />
		</div>
	);
}

export default StrategyPage;
