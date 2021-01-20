import React from 'react';

import { authRoles } from 'app/auth';

const PricingPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/pricing',
			component: React.lazy(() => import('./PricingPage'))
		}
	]
};

export default PricingPageConfig;
