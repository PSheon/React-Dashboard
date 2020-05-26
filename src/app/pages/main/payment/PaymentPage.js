import React from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import PaymentHistory from './cards/PaymentHistory';
import PricingCard from './cards/PricingCard';

function PaymentPage() {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="付款紀錄" breadCrumbActive="付款紀錄" />
			</FuseAnimate>

			<PaymentHistory />

			<PricingCard />
		</div>
	);
}

export default PaymentPage;
