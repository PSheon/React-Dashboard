import React from 'react';

import { authRoles } from 'app/auth';

const LendingBotsBoardPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/lending-bots-board/new',
			component: React.lazy(() => import('./new'))
		},
		{
			path: '/lending-bots-board/:botId',
			component: React.lazy(() => import('./detail'))
		},
		{
			path: '/lending-bots-board',
			component: React.lazy(() => import('./LendingBotsBoardPage'))
		}
	]
};

export default LendingBotsBoardPageConfig;
