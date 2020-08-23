import React from 'react';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import WidgetStatisticsCard from 'app/fuse-layouts/shared-components/StatisticsCard';
import WidgetBasicCard from 'app/fuse-layouts/shared-components/BasicCard';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import WidgetStockChart from './sections/WidgetStockChart';
import WidgetStockHistory from './sections/WidgetStockHistory';

function InstanceListPage() {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="交易" breadCrumbParent="管理員" breadCrumbActive="交易" />
			</FuseAnimate>

			<WidgetStockChart />

			<WidgetStockHistory />
		</div>
	);
}

export default InstanceListPage;
