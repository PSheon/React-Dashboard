import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import clsx from 'clsx';

import SettingSummaryCard from './cards/SettingSummaryCard';
import NewBotSummarySection from './sections/NewBotSummarySection';
import SelectNewBotPackageAndCurrencySection from './sections/SelectNewBotPackageAndCurrencySection';
import SelectNewBotProportionAndPeriodSection from './sections/SelectNewBotProportionAndPeriodSection';
import StepperConnector from './stepper/Connector';
import StepIcon from './stepper/Icon';

const getSteps = () => ['選擇方案', '細節設定', '確認送出'];

const useStyles = makeStyles(theme => ({
	headerWrapper: {
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
	}
}));

function Board(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));
	const STEP = useSelector(({ botBoard }) => botBoard.newBot.step);

	const steps = getSteps();

	// useEffect(() => {
	// 	dispatch(Actions.getBoards());
	// 	return () => {
	// 		dispatch(Actions.resetBoards());
	// 	};
	// }, [dispatch]);

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="新增" breadCrumbParent="我的機器人" breadCrumbActive="新增" />
			</FuseAnimate>

			<FuseAnimate>
				<div
					className={clsx(
						classes.headerWrapper,
						'h-128 sm:h-168 m-16 mb-0 sm:m-24 flex justify-center items-center rounded-8'
					)}
				>
					<Typography className="text-32 sm:text-40 font-semibold" color="inherit">
						新增機器人
					</Typography>
				</div>
			</FuseAnimate>

			<div className="w-full">
				<Stepper
					classes={{ root: 'sm:mx-16 px-0 bg-transparent' }}
					alternativeLabel
					activeStep={STEP}
					connector={<StepperConnector />}
				>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<div className="flex flex-col md:flex-row sm:p-8 container">
					{STEP === 0 && <SelectNewBotPackageAndCurrencySection />}
					{STEP === 1 && <SelectNewBotProportionAndPeriodSection />}
					{STEP === 2 && <NewBotSummarySection />}

					{smUp && STEP < 2 && (
						<div className="flex flex-wrap w-full md:w-320 lg:w-400">
							<div className="w-full mb-0 sm:mb-32">
								<FuseAnimate delay={600}>
									<Typography className="px-16 pb-8 text-18 font-medium">總結設定</Typography>
								</FuseAnimate>

								<FuseAnimate delay={600}>
									<div className="widget w-full p-16">
										<SettingSummaryCard />
									</div>
								</FuseAnimate>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Board;
