import React from 'react';
import { HelpCircle } from 'react-feather';
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { renderNewBotPackage, renderNewBotCurrency, renderNewBotProportion, renderNewBotPeriod } from 'utils/bot-board';

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

function SettingSummaryCard(props) {
	const classes = useStyles();
	const NEW_BOT = useSelector(({ botBoard }) => botBoard.newBot);

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="h1 font-medium">機器人設定</Typography>
				<Tooltip
					arrow
					title="機器人設定"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<HelpCircle size={20} className="cursor-pointer text-muted" />
				</Tooltip>
			</div>

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

			{/* <div className="flex justify-center items-center mt-20">
				<div className="border-t-1 border-r-1 text-center w-1/2 py-16">
					<p className="mb-4 font-300">已借出</p>
					<p className="text-28 font-semibold mb-4">786,617</p>
				</div>
				<div className="border-t-1 border-l-1 text-center w-1/2 py-16">
					<p className="mb-4 font-300">等待借出</p>
					<p className="text-28 font-semibold mb-4">13,561</p>
				</div>
			</div> */}
		</Card>
	);
}

export default React.memo(SettingSummaryCard);
