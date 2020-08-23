import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { HelpCircle, ArrowUp } from 'react-feather';

import CssLinearProgress from 'app/fuse-layouts/shared-components/CssLinearProgress';

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

const InfoSection = ({ title = '新加入', growing = 13, count = 800 }) => (
	<div className="flex flex-col pb-20">
		<div className="flex justify-between items-start pb-8">
			<div className="flex flex-col justify-start">
				<Typography className="h3 font-300" color="textSecondary">
					{title}
				</Typography>
				<Typography className="h2 font-semibold">{`${growing}%`}</Typography>
			</div>
			<div className="flex flex-col justify-start">
				<Typography className="h3 font-300">
					{count} <ArrowUp size={16} className="inline-block text-green" />
				</Typography>
				<Typography className="h4 font-300">2020/08</Typography>
			</div>
		</div>
		<div className="pt-8">
			<CssLinearProgress colorSchema="primary" percentage={growing} />
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
					<IconButton aria-label="客戶成長率說明" className="h-36 p-8" color="inherit" size="small">
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</IconButton>
				</Tooltip>
			</div>

			<div className="px-20 py-16">
				<InfoSection title="新加入" growing={12} count={7} />
				<InfoSection title="更新合約" growing={40} count={2} />
				<InfoSection title="續約" growing={16} count={6} />
			</div>
		</Card>
	);
}

export default React.memo(WidgetMemberStatistics);
