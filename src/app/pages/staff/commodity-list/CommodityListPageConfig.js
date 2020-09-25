import React from 'react';
import { Redirect } from 'react-router-dom';

import { authRoles } from 'app/auth';

const CommodityListPageConfig = {
	settings: {
		layout: {
			config: {
				footer: {
					display: false
				}
			}
		}
	},
	auth: authRoles.staff,
	routes: [
		{
			path: '/staff/commodity-list',
			component: React.lazy(() => import('./CommodityListPage'))
		}
	]
};

export default CommodityListPageConfig;
