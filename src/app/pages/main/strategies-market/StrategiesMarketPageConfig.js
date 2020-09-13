import React from 'react';
import { Redirect } from 'react-router-dom';

const StrategiesMarketPage = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/strategies-market/:strategyId',
			component: React.lazy(() => import('./StrategyPage'))
		},
		{
			path: '/strategies-market',
			component: React.lazy(() => import('./StrategiesMarketPage'))
		}
	]
};

export default StrategiesMarketPage;
