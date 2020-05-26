import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Anchor } from 'react-feather';

import im from 'app/assets/images/landing/features-split-image-01.png';

const useStyles = makeStyles(theme => ({
	backButton: {
		background: theme.palette.primaryGradient
	}
}));

const Main = () => {
	const classes = useStyles();
	return (
		<div className="w-full sm:w-5/6 flex flex-col items-center justify-center pt-96 pb-48">
			<Typography className="mb-12 text-48 font-semibold text-center">放貸平台</Typography>
			<Typography className="mb-12 text-24 text-center" color="textSecondary">
				Our landing page template works on all devices, so you only have to set it up once, and get beautiful
				results forever.
			</Typography>

			<div className="flex flex-col sm:flex-row justify-center items-center mb-32">
				<Button
					component={Link}
					to="/dashboard"
					variant="contained"
					startIcon={<Anchor width={16} />}
					className={clsx(classes.backButton, 'rounded-8 font-medium text-14 text-white mx-12')}
				>
					開始投資
				</Button>
				<Button
					component={Link}
					to="/dashboard"
					variant="contained"
					startIcon={<Anchor width={16} />}
					className={clsx(classes.backButton, 'rounded-8 font-medium text-14 text-white mx-12')}
				>
					開始投資
				</Button>
			</div>

			<img src={im} alt="123" />
		</div>
	);
};

export default Main;
