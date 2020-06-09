import React from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import WidgetSettingCard from 'app/fuse-layouts/shared-components/SettingCard';

const SettingsPage = () => {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="設定" breadCrumbParent="超級管理員" breadCrumbActive="設定" />
			</FuseAnimate>

			<FuseAnimateGroup
				enter={{
					animation: 'transition.expandIn'
				}}
				className="flex flex-col sm:flex sm:flex-row flex-wrap m-0 sm:mx-8 sm:mt-4"
			>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard title="維護模式" content="3M" iconType="dollar-sign" iconColorSchema="primary" />
				</div>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard title="開放註冊" content="450" iconType="layers" iconColorSchema="secondary" />
				</div>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard title="用戶販賣" content="1995" iconType="users" iconColorSchema="success" />
				</div>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard title="信箱驗證" content="2" iconType="alert-octagon" iconColorSchema="error" />
				</div>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard title="信件通知" content="3M" iconType="dollar-sign" iconColorSchema="primary" />
				</div>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard title="兩步登入" content="450" iconType="layers" iconColorSchema="secondary" />
				</div>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard title="Line 登入" content="1995" iconType="users" iconColorSchema="success" />
				</div>
				<div className="w-full sm:w-1/3 lg:w-1/4 p-16">
					<WidgetSettingCard
						title="Google 登入"
						content="2"
						iconType="alert-octagon"
						iconColorSchema="error"
					/>
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<WidgetSettingCard
						title="Facebook 登入"
						content="2"
						iconType="alert-octagon"
						iconColorSchema="error"
					/>
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<WidgetSettingCard
						title="Facebook 登入"
						content="2"
						iconType="alert-octagon"
						iconColorSchema="error"
					/>
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<WidgetSettingCard
						title="Facebook 登入"
						content="2"
						iconType="alert-octagon"
						iconColorSchema="error"
					/>
				</div>
			</FuseAnimateGroup>
		</div>
	);
};

export default SettingsPage;
