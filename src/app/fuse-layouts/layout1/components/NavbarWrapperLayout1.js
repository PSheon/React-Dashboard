import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import NavbarMobileToggleFab from 'app/fuse-layouts/shared-components/NavbarMobileToggleFab';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';

import NavbarLayout1 from './NavbarLayout1';

const navbarWidth = 280;

const useStyles = makeStyles(theme => ({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		background: 'linear-gradient(to bottom, rgba(44,48,60,.9) 44%,rgba(44,48,60,.43) 73%,rgba(17,30,70,0))',
		zIndex: 4,
		[theme.breakpoints.up('lg')]: {
			width: navbarWidth,
			minWidth: navbarWidth
		}
	},
	wrapperFolded: {
		[theme.breakpoints.up('lg')]: {
			width: 64,
			minWidth: 64
		},
		backgroundColor: 'rgba(44, 48, 60, .9)'
	},
	navbar: {
		display: 'flex',
		overflow: 'hidden',
		flexDirection: 'column',
		flex: '1 1 auto',
		width: navbarWidth,
		minWidth: navbarWidth,
		backgroundColor: 'rgba(44, 48, 60, .9)',
		height: '100%',
		zIndex: 4,
		transition: theme.transitions.create(['width', 'hight', 'min-width', 'margin', 'border-radius'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.shorter
		}),
		boxShadow: theme.shadows[3]
	},
	mobileNavbar: {
		display: 'flex',
		overflow: 'hidden',
		flexDirection: 'column',
		flex: '1 1 auto',
		width: navbarWidth,
		minWidth: navbarWidth,
		borderRadius: '.8rem',
		zIndex: 4,
		transition: theme.transitions.create(['width', 'min-width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.shorter
		}),
		boxShadow: theme.shadows[3],
		backgroundColor: 'transparent',
		[theme.breakpoints.down('sm')]: {
			height: '100%',
			margin: '0',
			borderRadius: '0'
		}
	},
	left: {
		left: 0
	},
	right: {
		right: 0
	},
	folded: {
		position: 'absolute',
		width: 64,
		minWidth: 64,
		top: 0,
		bottom: 0
	},
	foldedAndOpened: {
		width: navbarWidth,
		minWidth: navbarWidth
	},
	navbarContent: {
		flex: '1 1 auto'
	},
	mobileNavbarContent: {
		flex: '1 1 auto',
		backgroundColor: theme.palette.background.paper
	},
	foldedAndClosed: {
		height: 'calc(100% - 1.8rem)',
		margin: '1.2rem 0 .6rem .8rem',
		borderRadius: '.8rem',
		'& $navbarContent': {
			'& .logo-icon': {
				maxWidth: 32,
				maxHeight: 32,
				minWidth: 32,
				minHeight: 32
			},
			'& .logo-text': {
				opacity: 0
			},
			'& .react-badge': {
				opacity: 0
			},
			'& .list-item-text, & .arrow-icon, & .item-badge': {
				opacity: 0
			},
			'& .list-subheader .list-subheader-text': {
				opacity: 0
			},
			'& .list-subheader:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				minWidth: 16,
				borderTop: '2px solid',
				opacity: 0.2
			},
			'& .collapse-children': {
				display: 'none'
			},
			'& .user': {
				'& .username, & .email': {
					opacity: 0
				},
				'& .avatar': {
					width: 40,
					height: 40,
					top: 32,
					padding: 0
				}
			},
			'& .list-item.active': {
				marginLeft: 12,
				width: 40,
				padding: 12,
				borderRadius: 20,
				'&.square': {
					borderRadius: 0,
					marginLeft: 0,
					paddingLeft: 24,
					width: '100%'
				}
			}
		}
	}
}));

function NavbarWrapperLayout1(props) {
	const dispatch = useDispatch();
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const navbarTheme = useSelector(({ fuse }) => fuse.settings.navbarTheme);
	const navbar = useSelector(({ fuse }) => fuse.navbar);

	const classes = useStyles();

	const { folded } = config.navbar;
	const foldedAndClosed = folded && !navbar.foldedOpen;
	const foldedAndOpened = folded && navbar.foldedOpen;

	return (
		<>
			<ThemeProvider theme={navbarTheme}>
				<div id="fuse-navbar" className={clsx(classes.wrapper, folded && classes.wrapperFolded)}>
					<Hidden mdDown>
						<div
							className={clsx(
								classes.navbar,
								classes[config.navbar.position],
								folded && classes.folded,
								foldedAndOpened && classes.foldedAndOpened,
								foldedAndClosed && classes.foldedAndClosed
							)}
							onMouseEnter={() => foldedAndClosed && dispatch(Actions.navbarOpenFolded())}
							onMouseLeave={() => foldedAndOpened && dispatch(Actions.navbarCloseFolded())}
							style={{ backgroundColor: navbarTheme.palette.background.paper }}
						>
							<NavbarLayout1 className={classes.navbarContent} />
						</div>
					</Hidden>

					<Hidden lgUp>
						<Drawer
							anchor={config.navbar.position}
							variant="temporary"
							open={navbar.mobileOpen}
							classes={{
								paper: classes.mobileNavbar
							}}
							onClose={() => dispatch(Actions.navbarCloseMobile())}
							ModalProps={{
								keepMounted: true // Better open performance on mobile.
							}}
						>
							<NavbarLayout1 className={classes.mobileNavbarContent} />
						</Drawer>
					</Hidden>
				</div>
			</ThemeProvider>

			{config.navbar.display && !config.toolbar.display && (
				<Hidden lgUp>
					<NavbarMobileToggleFab />
				</Hidden>
			)}
		</>
	);
}

export default React.memo(NavbarWrapperLayout1);
