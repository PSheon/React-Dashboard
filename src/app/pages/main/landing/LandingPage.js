import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Footer from './sections/Footer';
import Header from './sections/Header';
import Main from './sections/Main';
// import Feature from './sections/Feature';
import Pricing from './sections/Pricing';

const useStyles = makeStyles(theme => ({
	root: {
		color: theme.palette.primary.contrastText
	}
}));

function LandingPage() {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-start')}>
			{/* Header */}
			<Header />

			{/* Content */}
			<Main />

			{/* Feature */}
			{/* <Feature /> */}

			{/* Pricing */}
			{/* <Pricing /> */}

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default LandingPage;
