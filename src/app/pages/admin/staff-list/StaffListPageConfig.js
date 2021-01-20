import React from 'react';
import { Redirect } from 'react-router-dom';

import { authRoles } from 'app/auth';

const StaffListPageConfig = {
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
			path: '/admin/staff-list',
			component: () => <Redirect to="/admin/maintenance" />
		}
	]
};

export default StaffListPageConfig;
