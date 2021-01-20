import React from 'react';

import { authRoles } from 'app/auth';

const DashboardPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/admin/dashboard',
			component: React.lazy(() => import('./DashboardPage'))
		}
	]
};

export default DashboardPageConfig;
