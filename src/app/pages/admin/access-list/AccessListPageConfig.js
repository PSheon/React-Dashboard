import React from 'react';

import { authRoles } from 'app/auth';

const AccessListPageConfig = {
	settings: {
		layout: {
			config: {
				footer: {
					display: false
				}
			}
		}
	},
	auth: authRoles.staff,
	routes: [
		{
			path: '/admin/access-list',
			component: React.lazy(() => import('./AccessListPage'))
		}
	]
};

export default AccessListPageConfig;
