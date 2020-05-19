import React from 'react';
import { Redirect } from 'react-router-dom';

const BotSettingPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/bot-setting',
			component: () => <Redirect to="/coming-soon" />
		}
	]
};

export default BotSettingPageConfig;
