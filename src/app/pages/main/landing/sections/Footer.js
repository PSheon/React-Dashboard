import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	backButton: {
		background: theme.palette.primaryGradient
	}
}));

const Footer = () => {
	return <div className="w-full sm:w-5/6 flex justify-between items-center">footer</div>;
};

export default Footer;
