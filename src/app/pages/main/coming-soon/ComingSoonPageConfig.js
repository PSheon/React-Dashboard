import React from 'react';

const ComingSoonPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/coming-soon',
			component: React.lazy(() => import('./ComingSoonPage'))
		}
	]
};

export default ComingSoonPageConfig;
