import React from 'react';
import { authRoles } from 'app/auth';

const DashboardPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/dashboard',
			component: React.lazy(() => import('./DashboardPage'))
		}
	]
};

export default DashboardPageConfig;
