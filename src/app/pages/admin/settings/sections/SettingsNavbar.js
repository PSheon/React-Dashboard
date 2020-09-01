import React from 'react';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';

import WidgetSettingCategoryCard from '../widgets/WidgetSettingCategoryCard';

const SettingsNavbar = props => {
	return (
		<FuseAnimateGroup
			enter={{
				animation: 'transition.expandIn'
			}}
			className="w-full md:w-256 lg:w-320 flex flex-col flex-wrap sm:flex-no-wrap mb-16 md:mb-0"
		>
			<div className="w-160 sm:w-full p-16">
				<WidgetSettingCategoryCard title="一班設定" iconType="settings" iconColorSchema="info" />
			</div>
			<div className="w-160 sm:w-full p-16">
				<WidgetSettingCategoryCard title="系統公告" iconType="volumn-2" iconColorSchema="info" />
			</div>
			<div className="w-160 sm:w-full p-16">
				<WidgetSettingCategoryCard title="通知提醒" iconType="bell" iconColorSchema="info" />
			</div>
			<div className="w-160 sm:w-full p-16">
				<WidgetSettingCategoryCard title="客服排程" iconType="tool" iconColorSchema="info" />
			</div>
			<div className="w-160 sm:w-full p-16">
				<WidgetSettingCategoryCard title="付款方式" iconType="dollar-sign" iconColorSchema="info" />
			</div>
			<div className="w-160 sm:w-full p-16">
				<WidgetSettingCategoryCard title="地圖設定" iconType="map-pin" iconColorSchema="info" />
			</div>
		</FuseAnimateGroup>
	);
};

export default SettingsNavbar;
