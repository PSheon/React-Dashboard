import React from 'react';
import { authRoles } from 'app/auth';

const UserListPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.staff,
	routes: [
		{
			path: '/staff/user-list',
			component: React.lazy(() => import('./UserList'))
		}
	]
};

export default UserListPageConfig;
