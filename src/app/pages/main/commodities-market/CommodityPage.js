import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import clsx from 'clsx';

import WidgetCommodityInfo from './widgets/WidgetCommodityInfo';
import WidgetCommodityInsight from './widgets/WidgetCommodityInsight';
import WidgetCommodityPriceHistory from './widgets/WidgetCommodityPriceHistory';
import WidgetCommoditySocialInfo from './widgets/WidgetCommoditySocialInfo';
import WidgetCommodityTrader from './widgets/WidgetCommodityTrader';

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

function CommodityPage() {
	const { commodityId } = useParams();

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle={commodityId}
					breadCrumbs={[
						{ to: '/commodities-market', title: '貨幣市場' },
						{ title: commodityId, isActive: true }
					]}
				/>
			</FuseAnimate>

			<WidgetCommodityInfo />

			<WidgetCommodityPriceHistory />

			<div className="flex flex-col md:flex-row sm:p-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<div className="widget w-full p-16">
						<WidgetCommodityInsight />
					</div>
				</div>

				<div className="flex flex-wrap w-full md:w-320 lg:w-400">
					<div className="widget w-full p-16">
						<WidgetCommoditySocialInfo />
					</div>

					<div className="widget w-full p-16">
						<WidgetCommodityTrader />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommodityPage;
