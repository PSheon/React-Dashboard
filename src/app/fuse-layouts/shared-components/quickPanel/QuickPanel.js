import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FuseScrollbars from '@fuse/core/FuseScrollbars';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import NavbarFoldedToggleButton from 'app/fuse-layouts/shared-components/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import withReducer from 'app/store/withReducer';
import moment from 'moment';

import * as Actions from './store/actions/index';
import reducer from './store/reducers';

const useStyles = makeStyles(theme => ({
	root: {
		width: 280,
		height: 'calc(100% - 1.8rem)',
		margin: '1.2rem .8rem .6rem 0',
		borderRadius: '.8rem'
	}
}));

function QuickPanel(props) {
	const dispatch = useDispatch();
	const data = useSelector(({ quickPanel }) => quickPanel.data);
	const state = useSelector(({ quickPanel }) => quickPanel.state);

	const classes = useStyles();
	const [checked, setChecked] = useState('notifications');

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	useEffect(() => {
		dispatch(Actions.getQuickPanelData());
	}, [dispatch]);

	return (
		<Drawer
			classes={{ paper: classes.root }}
			open={state}
			anchor="right"
			onClose={ev => dispatch(Actions.toggleQuickPanel())}
		>
			<div className="flex flex-col overflow-hidden h-full">
				<AppBar
					color="primary"
					position="static"
					elevation={0}
					className="flex flex-row items-center flex-shrink h-64 min-h-64 px-12"
				>
					<div className="flex flex-1 mx-8">
						<Typography color="textPrimary" className="text-22">
							通知中心
						</Typography>
					</div>

					{/* <Hidden mdDown>
						<NavbarFoldedToggleButton className="w-40 h-40 p-0" />
					</Hidden> */}

					<Hidden lgUp>
						<NavbarMobileToggleButton className="w-40 h-40 p-0">
							<Icon>close</Icon>
						</NavbarMobileToggleButton>
					</Hidden>
				</AppBar>

				<FuseScrollbars option={{ suppressScrollX: true }}>
					<ListSubheader component="div" className="bg-primary">
						近期公告
					</ListSubheader>
					<div className="mb-0 py-16 px-24">
						<Typography className="mb-12 text-32" color="textSecondary">
							{moment().format('dddd')}
						</Typography>
						<div className="flex">
							<Typography className="leading-none text-32" color="textSecondary">
								{moment().format('DD')}
							</Typography>
							<Typography className="leading-none text-16" color="textSecondary">
								th
							</Typography>
							<Typography className="leading-none text-32" color="textSecondary">
								{moment().format('MMMM')}
							</Typography>
						</div>
					</div>
					<Divider />
					<List>
						<ListSubheader component="div">Events</ListSubheader>
						{data &&
							data.events.map(event => (
								<ListItem key={event.id}>
									<ListItemText primary={event.title} secondary={event.detail} />
								</ListItem>
							))}
					</List>
					<Divider />
					<List>
						<ListSubheader component="div">Notes</ListSubheader>
						{data &&
							data.notes.map(note => (
								<ListItem key={note.id}>
									<ListItemText primary={note.title} secondary={note.detail} />
								</ListItem>
							))}
					</List>
					<Divider />
					<List>
						<ListSubheader component="div">Quick Settings</ListSubheader>
						<ListItem>
							<ListItemIcon className="min-w-40">
								<Icon>notifications</Icon>
							</ListItemIcon>
							<ListItemText primary="Notifications" />
							<ListItemSecondaryAction>
								<Switch
									color="primary"
									onChange={handleToggle('notifications')}
									checked={checked.indexOf('notifications') !== -1}
								/>
							</ListItemSecondaryAction>
						</ListItem>
						<ListItem>
							<ListItemIcon className="min-w-40">
								<Icon>cloud</Icon>
							</ListItemIcon>
							<ListItemText primary="Cloud Sync" />
							<ListItemSecondaryAction>
								<Switch
									color="secondary"
									onChange={handleToggle('cloudSync')}
									checked={checked.indexOf('cloudSync') !== -1}
								/>
							</ListItemSecondaryAction>
						</ListItem>
						<ListItem>
							<ListItemIcon className="min-w-40">
								<Icon>brightness_high</Icon>
							</ListItemIcon>
							<ListItemText primary="Retro Thrusters" />
							<ListItemSecondaryAction>
								<Switch
									color="primary"
									onChange={handleToggle('retroThrusters')}
									checked={checked.indexOf('retroThrusters') !== -1}
								/>
							</ListItemSecondaryAction>
						</ListItem>
					</List>
				</FuseScrollbars>
			</div>
		</Drawer>
	);
}

export default withReducer('quickPanel', reducer)(React.memo(QuickPanel));
