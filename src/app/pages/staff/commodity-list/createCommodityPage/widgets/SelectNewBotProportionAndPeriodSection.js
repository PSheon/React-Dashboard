import React, { useState } from 'react';
import { Anchor, HelpCircle, Edit, User, Mail, Smartphone } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DECOR_LEFT_IMG from 'app/assets/images/profile/decore-left.png';
import DECOR_RIGHT_IMG from 'app/assets/images/profile/decore-right.png';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import DotChart from 'app/fuse-layouts/shared-components/DotChart';
import * as Actions from 'app/store/actions/botBoard';
import clsx from 'clsx';

import WidgetCommodityAvatarCrop from './WidgetCommodityAvatarCrop';

// import PeriodSliderCard from '../cards/PeriodSliderCard';
// import ProportionSliderCard from '../cards/ProportionSliderCard';
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

const SelectNewBotProportionAndPeriodSection = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const NEW_BOT_SETTINGS = useSelector(({ botBoard }) => botBoard.newBot.settings);
	const [minProportion, setMinProportion] = useState(NEW_BOT_SETTINGS.botProportion);
	const [period, setPeriod] = useState(NEW_BOT_SETTINGS.botPeriod);
	const [commodityTitle, setCommodityTitle] = useState('');
	const [commodityID, setCommodityID] = useState('');

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
			<div className="w-full flex justify-center sm:px-16 mb-20">
				<div className="w-full p-24 flex flex-col justify-center items-center bg-bgPaper rounded-8 relative">
					<img src={DECOR_LEFT_IMG} alt="card-img-left" className="absolute w-2/5 top-0 left-0" />
					<img src={DECOR_RIGHT_IMG} alt="card-img-right" className="absolute w-2/5 top-0 right-0" />

					<WidgetCommodityAvatarCrop />

					{/* Commodity Title */}
					<div className="w-full mt-20 flex justify-between items-start text-center">
						<Typography className="h2 mb-16">新商品資訊</Typography>
					</div>

					{/* Detail */}
					<div className="w-full flex flex-col justify-center items-center text-center mt-12 mb-20">
						<CssTextField
							label="新商品顯示名稱"
							className="bg-bgDefault rounded-8 mb-20"
							InputProps={{
								inputProps: {
									'aria-label': '新商品顯示名稱'
								},
								defaultValue: commodityTitle,
								endAdornment: (
									<InputAdornment position="end" classes={{ root: 'p-12' }}>
										<User size={18} />
									</InputAdornment>
								)
							}}
							variant="outlined"
							fullWidth
						/>

						<CssTextField
							label="新商品專屬ＩＤ"
							className="bg-bgDefault rounded-8 mb-20"
							InputProps={{
								inputProps: {
									'aria-label': '新商品專屬ＩＤ'
								},
								defaultValue: commodityID,
								endAdornment: (
									<InputAdornment position="end" classes={{ root: 'p-12' }}>
										<Mail size={18} />
									</InputAdornment>
								)
							}}
							variant="outlined"
							fullWidth
						/>
					</div>
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
