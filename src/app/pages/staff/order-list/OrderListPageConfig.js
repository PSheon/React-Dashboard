import React from 'react';
import { Redirect } from 'react-router-dom';
import { authRoles } from 'app/auth';

const OrderListPageConfig = {
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
			path: '/staff/order-list',
			component: () => <Redirect to="/admin/maintenance" />
		}
	]
};

export default OrderListPageConfig;
