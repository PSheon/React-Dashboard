import React from 'react';
import { authRoles } from 'app/auth';

const LeaderBoardPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.trial,
	routes: [
		{
			path: '/leaderboard',
			component: React.lazy(() => import('./LeaderBoardPage'))
		}
	]
};

export default LeaderBoardPageConfig;
