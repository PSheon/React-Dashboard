import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {
		// background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function LandingPage() {
	const classes = useStyles();

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto flex-shrink-0 items-center justify-start px-12 md:px-32 pt-24 pb-12'
			)}
		>
			{/* Header */}
			<div className="w-full sm:w-4/5 flex justify-between items-center">
				{/* LOGO */}
				<div className="flex justify-start items-center">
					<Link to="/" className="logo-icon inline-block" role="button">
						<img className="w-48" src="assets/images/logos/fuse.svg" alt="logo" />
					</Link>
					<Typography className="h1 ml-12 mr-16 font-medium logo-text whitespace-no-wrap" color="textPrimary">
						借貸平台
					</Typography>
				</div>

				{/* Start */}
				<div className="w-1/3 flex items-center justify-center">
					<Button>開始投資</Button>
					<Link
						to="/dashboard"
						role="button"
						components={Typography}
						className="text-16 font-medium"
						color="textPrimary"
					>
						開始投資
					</Link>
				</div>
			</div>

			{/* Content */}
			<div className="w-full sm:w-4/5">
				<div className="flex flex-col items-center justify-center pt-200">content</div>
			</div>

			{/* Feature */}
			<div className="w-full sm:w-4/5 flex flex-col items-center justify-center">Feature</div>

			{/* Pricing */}
			<div className="w-full sm:w-4/5 flex flex-col items-center justify-center">Pricing</div>

			{/* Contact */}
			<div className="w-full sm:w-4/5 flex flex-col items-center justify-center">Contract</div>
		</div>
	);
}

export default LandingPage;
