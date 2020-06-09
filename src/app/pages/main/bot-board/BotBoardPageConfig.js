import React from 'react';
import { authRoles } from 'app/auth';

const BotBoardPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/bot-board/new',
			component: React.lazy(() => import('./new'))
		},
		{
			path: '/bot-board/:botId',
			component: React.lazy(() => import('./detail'))
		},
		{
			path: '/bot-board',
			component: React.lazy(() => import('./BotBoardPage'))
		}
	]
};

export default BotBoardPageConfig;
