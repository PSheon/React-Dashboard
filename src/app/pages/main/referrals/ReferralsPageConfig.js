import React from 'react';
import { authRoles } from 'app/auth';

const ReferralsPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/referrals',
			component: React.lazy(() => import('./ReferralsPage'))
		}
	]
};

export default ReferralsPageConfig;
