import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Anchor } from 'react-feather';

const useStyles = makeStyles(theme => ({
	backButton: {
		background: theme.palette.primaryGradient
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className="w-full sm:w-5/6 flex justify-between items-center">
			<div className="flex justify-start items-center">
				<Link to="/" className="logo-icon inline-block" role="button">
					<img className="w-48" src="assets/images/logos/fuse.svg" alt="logo" />
				</Link>
				<Typography className="h1 ml-12 mr-16 font-medium logo-text whitespace-no-wrap" color="textPrimary">
					借貸平台
				</Typography>
			</div>

			<Button
				component={Link}
				to="/dashboard"
				variant="contained"
				startIcon={<Anchor width={16} />}
				className={clsx(classes.backButton, 'rounded-8 font-medium text-14 text-white')}
			>
				開始投資
			</Button>
		</div>
	);
};

export default Header;
