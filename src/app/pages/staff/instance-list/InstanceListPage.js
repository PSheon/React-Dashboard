import React from 'react';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Typography from '@material-ui/core/Typography';
import WidgetBasicCard from 'app/fuse-layouts/shared-components/BasicCard';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import WidgetStatisticsCard from 'app/fuse-layouts/shared-components/StatisticsCard';

import WidgetStockChart from './sections/WidgetStockChart';
import WidgetStockHistory from './sections/WidgetStockHistory';

function InstanceListPage() {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle="交易"
					breadCrumbs={[{ title: '管理員' }, { title: '交易', isActive: true }]}
				/>
			</FuseAnimate>

			<WidgetStockChart />

			<WidgetStockHistory />
		</div>
	);
}

export default InstanceListPage;
