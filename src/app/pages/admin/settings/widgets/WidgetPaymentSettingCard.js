import React, { useState } from 'react';
import { HelpCircle, Monitor, ArrowUp, Smartphone, Tablet, ArrowDown, ChevronDown } from 'react-feather';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
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

function WidgetPaymentSettingCard(props) {
	const classes = useStyles();
	const theme = useTheme(props);

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="h1 font-medium">付款設定</Typography>
				<Tooltip
					arrow
					title="付款設定"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<HelpCircle size={20} className="cursor-pointer text-muted" />
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
}

export default React.memo(WidgetPaymentSettingCard);
