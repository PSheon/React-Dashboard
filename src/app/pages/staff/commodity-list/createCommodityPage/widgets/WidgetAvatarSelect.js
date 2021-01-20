import React, { useState } from 'react';
import { Anchor } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DECOR_LEFT_IMG from 'app/assets/images/profile/decore-left.png';
import DECOR_RIGHT_IMG from 'app/assets/images/profile/decore-right.png';
import clsx from 'clsx';

import WidgetCommodityAvatarCrop from './WidgetCommodityAvatarCrop';

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.background.paper,
		flex: 2,
		borderRadius: '.8rem',
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	chartRoot: {
		width: 'calc(100% + 2.4rem)'
	}
}));

function WidgetAvatarSelect(props) {
	const classes = useStyles(props);

	const handleOpenImageSelector = () => {
		console.log('open');
	};

	return (
		<FuseAnimate delay={100}>
			<div className={clsx(classes.root, 'rounded-8 mx-16 mb-8')}>
				<div className="container relative h-full flex flex-col p-16 justify-center items-center">
					<img src={DECOR_LEFT_IMG} alt="card-img-left" className="absolute w-2/5 top-0 left-0" />
					<img src={DECOR_RIGHT_IMG} alt="card-img-right" className="absolute w-2/5 top-0 right-0" />

					<WidgetCommodityAvatarCrop />

					<Button
						className="mt-12 sm:mt-24 mb-24 sm:mb-0 rounded-8 font-medium text-14 text-white"
						variant="contained"
						startIcon={<Anchor width={16} />}
						color="primary"
						onClick={handleOpenImageSelector}
					>
						細節設定設定
					</Button>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default React.memo(WidgetAvatarSelect);
