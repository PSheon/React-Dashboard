import React from 'react';

import { authRoles } from 'app/auth';

const FollowTradeBotsBoardPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/follow-trade-bots-board/new',
			component: React.lazy(() => import('./new'))
		},
		{
			path: '/follow-trade-bots-board/:botId',
			component: React.lazy(() => import('./detail'))
		},
		{
			path: '/follow-trade-bots-board',
			component: React.lazy(() => import('./FollowTradeBotsBoardPage'))
		}
	]
};

export default FollowTradeBotsBoardPageConfig;
