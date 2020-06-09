import React from 'react';
import Typography from '@material-ui/core/Typography';

export const renderNewBotPackage = botPackage => {
	switch (botPackage) {
		case 0:
			return (
				<Typography className="h2 font-semibold" color="textPrimary">
					$9 USD/月
				</Typography>
			);
		case 1:
			return (
				<Typography className="h2 font-semibold" color="textPrimary">
					$12 USD/月
				</Typography>
			);
		case 2:
			return (
				<Typography className="h2 font-semibold" color="textPrimary">
					$18 USD/月
				</Typography>
			);
		default:
			return (
				<Typography className="h2" color="textSecondary">
					-
				</Typography>
			);
	}
};
export const renderNewBotCurrency = botCurrency => {
	switch (botCurrency) {
		case 0:
			return (
				<Typography className="h2 font-semibold" color="textPrimary">
					USD
				</Typography>
			);
		case 1:
			return (
				<Typography className="h2 font-semibold" color="textPrimary">
					BTC
				</Typography>
			);
		case 2:
			return (
				<Typography className="h2 font-semibold" color="textPrimary">
					ETH
				</Typography>
			);
		default:
			return (
				<Typography className="h2" color="textSecondary">
					-
				</Typography>
			);
	}
};
export const renderNewBotProportion = botProportion => {
	if (botProportion > 0) {
		return (
			<Typography className="h2 font-semibold" color="textPrimary">
				{`${botProportion} %`}
			</Typography>
		);
	}
	return (
		<Typography className="h2" color="textSecondary">
			-
		</Typography>
	);
};
export const renderNewBotPeriod = botPeriod => {
	if (botPeriod > 0) {
		return (
			<Typography className="h2 font-semibold" color="textPrimary">
				{`${botPeriod} 天`}
			</Typography>
		);
	}
	return (
		<Typography className="h2" color="textSecondary">
			-
		</Typography>
	);
};
