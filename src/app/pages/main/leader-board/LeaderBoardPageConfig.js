import React from 'react';
import { Redirect } from 'react-router-dom';

const LeaderBoardPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/leaderboard',
			component: () => <Redirect to="/coming-soon" />
		}
	]
};

export default LeaderBoardPageConfig;
