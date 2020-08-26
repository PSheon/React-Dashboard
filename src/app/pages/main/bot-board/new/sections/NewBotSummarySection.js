import React from 'react';
import { Anchor } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';
import * as Actions from 'app/store/actions/botBoard';
import clsx from 'clsx';

import { renderNewBotPackage, renderNewBotCurrency, renderNewBotProportion, renderNewBotPeriod } from 'utils/bot-board';

const useStyles = makeStyles(theme => ({
	cardWrapper: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

const NewBotSummarySection = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const NEW_BOT = useSelector(({ botBoard }) => botBoard.newBot);

	const handlePreviousStep = () => {
		dispatch({ type: Actions.SET_NEW_BOT_SETTING_STEP, payload: { step: 1 } });
	};
	const handleSubmitNewBot = event => {
		event.preventDefault();
		dispatch(Actions.createNewBotNewBot());
	};

	return (
		<FuseAnimateGroup
			enter={{
				animation: 'transition.expandIn'
			}}
			className="flex flex-1 flex-col"
		>
			<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">選擇借出比例</Typography>

			<div className="w-full p-16">
				<Card className={clsx(classes.cardWrapper, 'rounded-8 shadow-none')}>
					<div className="flex flex-col justify-between items-between px-20 pt-24">
						<div className="pb-24 flex justify-between">
							<Typography className="h2" color="textSecondary">
								借貸方案
							</Typography>
							{renderNewBotPackage(NEW_BOT.settings.botPackage)}
						</div>
						<div className="pb-24 flex justify-between">
							<Typography className="h2" color="textSecondary">
								借貸幣種
							</Typography>
							{renderNewBotCurrency(NEW_BOT.settings.botCurrency)}
						</div>
						<div className="pb-24 flex justify-between">
							<Typography className="h2" color="textSecondary">
								借貸比例
							</Typography>
							{renderNewBotProportion(NEW_BOT.settings.botProportion)}
						</div>
						<div className="pb-24 flex justify-between">
							<Typography className="h2" color="textSecondary">
								借貸週期
							</Typography>
							{renderNewBotPeriod(NEW_BOT.settings.botPeriod)}
						</div>
					</div>
				</Card>
			</div>

			<div className="flex justify-between items-center p-16">
				<Button
					className="rounded-8 font-medium text-14 text-white"
					variant="contained"
					startIcon={<Anchor width={16} />}
					color="primary"
					onClick={handlePreviousStep}
				>
					上一步
				</Button>

				<Button
					className="rounded-8 font-medium text-14 text-white"
					variant="contained"
					startIcon={<Anchor width={16} />}
					color="primary"
					disabled={NEW_BOT.loading}
					onClick={handleSubmitNewBot}
				>
					{NEW_BOT.loading === true ? <LoadingIcon /> : '建立借貸機器人'}
				</Button>
			</div>
		</FuseAnimateGroup>
	);
};

export default NewBotSummarySection;
