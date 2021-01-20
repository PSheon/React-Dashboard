import React from 'react';

const CommodityListPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/staff/commodity/new',
			component: React.lazy(() => import('./createCommodityPage'))
		},
		{
			path: '/staff/commodity/:commodityId/analyze',
			component: React.lazy(() => import('./analyzeCommodityPage'))
		},
		{
			path: '/staff/commodity/:commodityId/edit',
			component: React.lazy(() => import('./editCommodityPage'))
		},
		{
			path: '/staff/commodity-list',
			component: React.lazy(() => import('./CommodityListPage'))
		}
	]
};

export default CommodityListPageConfig;
