import React from 'react';
import { HelpCircle, ArrowUp } from 'react-feather';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CssLinearProgress from 'app/fuse-layouts/shared-components/CssLinearProgress';
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

const InfoSection = () => (
	<div className="flex flex-col pb-20">
		<div className="flex justify-between items-start pb-8">
			<div className="flex flex-col justify-start">
				<Typography className="h3 font-300" color="textSecondary">
					Google Chrome
				</Typography>
				<Typography className="h2 font-semibold">73%</Typography>
			</div>
			<div className="flex flex-col justify-start">
				<Typography className="h3 font-300">
					800 <ArrowUp size={16} className="inline-block text-green" />
				</Typography>
				<Typography className="h4 font-300">13:16</Typography>
			</div>
		</div>
		<div className="pt-8">
			<CssLinearProgress colorSchema="primary" percentage={73} />
		</div>
	</div>
);

function WidgetMemberStatistics(props) {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="h1 font-medium">客戶成長率</Typography>
				<Tooltip
					arrow
					title="客戶成長率"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<HelpCircle size={20} className="cursor-pointer text-muted" />
				</Tooltip>
			</div>

			<div className="px-20 py-16">
				<InfoSection />
				<InfoSection />
				<InfoSection />
				<InfoSection />
			</div>
		</Card>
	);
}

export default React.memo(WidgetMemberStatistics);
