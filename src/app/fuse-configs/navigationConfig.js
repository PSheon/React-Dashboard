// import { authRoles } from 'app/auth';
import i18next from 'i18next';

import en from './navigation-i18n/en';
import tw from './navigation-i18n/tw';

i18next.addResourceBundle('tw', 'navigation', tw);
i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
	{
		id: 'portfolio',
		title: '投資組合',
		translate: 'PORTFOLIO',
		type: 'group',
		children: [
			{
				id: 'dashboard',
				title: '我的投資',
				translate: 'DASHBOARD',
				type: 'item',
				icon: 'dashboard',
				exact: true,
				url: '/dashboard'
			},
			{
				id: 'bots-board',
				title: '跟投機器人',
				translate: 'BOTS_SETTING',
				type: 'item',
				icon: 'tune',
				url: '/bot-board'
			},
			{
				id: 'crypto-market',
				title: '貨幣市場',
				translate: 'CRYPTO_MARKET',
				type: 'item',
				icon: 'euro_symbol',
				url: '/crypto-market'
			},
			{
				id: 'strategies-market',
				title: '策略市場',
				translate: 'STRATEGIES_MARKET',
				type: 'item',
				icon: 'euro_symbol',
				url: '/strategies-market'
			},
			{
				id: 'leader-board',
				title: '績效排行榜',
				translate: 'LEADERBOARD',
				type: 'item',
				icon: 'bar_chart',
				url: '/leaderboard'
			}
		]
	},
	{
		type: 'divider',
		id: 'divider-1'
	},
	{
		id: 'personal',
		title: '個人頁面',
		translate: 'PERSONAL',
		type: 'group',
		children: [
			{
				id: 'personal-settings',
				title: '個人資訊',
				translate: 'PERSONAL_SETTING',
				type: 'item',
				icon: 'account_circle',
				url: '/me',
				badge: {
					title: 3,
					bg: 'rgb(255, 111, 0)',
					fg: '#FFFFFF'
				}
			},
			{
				id: 'referrals',
				title: '好友推薦',
				translate: 'REFERRAL',
				type: 'item',
				icon: 'email',
				url: '/referrals',
				badge: {
					title: 25,
					bg: '#F44336',
					fg: '#FFFFFF'
				}
			},
			{
				id: 'payment',
				title: '付款紀錄',
				translate: 'PAYMENT',
				type: 'item',
				icon: 'payment',
				url: '/payment',
				badge: {
					title: 3,
					bg: 'rgb(255, 111, 0)',
					fg: '#FFFFFF'
				}
			},
			{
				id: 'notify',
				title: '通知設定',
				translate: 'NOTIFY',
				type: 'item',
				icon: 'notifications_active',
				badge: {
					title: 10,
					bg: '#525E8A',
					fg: '#FFFFFF'
				},
				url: '/notify'
			}
		]
	},
	{
		type: 'divider',
		id: 'divider-2'
	},
	{
		id: 'logout',
		title: '登出',
		translate: 'LOG_OUT',
		type: 'item',
		icon: 'exit_to_app',
		url: '/logout'
	}
];

export const ADMIN_NAVIGATION = {
	id: 'admin-navigation',
	title: '網站設定',
	translate: 'ADMIN_NAVIGATION',
	type: 'group',
	children: [
		{
			id: 'admin-dashboard',
			title: '網站主控版',
			translate: 'ADMIN_DASHBOARD',
			type: 'item',
			icon: 'chrome_reader_mode',
			url: '/admin/dashboard'
		},
		{
			id: 'admin-settings',
			title: '網站設定',
			translate: 'ADMIN_SETTINGS',
			type: 'item',
			icon: 'settings',
			url: '/admin/settings'
		},
		// {
		// 	id: 'admin-staff-list',
		// 	title: '員工列表',
		// 	type: 'item',
		// 	icon: 'list_alt',
		// 	url: '/admin/staff-list'
		// },
		{
			type: 'divider',
			id: 'divider-admin'
		}
	]
};

export const STAFF_NAVIGATION = {
	id: 'staff-navigation',
	title: '網站管理',
	translate: 'STAFF_NAVIGATION',
	type: 'group',
	children: [
		{
			id: 'staff-user-list',
			title: '會員列表',
			translate: 'STAFF_USER_LIST',
			type: 'item',
			icon: 'list_alt',
			url: '/staff/user-list'
		},
		{
			id: 'staff-instance-list',
			title: '運行實體列表',
			translate: 'STAFF_INSTANCE_LIST',
			type: 'item',
			icon: 'list_alt',
			url: '/staff/instance-list'
		},
		// {
		// 	id: 'staff-order-list',
		// 	title: '訂單列表',
		// 	type: 'item',
		// 	icon: 'list_alt',
		// 	url: '/staff/order-list'
		// },
		{
			type: 'divider',
			id: 'divider-staff'
		}
	]
};

export default navigationConfig;
