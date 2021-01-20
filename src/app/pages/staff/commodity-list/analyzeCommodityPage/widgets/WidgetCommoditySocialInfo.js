import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

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

const WidgetCommoditySocialInfo = props => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="flex justify-center items-center">
				<div className="text-center w-1/2 py-24">
					<p className="text-28 font-semibold mb-4">14,617</p>
					<p className="mb-4 font-300">關注者</p>
				</div>
				<div className="text-center w-1/2 py-24">
					<p className="text-28 font-semibold mb-4">3.37％</p>
					<p className="mb-4 font-300">平均獲利</p>
				</div>
			</div>

			<div className="px-24 pb-28 sm:pb-24 flex flex-col justify-center items-center">
				<Typography className="text-16 font-medium">86 % 投資者看好該產品</Typography>
				<Typography className="font-medium" color="textSecondary">
					交易量增加 4 百分點
				</Typography>
			</div>
		</Card>
	);
};

export default WidgetCommoditySocialInfo;
