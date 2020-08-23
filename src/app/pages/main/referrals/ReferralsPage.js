import React, { useEffect } from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import MissionCard from './cards/MissionCard';
import ClaimCard from './cards/ClaimCard';
import ReferralLinkCard from './cards/ReferralLinkCard';
import ClaimHistoryCard from './cards/ClaimHistoryCard';
import DownlineCard from './cards/DownlineCard';

const ReferralsPage = () => {
	useEffect(() => {
		// dispatch(ReferralActions.setAccessHistory());
	});

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn">
				<Breadcrumbs breadCrumbTitle="好友推薦" breadCrumbActive="好友推薦" />
			</FuseAnimate>

			<div className="flex flex-wrap flex-col sm:flex-row justify-center items-center sm:items-start mx-16 sm:mx-24 mt-20">
				<div className="w-full sm:w-1/3 sm:pr-12">
					<MissionCard />
					<ReferralLinkCard />
				</div>
				<div className="w-full sm:w-2/3 sm:px-12">
					<ClaimCard />
				</div>

				<div className="w-full sm:w-3/5 sm:pr-12">
					<ClaimHistoryCard />
				</div>
				<div className="w-full sm:w-2/5 sm:pl-12">
					<DownlineCard />
					{/* <DownlineCard /> */}
				</div>
			</div>
		</div>
	);
};

export default ReferralsPage;
