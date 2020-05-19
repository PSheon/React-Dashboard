import React from 'react';
import { Redirect } from 'react-router-dom';

const PaymentPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/payment',
			component: () => <Redirect to="/coming-soon" />
		}
	]
};

export default PaymentPageConfig;
