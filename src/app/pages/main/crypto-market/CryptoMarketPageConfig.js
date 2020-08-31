import React from 'react';
import { Redirect } from 'react-router-dom';

const CryptoMarketPage = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/crypto-market/:cryptoId',
			component: () => <Redirect to="/admin/maintenance" />
		},
		{
			path: '/crypto-market',
			component: React.lazy(() => import('./CryptoMarketPage'))
		}
	]
};

export default CryptoMarketPage;
