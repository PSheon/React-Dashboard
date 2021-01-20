import React from 'react';
import { XCircle, Bell } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import { amber, blue, green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {},
	base: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.primary
	},
	success: {
		backgroundColor: green[600],
		color: '#FFFFFF'
	},
	error: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.getContrastText(theme.palette.error.dark)
	},
	info: {
		backgroundColor: blue[600],
		color: '#FFFFFF'
	},
	warning: {
		backgroundColor: amber[600],
		color: '#FFFFFF'
	}
}));

const variantIcon = {
	success: 'check_circle',
	warning: 'warning',
	error: 'error_outline',
	info: 'info'
};

function FuseMessage(props) {
	const dispatch = useDispatch();
	const state = useSelector(({ fuse }) => fuse.message.state);
	const options = useSelector(({ fuse }) => fuse.message.options);

	const classes = useStyles();

	return (
		<Snackbar
			{...options}
			open={state}
			onClose={() => dispatch(Actions.hideMessage())}
			classes={{
				root: classes.root
			}}
			ContentProps={{
				variant: 'body2',
				headlineMapping: {
					body1: 'div',
					body2: 'div'
				}
			}}
		>
			<SnackbarContent
				classes={{ message: 'max-w-4/5 sm:max-w-full', action: 'mr-0 pl-0 sm:mr-8 sm:pl-8' }}
				className={clsx(classes.base, classes[options.variant], 'rounded-8 font-medium')}
				message={
					<div className="flex items-center">
						{variantIcon[options.variant] ? (
							<Icon color="inherit">{variantIcon[options.variant]}</Icon>
						) : (
							<Bell size={18} className="mr-12" />
						)}
						<Typography className="mx-8">{options.message}</Typography>
					</div>
				}
				action={[
					<IconButton
						key="close"
						aria-label="關閉通知訊息"
						className="p-12 mr-0 sm:mr-4"
						color="inherit"
						size="small"
						onClick={() => dispatch(Actions.hideMessage())}
					>
						<XCircle size={18} />
					</IconButton>
				]}
			/>
		</Snackbar>
	);
}

export default React.memo(FuseMessage);
