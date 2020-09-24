import React from 'react';
import { useSelector } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import SettingsNavbar from './sections/SettingsNavbar';
import WidgetAnnouncementSettingCard from './widgets/WidgetAnnouncementSettingCard';
import WidgetCustomerServiceSettingCard from './widgets/WidgetCustomerServiceSettingCard';
import WidgetGeneralSettingCard from './widgets/WidgetGeneralSettingCard';
import WidgetMapSettingCard from './widgets/WidgetMapSettingCard';
import WidgetNotificationSettingCard from './widgets/WidgetNotificationSettingCard';
import WidgetPaymentSettingCard from './widgets/WidgetPaymentSettingCard';

const SettingsPage = () => {
	const TAB_INDEX = useSelector(({ setting }) => setting.tab.tabIndex);

	return (
		<div className="w-full md:h-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle="設定"
					breadCrumbs={[{ title: '超級管理員' }, { title: '設定', isActive: true }]}
				/>
			</FuseAnimate>

			<FuseAnimate animation="transition.expandIn">
				<SettingsNavbar />
			</FuseAnimate>

			<div className="flex m-16 sm:mx-24">
				{TAB_INDEX === 0 && (
					<FuseAnimate animation="transition.expandIn">
						<WidgetGeneralSettingCard />
					</FuseAnimate>
				)}
				{TAB_INDEX === 1 && (
					<FuseAnimate animation="transition.expandIn">
						<WidgetAnnouncementSettingCard />
					</FuseAnimate>
				)}
				{TAB_INDEX === 2 && (
					<FuseAnimate animation="transition.expandIn">
						<WidgetNotificationSettingCard />
					</FuseAnimate>
				)}
				{TAB_INDEX === 3 && (
					<FuseAnimate animation="transition.expandIn">
						<WidgetCustomerServiceSettingCard />
					</FuseAnimate>
				)}
				{TAB_INDEX === 4 && (
					<FuseAnimate animation="transition.expandIn">
						<WidgetPaymentSettingCard />
					</FuseAnimate>
				)}
				{TAB_INDEX === 5 && (
					<FuseAnimate animation="transition.expandIn">
						<WidgetMapSettingCard />
					</FuseAnimate>
				)}
			</div>
		</div>
	);
};

export default SettingsPage;
