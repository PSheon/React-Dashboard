import React, { useState } from 'react';
import { Anchor } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as Actions from 'app/store/actions/botBoard';

import WidgetAvatarSelect from '../widgets/WidgetAvatarSelect';
import WidgetCommodityInformationSetting from '../widgets/WidgetCommodityInformationSetting';
import WidgetCommodityInsightSetting from '../widgets/WidgetCommodityInsightSetting';

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

const SectionGeneralSettings = () => {
	const classes = useStyles();
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
			className="flex flex-col md:flex-row flex-wrap sm:px-8 container"
		>
			<div className="flex w-full md:w-320 lg:w-400">
				<WidgetAvatarSelect />
			</div>

			<div className="flex flex-1 min-w-0">
				<WidgetCommodityInformationSetting />
			</div>

			<div className="flex w-full">
				<WidgetCommodityInsightSetting />
			</div>

			<div className="w-full flex justify-between items-center p-16">
				<Button
					component={Link}
					to="/staff/commodity-list"
					className="rounded-8 font-medium text-14 text-white"
					variant="contained"
					startIcon={<Anchor width={16} />}
					color="primary"
				>
					返回列表
				</Button>

				<Button
					className="rounded-8 font-medium text-14 text-white"
					variant="contained"
					startIcon={<Anchor width={16} />}
					color="primary"
					disabled={period <= 0 || minProportion <= 0}
					onClick={handleSubmitProportionAndPeriod}
				>
					細節設定設定
				</Button>
			</div>
		</FuseAnimateGroup>
	);
};

export default SectionGeneralSettings;
