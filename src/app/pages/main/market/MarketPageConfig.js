import React from 'react';
import { Redirect } from 'react-router-dom';

const MarketConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/market/:marketId',
			component: () => <Redirect to="/coming-soon" />
		},
		{
			path: '/market',
			component: () => <Redirect to="/coming-soon" />
		}
	]
};

export default MarketConfig;
