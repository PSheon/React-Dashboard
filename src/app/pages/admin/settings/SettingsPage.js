import React from 'react';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import SettingsNavbar from './sections/SettingsNavbar';
import WidgetSettingCard from './widgets/WidgetSettingCard';

const SettingsPage = () => {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="設定" breadCrumbParent="超級管理員" breadCrumbActive="設定" />
			</FuseAnimate>

			<div className="flex flex-col md:flex-row sm:p-8 container">
				{/* <div className="flex flex-wrap w-full md:w-256 lg:w-320"> */}
				<SettingsNavbar />
				{/* </div> */}

				<div className="flex flex-1 flex-col min-w-0 p-16">
					<WidgetSettingCard />
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
