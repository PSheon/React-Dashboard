import React from 'react';

const LandingPageConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/landing',
			component: React.lazy(() => import('./LandingPage'))
		}
	]
};

export default LandingPageConfig;
