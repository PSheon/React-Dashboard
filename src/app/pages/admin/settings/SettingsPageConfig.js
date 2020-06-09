import React from 'react';
import { authRoles } from 'app/auth';

const SettingsPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/admin/settings',
			component: React.lazy(() => import('./SettingsPage'))
		}
	]
};

export default SettingsPageConfig;
