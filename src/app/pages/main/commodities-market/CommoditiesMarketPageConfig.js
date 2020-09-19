import React from 'react';
import { Redirect } from 'react-router-dom';

const CommoditiesMarketPage = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/commodities-market/:commodityId',
			component: React.lazy(() => import('./CommodityPage'))
		},
		{
			path: '/commodities-market',
			component: React.lazy(() => import('./CommoditiesMarketPage'))
		}
	]
};

export default CommoditiesMarketPage;
