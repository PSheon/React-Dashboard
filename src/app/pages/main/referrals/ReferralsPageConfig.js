import React from 'react';
import { Redirect } from 'react-router-dom';

const ReferralsPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/referrals',
			component: () => <Redirect to="/coming-soon" />
		}
	]
};

export default ReferralsPageConfig;
