import React from 'react';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Typography from '@material-ui/core/Typography';
import IMAGE from 'app/assets/images/landing/features-split-image-01.png';

const Main = () => {
	return (
		<FuseAnimateGroup
			enter={{
				animation: 'transition.expandIn',
				delay: 150
			}}
			className="w-full flex flex-col items-center justify-center px-24 pt-96 sm:pt-200 pb-48"
		>
			<Typography className="mb-24 text-32 font-semibold text-center">外匯差價合約和加密數字貨幣借貸</Typography>
			<Typography className="mb-24 text-24 text-center" color="textSecondary">
				利用我們先進的工具和功能，控制您的投資風險：探索世界最受歡迎的市場交易，免費即時行情和全天候線上支持。
			</Typography>

			<img src={IMAGE} alt="App Demo" />
		</FuseAnimateGroup>
	);
};

export default Main;
