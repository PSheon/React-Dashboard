import React from 'react';
import { useDispatch } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import WidgetStrategyCard from './sections/WidgetStrategyCard';
import WidgetStrategyFeatureCard from './sections/WidgetStrategyFeatureCard';

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
	},
	board: {
		cursor: 'pointer',
		boxShadow: theme.shadows[0],
		borderRadius: '.8rem',
		color: theme.palette.getContrastText(theme.palette.primary.dark)
	}
}));

function StrategiesMarketPage(props) {
	const dispatch = useDispatch();

	const classes = useStyles(props);

	// useEffect(() => {
	// 	dispatch(Actions.getBoards());
	// 	return () => {
	// 		dispatch(Actions.resetBoards());
	// 	};
	// }, [dispatch]);

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="策略市場" breadCrumbs={[{ title: '策略市場', isActive: true }]} />
			</FuseAnimate>

			<FuseAnimateGroup
				enter={{
					animation: 'transition.expandIn'
				}}
				className="flex flex-row flex-no-wrap px-8 py-16 sm:pb-0 overflow-x-scroll"
			>
				<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
					<WidgetStrategyCard
						title="Bitcoin"
						abbreviation="BTC"
						price={12012.17}
						change={-0.03}
						iconColorSchema="warning"
						chartId="bitcoin-history-price-chart"
						chartColors="warning"
						tooltipTitle="價格"
					/>
				</div>
				<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
					<WidgetStrategyCard
						title="Etherum"
						abbreviation="ETH"
						price={400}
						change={-0.03}
						iconColorSchema="purple"
						chartId="etherum-history-price-chart"
						chartColors="purple"
						tooltipTitle="價格"
					/>
				</div>
				<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
					<WidgetStrategyCard
						title="Litecoin"
						abbreviation="LTC"
						price={200}
						change={-0.03}
						iconColorSchema="success"
						chartId="litecoin-history-price-chart"
						chartColors="success"
						tooltipTitle="價格"
					/>
				</div>
				<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
					<WidgetStrategyCard
						title="Litecoin"
						abbreviation="LTC"
						price={200}
						change={-0.03}
						iconColorSchema="success"
						chartId="litecoin-history-price-chart"
						chartColors="success"
						tooltipTitle="價格"
					/>
				</div>
			</FuseAnimateGroup>

			<div className="flex flex-col md:flex-row sm:pt-12 container">
				<div className="flex flex-1 flex-col min-w-0 pb-16 sm:pb-0">
					<FuseAnimate delay={600}>
						<Typography className="px-24 pb-8 text-18 sm:text-20 font-medium">低風險分數</Typography>
					</FuseAnimate>

					<FuseAnimateGroup
						enter={{
							animation: 'transition.expandIn'
						}}
						className="flex flex-row flex-no-wrap px-8 overflow-x-scroll"
					>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Bitcoin"
								abbreviation="BTC"
								price={12012.17}
								change={-0.03}
								iconColorSchema="warning"
								chartId="bitcoin-history-price-chart"
								chartColors="warning"
								tooltipTitle="價格"
							/>
						</div>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Etherum"
								abbreviation="ETH"
								price={400}
								change={-0.03}
								iconColorSchema="purple"
								chartId="etherum-history-price-chart"
								chartColors="purple"
								tooltipTitle="價格"
							/>
						</div>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Litecoin"
								abbreviation="LTC"
								price={200}
								change={-0.03}
								iconColorSchema="success"
								chartId="litecoin-history-price-chart"
								chartColors="success"
								tooltipTitle="價格"
							/>
						</div>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Litecoin"
								abbreviation="LTC"
								price={200}
								change={-0.03}
								iconColorSchema="success"
								chartId="litecoin-history-price-chart"
								chartColors="success"
								tooltipTitle="價格"
							/>
						</div>
					</FuseAnimateGroup>

					<FuseAnimate delay={600}>
						<Typography className="px-24 pb-8 pt-12 text-18 sm:text-20 font-medium">
							中等風險分數
						</Typography>
					</FuseAnimate>

					<FuseAnimateGroup
						enter={{
							animation: 'transition.expandIn'
						}}
						className="flex flex-row flex-no-wrap px-8 overflow-x-scroll"
					>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Bitcoin"
								abbreviation="BTC"
								price={12012.17}
								change={-0.03}
								iconColorSchema="warning"
								chartId="bitcoin-history-price-chart"
								chartColors="warning"
								tooltipTitle="價格"
							/>
						</div>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Etherum"
								abbreviation="ETH"
								price={400}
								change={-0.03}
								iconColorSchema="info"
								chartId="etherum-history-price-chart"
								chartColors="info"
								tooltipTitle="價格"
							/>
						</div>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Litecoin"
								abbreviation="LTC"
								price={200}
								change={-0.03}
								iconColorSchema="success"
								chartId="litecoin-history-price-chart"
								chartColors="success"
								tooltipTitle="價格"
							/>
						</div>
						<div className="widget flex min-w-256 sm:min-w-320 p-8 sm:p-16">
							<WidgetStrategyCard
								title="Litecoin"
								abbreviation="LTC"
								price={200}
								change={-0.03}
								iconColorSchema="success"
								chartId="litecoin-history-price-chart"
								chartColors="success"
								tooltipTitle="價格"
							/>
						</div>
					</FuseAnimateGroup>
				</div>

				<div className="flex flex-wrap w-full md:w-320 lg:w-400">
					<div className="w-full sm:w-1/2 md:w-full">
						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">最多跟單</Typography>
						</FuseAnimate>

						<div className="widget w-full p-16">
							<WidgetStrategyFeatureCard
								title="Bitcoin"
								abbreviation="BTC"
								price={12012.17}
								change={-0.03}
								iconColorSchema="warning"
								chartId="best-history-price-chart"
								chartColors="warning"
								tooltipTitle="價格"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StrategiesMarketPage;
