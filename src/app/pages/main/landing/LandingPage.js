import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';

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
			<Header />

			{/* Content */}
			<Main />

			{/* Feature */}
			<div className="w-full sm:w-4/5 flex flex-col items-center justify-center">Feature</div>

			{/* Pricing */}
			<div className="w-full sm:w-4/5 flex flex-col items-center justify-center">Pricing</div>

			{/* Contact */}
			<div className="w-full sm:w-4/5 flex flex-col items-center justify-center">Contract</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default LandingPage;
