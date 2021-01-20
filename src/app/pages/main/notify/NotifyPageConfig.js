import React from 'react';
import { Redirect } from 'react-router-dom';

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
			component: () => <Redirect to="/admin/maintenance" />
		}
	]
};

export default NotifyPageConfig;
