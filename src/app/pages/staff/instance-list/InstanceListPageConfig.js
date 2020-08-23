import React from 'react';
import { Redirect } from 'react-router-dom';
import { authRoles } from 'app/auth';

const InstanceListPageConfig = {
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
			path: '/staff/instance-list',
			component: React.lazy(() => import('./InstanceListPage'))
		}
	]
};

export default InstanceListPageConfig;
