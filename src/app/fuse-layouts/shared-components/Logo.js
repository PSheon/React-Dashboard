import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CrownIcon from 'app/assets/images/logo/crown.svg';
import LOGO from 'app/assets/images/logo/logo.svg';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {
		'& .logo-icon': {
			minWidth: 24,
			minHeight: 24,
			maxWidth: 24,
			maxHeight: 24,
			transition: theme.transitions.create(['min-width', 'max-width', 'min-height', 'max-height'], {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		},
		'& .react-badge, & .logo-text': {
			transition: theme.transitions.create('opacity', {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		}
	},
	reactBadge: {
		backgroundColor: theme.palette.background.paper,
		color: '#61DAFB'
	}
}));

function Logo() {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'flex items-center')}>
			<Link to="/" className="logo-icon inline-block" role="button">
				<img src={LOGO} alt="logo" />
			</Link>
			<Typography className="text-16 ml-12 mr-16 font-medium logo-text whitespace-no-wrap" color="textPrimary">
				借貸平台
			</Typography>
			<div className={clsx(classes.reactBadge, 'react-badge flex items-center py-4 px-8 rounded-8')}>
				<img className="react-logo mr-8" src={CrownIcon} alt="Strawberry Icon" width="16" />
				{/* <span className="react-text text-12 mx-8">X</span> */}
				VIP0
			</div>
		</div>
	);
}

export default Logo;
