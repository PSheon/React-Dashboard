// import { authRoles } from 'app/auth';
import i18next from 'i18next';

import en from './navigation-i18n/en';
import tw from './navigation-i18n/tw';

i18next.addResourceBundle('tw', 'navigation', tw);
i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
	{
		id: 'trading',
		title: '投資交易',
		translate: 'TRADING',
		type: 'group',
		children: [
			{
				id: 'dashboard',
				title: '我的投資',
				translate: 'DASHBOARD',
				type: 'item',
				icon: 'pie_chart',
				exact: true,
				url: '/dashboard'
			},
			{
				id: 'follow-trade-bots-board',
				title: '策略跟投',
				translate: 'FOLLOW_TRADE_BOTS_BOARD',
				type: 'item',
				icon: 'tune',
				url: '/follow-trade-bots-board'
			},
			{
				id: 'lending-bots-board',
				title: '智能借貸',
				translate: 'LENDING_BOTS_BOARD',
				type: 'item',
				icon: 'tune',
				url: '/lending-bots-board'
			}
		]
	},
	{
		type: 'divider',
		id: 'divider-1'
	},
	{
		id: 'market',
		title: '投資市場',
		translate: 'MARKET',
		type: 'group',
		children: [
			{
				id: 'commodities-market',
				title: '交易市場',
				translate: 'COMMODITIES_MARKET',
				type: 'item',
				icon: 'monetization_on',
				url: '/commodities-market'
			},
			{
				id: 'strategies-market',
				title: '策略市場',
				translate: 'STRATEGIES_MARKET',
				type: 'item',
				icon: 'stars',
				url: '/strategies-market'
			},
			{
				id: 'leader-board',
				title: '投資風雲榜',
				translate: 'LEADERBOARD',
				type: 'item',
				icon: 'bar_chart',
				url: '/leaderboard'
			}
		]
	},
	{
		type: 'divider',
		id: 'divider-2'
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
				icon: 'group_add',
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
		id: 'divider-3'
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
			title: '會員管理列表',
			translate: 'STAFF_USER_LIST',
			type: 'item',
			icon: 'list_alt',
			url: '/staff/user-list'
		},
		{
			id: 'staff-commodity-list',
			title: '商品管理列表',
			translate: 'STAFF_COMMODITY_LIST',
			type: 'item',
			icon: 'list_alt',
			url: '/staff/commodity-list'
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
