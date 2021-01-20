import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import clsx from 'clsx';

import WidgetLoanLeaderboard from './widgets/WidgetLoanLeaderboard';

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

function LeaderBoardPage(props) {
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
				<Breadcrumbs breadCrumbTitle="資金排行榜" breadCrumbs={[{ title: '資金排行榜', isActive: true }]} />
			</FuseAnimate>

			<FuseAnimateGroup
				className="w-full flex flex-wrap justify-start"
				enter={{
					animation: 'transition.slideUpBigIn',
					duration: 300
				}}
			>
				<div
					className={clsx(
						classes.headerWrapper,
						'w-1/3 h-128 sm:h-200 m-16 sm:m-24 flex justify-center items-center rounded-8'
					)}
				>
					<Typography className="text-32 sm:text-40 font-semibold" color="inherit">
						冠軍
					</Typography>
				</div>
				<div
					className={clsx(
						classes.headerWrapper,
						'w-1/3 h-128 sm:h-200 m-16 sm:m-24 flex justify-center items-center rounded-8'
					)}
				>
					<Typography className="text-32 sm:text-40 font-semibold" color="inherit">
						冠軍
					</Typography>
				</div>
				<div
					className={clsx(
						classes.headerWrapper,
						'w-1/3 h-128 sm:h-200 m-16 sm:m-24 flex justify-center items-center rounded-8'
					)}
				>
					<Typography className="text-32 sm:text-40 font-semibold" color="inherit">
						冠軍
					</Typography>
				</div>
			</FuseAnimateGroup>

			<WidgetLoanLeaderboard />
		</div>
	);
}

export default LeaderBoardPage;
