import React from 'react';

import { authRoles } from 'app/auth';

const PaymentPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/payment',
			component: React.lazy(() => import('./PricingPage'))
		}
	]
};

export default PaymentPageConfig;
