import React from 'react';
import { Redirect } from 'react-router-dom';

const NotifyPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/notify',
			component: () => <Redirect to="/coming-soon" />
		}
	]
};

export default NotifyPageConfig;
