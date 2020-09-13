import React from 'react';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { Hidden } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import WidgetBasicCard from 'app/fuse-layouts/shared-components/BasicCard';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import WidgetStatisticsCard from 'app/fuse-layouts/shared-components/StatisticsCard';
import withReducer from 'app/store/withReducer';

import reducer from './store/reducers';
import WidgetCustomerMap from './widgets/WidgetCustomerMap';
import WidgetCustomerRetention from './widgets/WidgetCustomerRetention';
import WidgetFundingRatio from './widgets/WidgetFundingRatio';
import WidgetMemberStatistics from './widgets/WidgetMemberStatistics';
import WidgetOrderHistory from './widgets/WidgetOrderHistory';
import WidgetRevenue from './widgets/WidgetRevenue';

function DashboardPage() {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle="主控台"
					breadCrumbs={[{ title: '超級管理員' }, { title: '主控台', isActive: true }]}
				/>
			</FuseAnimate>

			<WidgetRevenue />

			<div className="flex flex-col md:flex-row sm:p-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<FuseAnimate delay={600}>
						<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">運行狀態</Typography>
					</FuseAnimate>
					<FuseAnimateGroup
						enter={{
							animation: 'transition.expandIn'
						}}
						className="flex flex-col sm:flex sm:flex-row"
					>
						<div className="widget flex w-full sm:w-1/4 p-16">
							<WidgetBasicCard
								title="借貸總資金"
								content="0.14M"
								iconType="dollar-sign"
								iconColorSchema="primary"
							/>
						</div>
						<div className="widget flex w-full sm:w-1/4 p-16">
							<WidgetBasicCard
								title="運行機器人"
								content="15"
								iconType="layers"
								iconColorSchema="secondary"
							/>
						</div>
						<div className="widget w-full sm:w-1/4 p-16">
							<WidgetBasicCard
								title="活躍用戶數"
								content="21"
								iconType="users"
								iconColorSchema="success"
							/>
						</div>
						<div className="widget w-full sm:w-1/4 p-16">
							<WidgetBasicCard
								title="未處理訂單"
								content="0"
								iconType="alert-octagon"
								iconColorSchema="error"
							/>
						</div>
					</FuseAnimateGroup>

					<FuseAnimate delay={600}>
						<Typography className="p-16 py-8 text-18 sm:text-20 sm:text-20 font-medium">
							系統健康度
						</Typography>
					</FuseAnimate>
					<FuseAnimateGroup
						enter={{
							animation: 'transition.expandIn'
						}}
						className="flex flex-col sm:flex sm:flex-row"
					>
						<div className="widget flex w-full sm:w-1/3 p-16">
							<WidgetStatisticsCard
								title="CPU 使用率"
								content="35%"
								change={-3}
								iconType="cpu"
								iconColorSchema="primary"
								chartId="cpu"
								chartColors="primary"
								tooltipTitle="使用率"
							/>
						</div>
						<div className="widget flex w-full sm:w-1/3 p-16">
							<WidgetStatisticsCard
								title="記憶體使用率"
								content="450Mb"
								change={32}
								iconType="memory"
								iconColorSchema="secondary"
								chartId="memory"
								chartColors="secondary"
								tooltipTitle="使用率"
							/>
						</div>
						<div className="widget w-full sm:w-1/3 p-16">
							<WidgetStatisticsCard
								title="網路使用率"
								content="20Kb"
								change={12}
								iconType="network"
								iconColorSchema="success"
								chartId="network"
								chartColors="success"
								tooltipTitle="使用率"
							/>
						</div>
					</FuseAnimateGroup>

					{/* <FuseAnimate delay={600}>
						<Typography className="p-16 py-8 text-18 sm:text-20 sm:text-20 font-medium">
							近期訂單
						</Typography>
					</FuseAnimate> */}

					<Hidden mdUp>
						<FuseAnimate delay={400}>
							<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">統計圖表</Typography>
						</FuseAnimate>
					</Hidden>

					<div className="widget w-full p-16 pb-20">
						<WidgetOrderHistory />
					</div>

					{/* <FuseAnimate delay={600}>
						<Typography className="p-16 py-8 text-18 sm:text-20 sm:text-20 font-medium">
							業務成長
						</Typography>
					</FuseAnimate> */}

					<div className="widget w-full p-16 pb-20">
						<WidgetCustomerRetention />
					</div>
				</div>

				<div className="flex flex-wrap w-full md:w-320 lg:w-400">
					<div className="w-full sm:w-1/2 md:w-full">
						<Hidden smDown>
							<FuseAnimate delay={400}>
								<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">統計圖表</Typography>
							</FuseAnimate>
						</Hidden>

						<div className="widget w-full p-16">
							<WidgetFundingRatio />
						</div>
					</div>

					<div className="w-full sm:w-1/2 md:w-full">
						{/* <FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">使用裝置</Typography>
						</FuseAnimate> */}

						<FuseAnimate delay={600}>
							<div className="widget w-full p-16">
								<WidgetMemberStatistics />
							</div>
						</FuseAnimate>
					</div>

					<div className="w-full sm:w-1/2 md:w-full">
						{/* <FuseAnimate delay={800}>
							<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">客戶熱點</Typography>
						</FuseAnimate> */}

						<FuseAnimate delay={800}>
							<div className="widget w-full p-16">
								<WidgetCustomerMap />
							</div>
						</FuseAnimate>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(DashboardPage);
