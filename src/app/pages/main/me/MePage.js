import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import * as ProfileActions from 'app/store/actions/profile';

import AccessHistoryCard from './cards/AccessHistoryCard';
import ProfileCard from './cards/ProfileCard';
import SettingsCard from './cards/SettingsCard';
import SocialLinksCard from './cards/SocialLinksCard';

const MePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ProfileActions.setAccessHistory());
	});

	return (
		<div className="flex flex-wrap justify-center items-center">
			<div className="w-full">
				<FuseAnimate animation="transition.slideUpIn">
					<Breadcrumbs breadCrumbTitle="個人資訊" breadCrumbs={[{ title: '個人資訊', isActive: true }]} />
				</FuseAnimate>

				<div className="flex flex-col sm:flex-row justify-center items-center sm:items-start mx-16 sm:mx-24 mt-20">
					<ProfileCard />

					<div className="w-full md:w-3/5 flex flex-col justify-center items-center sm:pl-12">
						<SocialLinksCard />

						<SettingsCard />
					</div>
				</div>
			</div>

			{/* Login Access */}
			<div className="w-full">
				<AccessHistoryCard />
			</div>
		</div>
	);
};

export default MePage;
