import React from 'react';
import { Volume2, Bell, Tool, DollarSign, MapPin, Settings } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';

const SettingsNavbar = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const TAB_INDEX = useSelector(({ setting }) => setting.tab.tabIndex);
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const ICON_SIZE = mdDown ? 28 : 26;

	const handleChange = (event, newTabIndex) => {
		dispatch(Actions.setSettingTabIndex(newTabIndex));
	};

	return (
		<div className="mt-20 px-16 sm:px-24 md:mb-0">
			<Tabs
				value={TAB_INDEX}
				onChange={handleChange}
				classes={{
					indicator: 'bg-secondary rounded-8 h-4',
					scrollButtons: ''
				}}
				className="py-16 bg-bgPaper rounded-8"
				variant="scrollable"
				scrollButtons="on"
				aria-label="設定導覽列"
			>
				<Tab
					label="一班設定"
					classes={{
						root: 'rounded-full'
					}}
					icon={<Settings size={ICON_SIZE} />}
					className={clsx(TAB_INDEX === 0 && 'text-secondary', 'text-white')}
				/>
				<Tab
					label="系統公告"
					classes={{
						root: 'rounded-full'
					}}
					icon={<Volume2 size={ICON_SIZE} />}
					className={clsx(TAB_INDEX === 1 && 'text-secondary', 'text-white')}
				/>
				<Tab
					label="通知提醒"
					classes={{
						root: 'rounded-full'
					}}
					icon={<Bell size={ICON_SIZE} />}
					className={clsx(TAB_INDEX === 2 && 'text-secondary', 'text-white')}
				/>
				<Tab
					label="客服排程"
					classes={{
						root: 'rounded-full'
					}}
					icon={<Tool size={ICON_SIZE} />}
					className={clsx(TAB_INDEX === 3 && 'text-secondary', 'text-white')}
				/>
				<Tab
					label="付款方式"
					classes={{
						root: 'rounded-full'
					}}
					icon={<DollarSign size={ICON_SIZE} />}
					className={clsx(TAB_INDEX === 4 && 'text-secondary', 'text-white')}
				/>
				<Tab
					label="地圖設定"
					classes={{
						root: 'rounded-full'
					}}
					icon={<MapPin size={ICON_SIZE} />}
					className={clsx(TAB_INDEX === 5 && 'text-secondary', 'text-white')}
				/>
			</Tabs>
		</div>
	);
};

export default SettingsNavbar;
