import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as authActions from 'app/store/actions/auth';
import clsx from 'clsx';

import { roleConverter } from 'utils';

const AvatarBadge = withStyles(theme => ({
	badge: {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""'
		}
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0
		}
	}
}))(Badge);

const useStyles = makeStyles(theme => ({
	menuItemWrapper: {
		'&:hover': {
			'& $menuItemIconWrapper': {
				paddingLeft: 4
			}
		}
	},
	menuItemIconWrapper: {
		transition: theme.transitions.create('padding', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	}
}));

function UserMenu(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();
	const PROFILE = useSelector(({ profile }) => profile);

	const [userMenu, setUserMenu] = useState(null);

	const userMenuClick = event => {
		setUserMenu(event.currentTarget);
	};

	const userMenuClose = () => {
		setUserMenu(null);
	};

	return (
		<>
			<Button className="h-48 rounded-32 mr-4 sm:mr-8 pr-8 p-0" onClick={userMenuClick}>
				<div className="hidden sm:flex flex-col mx-12 items-end">
					<Typography component="span" className="normal-case font-600 flex">
						{PROFILE.me.data.displayName}
					</Typography>
					<Typography className="text-11 capitalize" color="textSecondary">
						{roleConverter(PROFILE.role.data.toString())}
					</Typography>
				</div>

				<AvatarBadge
					overlap="circle"
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right'
					}}
					variant="dot"
				>
					<div className="border-4 p-2 rounded-full">
						{PROFILE.me.data.photoURL ? (
							<Avatar className="w-36 h-36" alt="user photo" src={PROFILE.me.data.photoURL} />
						) : (
							<Avatar className="w-36 h-36">{PROFILE.me.data.displayName[0]}</Avatar>
						)}
					</div>
				</AvatarBadge>

				<Icon className="text-16 hidden sm:flex ml-8" variant="action">
					keyboard_arrow_down
				</Icon>
			</Button>

			<Popover
				open={Boolean(userMenu)}
				anchorEl={userMenu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={
					{
						// paper: 'py-8'
					}
				}
			>
				{!PROFILE.role.data || PROFILE.role.data.length === 0 ? (
					<>
						<MenuItem
							component={Link}
							to="/auth/login"
							role="button"
							className={clsx(classes.menuItemWrapper)}
						>
							<ListItemIcon className={clsx(classes.menuItemIconWrapper, 'min-w-40')}>
								<Icon>lock</Icon>
							</ListItemIcon>
							<ListItemText primary="登入" />
						</MenuItem>
						<MenuItem
							component={Link}
							to="/auth/register"
							role="button"
							className={clsx(classes.menuItemWrapper)}
						>
							<ListItemIcon className={clsx(classes.menuItemIconWrapper, 'min-w-40')}>
								<Icon>person_add</Icon>
							</ListItemIcon>
							<ListItemText primary="加入會員" />
						</MenuItem>
					</>
				) : (
					<>
						<MenuItem
							component={Link}
							to="/profile"
							onClick={userMenuClose}
							role="button"
							className={clsx(classes.menuItemWrapper)}
						>
							<ListItemIcon className={clsx(classes.menuItemIconWrapper, 'min-w-40')}>
								<Icon>account_circle</Icon>
							</ListItemIcon>
							<ListItemText primary="我的帳號" />
						</MenuItem>
						<MenuItem
							component={Link}
							to="/referrals"
							onClick={userMenuClose}
							role="button"
							className={clsx(classes.menuItemWrapper)}
						>
							<ListItemIcon className={clsx(classes.menuItemIconWrapper, 'min-w-40')}>
								<Icon>people_alt</Icon>
							</ListItemIcon>
							<ListItemText primary="推薦好友" />
						</MenuItem>
						<MenuItem
							onClick={() => {
								dispatch(authActions.logoutUser());
								userMenuClose();
							}}
							// className={clsx(classes.menuItemWrapper)}
						>
							<ListItemIcon className={clsx(classes.menuItemIconWrapper, 'min-w-40')}>
								<Icon>exit_to_app</Icon>
							</ListItemIcon>
							<ListItemText primary="登出" />
						</MenuItem>
					</>
				)}
			</Popover>
		</>
	);
}

export default UserMenu;
