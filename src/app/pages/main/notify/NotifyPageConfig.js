import React from 'react';
import { authRoles } from 'app/auth';

const NotifyPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/notify',
			component: React.lazy(() => import('./NotifyPage'))
		}
	]
};

export default NotifyPageConfig;
