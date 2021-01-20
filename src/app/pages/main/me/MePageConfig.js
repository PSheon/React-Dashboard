import React from 'react';

import { authRoles } from 'app/auth';

const MePageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/me',
			component: React.lazy(() => import('./MePage'))
		}
	]
};

export default MePageConfig;
