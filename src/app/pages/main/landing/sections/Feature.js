import React from 'react';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Typography from '@material-ui/core/Typography';
import IMAGE from 'app/assets/images/landing/features-split-image-01.png';

const Feature = () => {
	return (
		<FuseAnimateGroup
			enter={{
				animation: 'transition.expandIn',
				delay: 150
			}}
			className="w-full flex flex-col items-center justify-center px-24 pt-96 sm:pt-200 pb-48"
		>
			<Typography className="mb-24 text-48 font-semibold text-center">平台</Typography>
			<Typography className="mb-24 text-24 text-center" color="textSecondary">
				Our landing page template works on all devices, so you only have to set it up once, and get beautiful
				results forever.
			</Typography>

			<img src={IMAGE} alt="App Demo" />
		</FuseAnimateGroup>
	);
};

export default Feature;
