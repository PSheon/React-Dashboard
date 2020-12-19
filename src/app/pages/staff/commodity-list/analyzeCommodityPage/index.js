import React from 'react';
import { useParams } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import WidgetBasicCard from 'app/fuse-layouts/shared-components/BasicCard';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import WidgetCommodityInfo from './widgets/WidgetCommodityInfo';
import WidgetCommodityInsight from './widgets/WidgetCommodityInsight';
// import WidgetCommodityPriceHistory from './widgets/WidgetCommodityPriceHistory';
import WidgetCommodityInvestorList from './widgets/WidgetCommodityInvestorList';
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

function StaffAnalyzeCommodityPage() {
	const { commodityId } = useParams();

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle={commodityId}
					breadCrumbs={[
						{ to: '/staff/commodity-list', title: '商品管理' },
						{ title: `分析 ${commodityId}`, isActive: true }
					]}
				/>
			</FuseAnimate>

			<WidgetCommodityInfo commodityId={commodityId} />

			{/* <WidgetCommodityPriceHistory /> */}
			<FuseAnimateGroup
				enter={{
					animation: 'transition.expandIn'
				}}
				className="flex flex-col sm:flex sm:flex-row sm:px-8"
			>
				<div className="w-full sm:w-1/3 p-16">
					<WidgetBasicCard title="關注者" content="$0" iconType="activity" iconColorSchema="primary" />
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<WidgetBasicCard title="投資者" content="$0" iconType="shield" iconColorSchema="secondary" />
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<WidgetBasicCard title="總金額" content="$0" iconType="target" iconColorSchema="success" />
				</div>
			</FuseAnimateGroup>

			<div className="flex flex-col md:flex-row sm:px-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<div className="widget w-full p-16">
						<WidgetCommodityInvestorList />
					</div>
				</div>

				<div className="flex flex-col w-full md:w-320 lg:w-400">
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

export default StaffAnalyzeCommodityPage;
