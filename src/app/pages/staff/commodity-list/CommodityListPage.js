import React from 'react';
import { useDispatch } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import CommodityDialog from './widgets/CommodityDialog';
import WidgetCommodityAddCard from './widgets/WidgetCommodityAddCard';
import WidgetCommodityBasicCard from './widgets/WidgetCommodityBasicCard';
import WidgetCommodityCard from './widgets/WidgetCommodityCard';
import WidgetCommodityFeatureCard from './widgets/WidgetCommodityFeatureCard';

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

function CommodityListPage(props) {
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
				<Breadcrumbs
					breadCrumbTitle="交易商品"
					breadCrumbs={[{ title: '管理員' }, { title: '交易商品', isActive: true }]}
				/>
			</FuseAnimate>

			<FuseAnimateGroup
				enter={{
					animation: 'transition.expandIn'
				}}
				className="flex flex-col sm:flex sm:flex-row sm:p-8"
			>
				<div className="widget flex w-full sm:w-1/4 p-16">
					<WidgetCommodityBasicCard
						title="借貸總資金"
						content="0.14M"
						iconType="dollar-sign"
						iconColorSchema="primary"
					/>
				</div>
				<div className="widget flex w-full sm:w-1/4 p-16">
					<WidgetCommodityBasicCard
						title="運行機器人"
						content="15"
						iconType="layers"
						iconColorSchema="secondary"
					/>
				</div>
				<div className="widget w-full sm:w-1/4 p-16">
					<WidgetCommodityBasicCard
						title="活躍用戶數"
						content="21"
						iconType="users"
						iconColorSchema="success"
					/>
				</div>
				<div className="widget w-full sm:w-1/4 p-16">
					<WidgetCommodityBasicCard
						title="未處理訂單"
						content="0"
						iconType="alert-octagon"
						iconColorSchema="error"
					/>
				</div>
			</FuseAnimateGroup>

			<FuseAnimate delay={600}>
				<Typography className="px-24 pb-8 text-18 sm:text-20 font-medium">商品列表</Typography>
			</FuseAnimate>

			<FuseAnimateGroup
				enter={{
					animation: 'transition.expandIn'
				}}
				className="flex flex-wrap justify-between mx-8 mb-8 sm:mb-0"
			>
				<div className="widget flex min-w-240 max-w-360 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-8 sm:p-16">
					<WidgetCommodityAddCard />
				</div>
				<div className="widget flex min-w-240 max-w-360 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-8 sm:p-16">
					<WidgetCommodityCard
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
				<div className="widget flex min-w-240 max-w-360 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-8 sm:p-16">
					<WidgetCommodityCard
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
				<div className="widget flex min-w-240 max-w-360 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-8 sm:p-16">
					<WidgetCommodityCard
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
				<div className="widget flex min-w-240 max-w-360 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-8 sm:p-16">
					<WidgetCommodityCard
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
				<div className="widget flex min-w-240 max-w-360 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-8 sm:p-16">
					<WidgetCommodityCard
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
				<div className="widget flex min-w-240 max-w-360 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-8 sm:p-16">
					<WidgetCommodityCard
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
				{/* <div className="widget flex min-w-240 max-w-360 sm:min-w-340 p-8 sm:p-16">
					<WidgetCommodityCard
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
				<div className="widget flex min-w-240 max-w-360 sm:min-w-340 p-8 sm:p-16">
					<WidgetCommodityCard
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
				<div className="widget flex min-w-240 max-w-360 sm:min-w-340 p-8 sm:p-16">
					<WidgetCommodityCard
						title="Doge"
						abbreviation="DOGE"
						price={200}
						change={-0.03}
						iconColorSchema="info"
						chartId="dogecoin-history-price-chart"
						chartColors="info"
						tooltipTitle="價格"
					/>
				</div> */}
			</FuseAnimateGroup>

			<CommodityDialog />
		</div>
	);
}

export default CommodityListPage;
