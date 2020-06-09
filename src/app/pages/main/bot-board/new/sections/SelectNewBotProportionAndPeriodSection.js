import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Anchor } from 'react-feather';

import * as Actions from 'app/store/actions/botBoard';
import ProportionSliderCard from '../cards/ProportionSliderCard';
import PeriodSliderCard from '../cards/PeriodSliderCard';

const SelectNewBotProportionAndPeriodSection = () => {
	const dispatch = useDispatch();
	const NEW_BOT_SETTINGS = useSelector(({ botBoard }) => botBoard.newBot.settings);
	const [minProportion, setMinProportion] = useState(NEW_BOT_SETTINGS.botProportion);
	const [period, setPeriod] = useState(NEW_BOT_SETTINGS.botPeriod);

	const handlePreviousStep = () => {
		dispatch({ type: Actions.SET_NEW_BOT_SETTING_STEP, payload: { step: 0 } });
	};
	const handleSubmitProportionAndPeriod = event => {
		event.preventDefault();
		dispatch(Actions.submitNewBotProportionAndPeriod({ botProportion: minProportion, botPeriod: period }));
	};

	return (
		<FuseAnimateGroup
			enter={{
				animation: 'transition.expandIn'
			}}
			className="flex flex-1 flex-col"
		>
			<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">選擇借出比例</Typography>

			<div className="flex flex-col sm:flex-row justify-center items-center pb-16">
				<div className="w-full p-16">
					<ProportionSliderCard
						active={minProportion}
						selected={minProportion > 0}
						title="最低借出比例"
						iconType="users"
						iconColorSchema="secondary"
						handleChange={(event, value) => setMinProportion(value)}
					/>
				</div>
			</div>

			<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">選擇週期</Typography>

			<div className="flex flex-col sm:flex-row justify-center items-center pb-16">
				<div className="w-full p-16">
					<PeriodSliderCard
						active={period}
						selected={period > 0}
						title="借貸週期"
						iconType="users"
						iconColorSchema="secondary"
						handleChange={(event, value) => setPeriod(value)}
					/>
				</div>
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
					disabled={period <= 0 || minProportion <= 0}
					onClick={handleSubmitProportionAndPeriod}
				>
					檢查機器人設定
				</Button>
			</div>
		</FuseAnimateGroup>
	);
};

export default SelectNewBotProportionAndPeriodSection;
