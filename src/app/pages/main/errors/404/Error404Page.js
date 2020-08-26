import React from 'react';
import { Anchor } from 'react-feather';
import { Link } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import Header from '../sections/Header';

const useStyles = makeStyles(theme => ({
	backButton: {
		background: theme.palette.primaryGradient
	}
}));

function Error404Page() {
	const classes = useStyles();

	return (
		<div className="flex flex-col flex-1 items-center justify-center py-16 px-24">
			<Header />

			<div className="max-w-512 text-center mt-24">
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<Typography variant="h1" color="inherit" className="font-medium mb-16">
						404
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={300}>
					<Typography variant="h5" color="textSecondary" className="mb-16">
						很抱歉
					</Typography>
				</FuseAnimate>
				<FuseAnimate delay={500}>
					<Typography variant="h5" color="textSecondary" className="mb-14">
						我們無法找到您要找的頁面
					</Typography>
				</FuseAnimate>

				<Button
					component={Link}
					to="/dashboard"
					variant="contained"
					startIcon={<Anchor width={16} />}
					className={clsx(classes.backButton, 'rounded-8 font-medium text-14 text-white my-36')}
				>
					返回首頁
				</Button>
			</div>
		</div>
	);
}

export default Error404Page;
