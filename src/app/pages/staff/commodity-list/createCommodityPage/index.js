import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';

import SectionGeneralSettings from './sections/SectionGeneralSettings';
import NewBotSummarySection from './widgets/NewBotSummarySection';
import SelectNewBotProportionAndPeriodSection from './widgets/SelectNewBotProportionAndPeriodSection';
import WidgetStepIcon from './widgets/WidgetStepIcon';
import WidgetStepperConnector from './widgets/WidgetStepperConnector';

const getSteps = () => ['基本設定', '細節設定', '確認送出'];

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

function CommodityPage(props) {
	const { commodityId } = useParams();
	const classes = useStyles(props);
	const STEP = useSelector(({ botBoard }) => botBoard.newBot.step);

	const steps = getSteps();

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle={commodityId}
					breadCrumbs={[
						{ to: '/staff/commodity-list', title: '貨幣市場' },
						{ title: `建立商品`, isActive: true }
					]}
				/>
			</FuseAnimate>

			<div className="w-full">
				<Stepper
					classes={{ root: 'sm:mx-16 px-0 bg-transparent' }}
					alternativeLabel
					activeStep={STEP}
					connector={<WidgetStepperConnector />}
				>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel StepIconComponent={WidgetStepIcon}>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				{STEP === 0 && <SectionGeneralSettings />}
				{STEP === 1 && <SelectNewBotProportionAndPeriodSection />}
				{STEP === 2 && <NewBotSummarySection />}
			</div>
		</div>
	);
}

export default CommodityPage;
