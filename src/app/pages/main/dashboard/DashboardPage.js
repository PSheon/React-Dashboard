import React from 'react';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import withReducer from 'app/store/withReducer';
import WidgetBasicCard from 'app/fuse-layouts/shared-components/BasicCard';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import WidgetAccountRevenue from './widgets/WidgetAccountRevenue';
import WidgetTeamRatio from './widgets/WidgetTeamRatio';
import WidgetNotifHistory from './widgets/WidgetNotifHistory';

import reducer from './store/reducers';

function DashboardPage() {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn">
				<Breadcrumbs breadCrumbTitle="首頁" breadCrumbActive="首頁" />
			</FuseAnimate>

			<div className="flex flex-col md:flex-row sm:p-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<WidgetAccountRevenue />
				</div>

				<div className="flex flex-wrap w-full md:w-320 lg:w-400">
					<div className="w-full sm:w-1/2 md:w-full">
						<Hidden xsUp>
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-medium">統計表</Typography>
							</FuseAnimate>
						</Hidden>

						<div className="px-16 pt-20 pb-24">
							<WidgetTeamRatio />
						</div>
					</div>

					<Hidden only={['xs', 'md', 'lg', 'xl']}>
						<div className="w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={300}>
								<div className="px-16 pt-20 pb-24">
									<WidgetNotifHistory />
								</div>
							</FuseAnimate>
						</div>
					</Hidden>
				</div>
			</div>

			<div className="flex flex-col md:flex-row sm:p-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<FuseAnimate delay={600}>
						<Typography className="px-16 pb-8 text-18 sm:text-20 fsont-medium">資金狀態</Typography>
					</FuseAnimate>
					<FuseAnimateGroup
						enter={{
							animation: 'transition.expandIn'
						}}
						className="flex flex-col sm:flex sm:flex-row mb-16 sm:mb-0"
					>
						<div className="w-full sm:w-1/3 p-16">
							<WidgetBasicCard
								title="現金-錢包"
								content="$0"
								iconType="dollar-sign"
								iconColorSchema="primary"
							/>
						</div>
						<div className="w-full sm:w-1/3 p-16">
							<WidgetBasicCard
								title="補償-錢包"
								content="$0"
								iconType="layers"
								iconColorSchema="secondary"
							/>
						</div>
						<div className="w-full sm:w-1/3 p-16">
							<WidgetBasicCard
								title="預購-錢包"
								content="$0"
								iconType="users"
								iconColorSchema="success"
							/>
						</div>
					</FuseAnimateGroup>

					<FuseAnimate delay={600}>
						<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">團隊狀態</Typography>
					</FuseAnimate>
					<FuseAnimateGroup
						enter={{
							animation: 'transition.expandIn'
						}}
						className="flex flex-col sm:flex sm:flex-row mb-16 sm:mb-0"
					>
						<div className="w-full sm:w-1/2 p-16">
							<WidgetBasicCard
								title="當月團隊總交易量"
								content="$0"
								iconType="dollar-sign"
								iconColorSchema="primary"
							/>
						</div>
						<div className="w-full sm:w-1/2 p-16">
							<WidgetBasicCard
								title="當月團隊保險總入金"
								content="$0"
								iconType="layers"
								iconColorSchema="secondary"
							/>
						</div>
					</FuseAnimateGroup>
				</div>

				<div className="flex flex-wrap w-full md:w-320 lg:w-400">
					<Hidden only={['sm']}>
						<div className="w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-medium">系統通知</Typography>
							</FuseAnimate>

							<FuseAnimate delay={600}>
								<div className="widget w-full p-16">
									<WidgetNotifHistory />
								</div>
							</FuseAnimate>
						</div>
					</Hidden>
				</div>
			</div>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(DashboardPage);
