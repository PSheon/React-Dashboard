import React from 'react';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import WidgetStockChart from './widgets/WidgetStockChart';
import WidgetStockHistory from './widgets/WidgetStockHistory';

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
