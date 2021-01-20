import React from 'react';

import { authRoles } from 'app/auth';

const MaintenancePageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/admin/maintenance',
			component: React.lazy(() => import('./MaintenancePage'))
		}
	]
};

export default MaintenancePageConfig;
