import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import authConfigs from 'app/pages/auth/authConfigs';
import mainConfigs from 'app/pages/main/mainConfigs';
import adminConfigs from 'app/pages/admin/adminConfigs';
import staffConfigs from 'app/pages/staff/staffConfigs';

const routeConfigs = [...authConfigs, ...mainConfigs, ...adminConfigs, ...staffConfigs];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/landing" />
	},
	{
		component: () => <Redirect to="/errors/error-404" />
	}
];

export default routes;
