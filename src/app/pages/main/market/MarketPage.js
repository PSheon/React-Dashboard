import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseAnimate from '@fuse/core/FuseAnimate';
import clsx from 'clsx';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Carousel, { Dots } from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
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

			{/* <Carousel>
				<img src={BACKGROUND} />
				<img src={BACKGROUND} />
				<img src={BACKGROUND} />
			</Carousel> */}

			<FuseAnimateGroup
				className="w-full flex flex-wrap justify-start px-0 sm:px-8"
				enter={{
					animation: 'transition.slideUpBigIn',
					duration: 300
				}}
			>
				<div
					className={clsx(
						classes.headerWrapper,
						'h-128 sm:h-200 m-16 sm:m-24 flex justify-center items-center rounded-8'
					)}
				>
					<Typography className="text-32 sm:text-40 font-semibold" color="inherit">
						我的機器人
					</Typography>
				</div>
			</FuseAnimateGroup>
		</div>
	);
}
// <div className="w-full">
// 	<FuseAnimate animation="transition.slideUpIn" delay={200}>
// 		<Breadcrumbs breadCrumbTitle="借貸市場" breadCrumbActive="借貸市場" />
// 	</FuseAnimate>

// <div className="flex flex-col md:flex-row sm:p-8 container">
// 	<div className="flex flex-1 flex-col min-w-0">
// 		<WidgetAccountRevenue />

// 		<FuseAnimate delay={600}>
// 			<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">資金狀態</Typography>
// 		</FuseAnimate>
// 		<FuseAnimateGroup
// 			enter={{
// 				animation: 'transition.expandIn'
// 			}}
// 			className="flex flex-col sm:flex sm:flex-row"
// 		>
// 			<div className="w-full sm:w-1/3 p-16">
// 				<WidgetBasicCard
// 					title="現金-錢包"
// 					content="$0"
// 					iconType="dollar-sign"
// 					iconColorSchema="primary"
// 				/>
// 			</div>
// 			<div className="w-full sm:w-1/3 p-16">
// 				<WidgetBasicCard
// 					title="補償-錢包"
// 					content="$0"
// 					iconType="layers"
// 					iconColorSchema="secondary"
// 				/>
// 			</div>
// 			<div className="w-full sm:w-1/3 p-16">
// 				<WidgetBasicCard
// 					title="預購-錢包"
// 					content="$0"
// 					iconType="users"
// 					iconColorSchema="success"
// 				/>
// 			</div>
// 		</FuseAnimateGroup>

// 		<FuseAnimate delay={600}>
// 			<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">團隊狀態</Typography>
// 		</FuseAnimate>
// 		<FuseAnimateGroup
// 			enter={{
// 				animation: 'transition.expandIn'
// 			}}
// 			className="flex flex-col sm:flex sm:flex-row"
// 		>
// 			<div className="w-full sm:w-1/2 p-16">
// 				<WidgetBasicCard
// 					title="當月團隊總交易量"
// 					content="$0"
// 					iconType="dollar-sign"
// 					iconColorSchema="primary"
// 				/>
// 			</div>
// 			<div className="w-full sm:w-1/2 p-16">
// 				<WidgetBasicCard
// 					title="當月團隊保險總入金"
// 					content="$0"
// 					iconType="layers"
// 					iconColorSchema="secondary"
// 				/>
// 			</div>
// 		</FuseAnimateGroup>
// 	</div>

// 	<div className="flex flex-wrap w-full md:w-320 lg:w-400">
// 		<div className="w-full sm:w-1/2 md:w-full">
// 			<Hidden xsUp>
// 				<FuseAnimate delay={600}>
// 					<Typography className="px-16 pb-8 text-18 font-medium">統計表</Typography>
// 				</FuseAnimate>
// 			</Hidden>

// 			<div className="p-16 pt-20 pb-0 sm:mb-32">
// 				<WidgetTeamRatio />
// 			</div>
// 		</div>

// 		<div className="w-full sm:w-1/2 md:w-full">
// 			<FuseAnimate delay={600}>
// 				<Typography className="px-16 pb-8 text-18 font-medium">系統通知</Typography>
// 			</FuseAnimate>

// 			<FuseAnimate delay={600}>
// 				<div className="widget w-full p-16">
// 					<WidgetNotifHistory />
// 				</div>
// 			</FuseAnimate>
// 		</div>
// 	</div>
// </div>
// </div>

export default MarketPage;
