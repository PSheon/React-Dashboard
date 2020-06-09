import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Anchor } from 'react-feather';

import * as Actions from 'app/store/actions/botBoard';
import SelectCard from '../cards/SelectCard';

const SelectNewBotPackageAndCurrencySection = () => {
	const dispatch = useDispatch();
	const NEW_BOT_SETTINGS = useSelector(({ botBoard }) => botBoard.newBot.settings);
	const [activePackage, setActivePackage] = useState(NEW_BOT_SETTINGS.botPackage);
	const [activeCurrency, setActiveCurrency] = useState(NEW_BOT_SETTINGS.botCurrency);

	const handleSubmitPackageAndCurrency = event => {
		event.preventDefault();
		dispatch(Actions.submitNewBotPackageAndCurrency({ botPackage: activePackage, botCurrency: activeCurrency }));
	};

	return (
		<FuseAnimateGroup
			enter={{
				animation: 'transition.expandIn'
			}}
			className="flex flex-1 flex-col"
		>
			<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">選擇方案</Typography>

			<div className="flex flex-col sm:flex-row justify-center items-center pb-24">
				<div className="w-full sm:w-1/3 p-16">
					<SelectCard
						active={activePackage === 0}
						selected={activePackage >= 0}
						title="方案一"
						content="$ 9 USD/月"
						iconType="dollar-sign"
						iconColorSchema="primary"
						handleClick={() => setActivePackage(0)}
					/>
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<SelectCard
						active={activePackage === 1}
						selected={activePackage >= 0}
						title="方案二"
						content="$ 12 USD/月"
						iconType="dollar-sign"
						iconColorSchema="primary"
						handleClick={() => setActivePackage(1)}
					/>
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<SelectCard
						active={activePackage === 2}
						selected={activePackage >= 0}
						title="方案三"
						content="$ 18 USD/月"
						iconType="dollar-sign"
						iconColorSchema="primary"
						handleClick={() => setActivePackage(2)}
					/>
				</div>
			</div>

			<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">選擇貨幣</Typography>

			<div className="flex flex-col sm:flex-row justify-center items-center pb-24">
				<div className="w-full sm:w-1/3 p-16">
					<SelectCard
						active={activeCurrency === 0}
						selected={activeCurrency >= 0}
						title="年投報率 12%"
						content="USD"
						iconType="dollar-sign"
						iconColorSchema="primary"
						handleClick={() => setActiveCurrency(0)}
					/>
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<SelectCard
						active={activeCurrency === 1}
						selected={activeCurrency >= 0}
						title="年投報率 8%"
						content="BTC"
						iconType="dollar-sign"
						iconColorSchema="primary"
						handleClick={() => setActiveCurrency(1)}
					/>
				</div>
				<div className="w-full sm:w-1/3 p-16">
					<SelectCard
						active={activeCurrency === 2}
						selected={activeCurrency >= 0}
						title="年投報率 5%"
						content="ETH"
						iconType="dollar-sign"
						iconColorSchema="primary"
						handleClick={() => setActiveCurrency(2)}
					/>
				</div>
			</div>

			<div className="flex justify-between items-center p-16">
				<Button
					component={Link}
					to="/bot-board"
					className="rounded-8 font-medium text-14 text-white"
					variant="contained"
					startIcon={<Anchor width={16} />}
					color="primary"
				>
					回到機器人列表
				</Button>

				<Button
					className="rounded-8 font-medium text-14 text-white"
					variant="contained"
					startIcon={<Anchor width={16} />}
					color="primary"
					disabled={activePackage < 0 || activeCurrency < 0}
					onClick={handleSubmitPackageAndCurrency}
				>
					繼續設定細節
				</Button>
			</div>
		</FuseAnimateGroup>
	);
};

export default SelectNewBotPackageAndCurrencySection;
