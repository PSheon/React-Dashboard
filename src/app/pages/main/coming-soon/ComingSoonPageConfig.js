import React from 'react';

import { authRoles } from 'app/auth';

const ComingSoonPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trail,
	routes: [
		{
			path: '/coming-soon',
			component: React.lazy(() => import('./ComingSoonPage'))
		}
	]
};

export default ComingSoonPageConfig;
