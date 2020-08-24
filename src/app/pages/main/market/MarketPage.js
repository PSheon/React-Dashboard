import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import clsx from 'clsx';

import '@brainhubeu/react-carousel/lib/style.css';
import WidgetLoanBase from './sections/WidgetLoanBase';

const useStyles = makeStyles(theme => ({
	headerWrapper: {
		cursor: 'pointer',
		background: `url(${BACKGROUND})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	board: {
		cursor: 'pointer',
		boxShadow: theme.shadows[0],
		borderRadius: '.8rem',
		color: theme.palette.getContrastText(theme.palette.primary.dark)
	}
}));

function MarketPage(props) {
	const dispatch = useDispatch();

	const classes = useStyles(props);

	// useEffect(() => {
	// 	dispatch(Actions.getBoards());
	// 	return () => {
	// 		dispatch(Actions.resetBoards());
	// 	};
	// }, [dispatch]);

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="借貸市場" breadCrumbActive="借貸市場" />
			</FuseAnimate>

			<Carousel>
				{/* <div className="flex ">
					<WidgetBasicCard
						title="借貸總資金"
						content="0.14M"
						iconType="dollar-sign"
						iconColorSchema="primary"
					/>
				</div>
				<WidgetBasicCard title="借貸總資金" content="0.14M" iconType="dollar-sign" iconColorSchema="primary" />
				<WidgetBasicCard title="借貸總資金" content="0.14M" iconType="dollar-sign" iconColorSchema="primary" /> */}
			</Carousel>

			<div className="flex flex-col md:flex-row sm:p-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<FuseAnimate delay={600}>
						<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">新興市場</Typography>
					</FuseAnimate>
					<FuseAnimateGroup
						enter={{
							animation: 'transition.expandIn'
						}}
						className="flex flex-col flex-wrap sm:flex sm:flex-row"
					>
						<div className="widget flex w-full sm:w-1/3 p-16">
							{/* <WidgetBasicCard
								title="借貸總資金"
								content="0.14M"
								iconType="dollar-sign"
								iconColorSchema="primary"
							/> */}
						</div>
						<div className="widget flex w-full sm:w-1/3 p-16">
							{/* <WidgetBasicCard
								title="運行機器人"
								content="15"
								iconType="layers"
								iconColorSchema="secondary"
							/> */}
						</div>
						<div className="widget w-full sm:w-1/3 p-16">
							{/* <WidgetBasicCard
								title="活躍用戶數"
								content="21"
								iconType="users"
								iconColorSchema="success"
							/> */}
						</div>
						<div className="widget w-full sm:w-1/3 p-16">
							{/* <WidgetBasicCard
								title="未處理訂單"
								content="0"
								iconType="alert-octagon"
								iconColorSchema="error"
							/> */}
						</div>
						<div className="widget w-full sm:w-1/3 p-16">
							{/* <WidgetBasicCard
								title="未處理訂單"
								content="0"
								iconType="alert-octagon"
								iconColorSchema="error"
							/> */}
						</div>
						<div className="widget w-full sm:w-1/3 p-16">
							{/* <WidgetBasicCard
								title="未處理訂單"
								content="0"
								iconType="alert-octagon"
								iconColorSchema="error"
							/> */}
						</div>
					</FuseAnimateGroup>
				</div>

				<div className="flex flex-wrap w-full md:w-320 lg:w-400">
					<div classNam e="w-full sm:w-1/2 md:w-full mb-0 sm:mb-32">
						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-medium">特別市場</Typography>
						</FuseAnimate>

						<div className="widget w-full p-16">{/* <WidgetFundingRatio /> */}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MarketPage;
