import React, { useState } from 'react';
import { HelpCircle, Monitor, ArrowUp, Smartphone, Tablet, ArrowDown, ChevronDown } from 'react-feather';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
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

const WidgetCommodityTrader = props => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="text-20 font-medium">投資者</Typography>
				<Tooltip
					arrow
					title="投資者"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<IconButton aria-label="投資者" className="h-36 p-8" color="inherit" size="small">
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</IconButton>
				</Tooltip>
			</div>

			<List className="">
				<ListItem>
					<ListItemAvatar>
						<Monitor size="32" className="m-4 text-danger" />
					</ListItemAvatar>
					<ListItemText primary="系統維護通知" secondary="Jan 9, 2020" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Monitor size="32" className="m-4 text-danger" />
					</ListItemAvatar>
					<ListItemText primary="系統維護通知" secondary="Jan 9, 2020" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Monitor size="32" className="m-4 text-danger" />
					</ListItemAvatar>
					<ListItemText primary="系統維護通知" secondary="Jan 9, 2020" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Monitor size="32" className="m-4 text-danger" />
					</ListItemAvatar>
					<ListItemText primary="Photos" secondary="Jan 9, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Monitor size="32" className="m-4 text-danger" />
					</ListItemAvatar>
					<ListItemText primary="Photos" secondary="Jan 9, 2014" />
				</ListItem>
			</List>
		</Card>
	);
};

export default WidgetCommodityTrader;
