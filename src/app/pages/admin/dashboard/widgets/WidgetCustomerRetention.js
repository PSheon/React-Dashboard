import React from 'react';
import { ArrowRight } from 'react-feather';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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

const WidgetCustomerRetention = () => {
	const theme = useTheme();
	const classes = useStyles();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div
			className={clsx(
				classes.root,
				'w-full px-24 pt-20 sm:pt-16 flex flex-col justify-center items-center bg-bgPaper rounded-8'
			)}
		>
			{/* Title */}
			<div className="w-full flex justify-between items-center text-center">
				<Typography className="h2">訂單紀錄</Typography>

				<div className="flex justify-center items-center">
					{smUp && (
						<Button className="py-8 px-12 rounded-8" size="small">
							更新方案
						</Button>
					)}
					<Button className="py-8 px-12 rounded-8" size="small">
						新加入戶
					</Button>
					<Button className="py-8 px-12 rounded-8" size="small">
						更新方案
					</Button>
					<IconButton
						aria-label="開啟列表"
						className="py-12 ml-12 sm:ml-16 h-36 p-8"
						color="inherit"
						size="small"
					>
						<ArrowRight size={20} className="cursor-pointer" />
					</IconButton>
				</div>
			</div>

			<Divider className="w-full mt-16 mb-4" />

			{/* Retention */}
			<div className="w-full flex flex-col justify-center items-center text-center mb-20">
				123123123123123 123123123 123123 12312
			</div>
		</div>
	);
};

export default WidgetCustomerRetention;
