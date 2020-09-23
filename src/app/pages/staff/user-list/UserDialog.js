import React, { useCallback, useEffect } from 'react';
import Draggable from 'react-draggable';
import { XCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '@fuse/hooks';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';

const defaultFormState = {
	memberId: '',
	photoUrl: 'assets/images/avatars/default.jpg',
	displayName: '',
	email: '',
	phone: '',
	class: '',
	progress: 0,
	scheme: '',
	active: true,
	createAt: new Date(),
	updatedAt: new Date()
};

function PaperComponent(props) {
	return (
		<Draggable handle="#draggable-dialog" cancel={'[class*="MuiDialogContent-root"]'}>
			<Paper {...props} />
		</Draggable>
	);
}

const useStyles = makeStyles(theme => ({
	avatarWrapper: {
		boxShadow: `0 0 0 12px ${theme.palette.background.default}`
	}
}));

function UserDialog(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();
	const userInfoDialog = useSelector(({ userList }) => userList.userInfoDialog);

	const { form, handleChange, setForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (userInfoDialog.data) {
			setForm({ ...userInfoDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		// if (userInfoDialog.type === 'new') {
		// 	setForm({
		// 		...defaultFormState,
		// 		...userInfoDialog.data,
		// 		id: FuseUtils.generateGUID()
		// 	});
		// }
	}, [userInfoDialog.data, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (userInfoDialog.props.open) {
			initDialog();
		}
	}, [userInfoDialog.props.open, initDialog]);

	function closeComposeDialog() {
		dispatch(Actions.closeUserInfoDialog());
	}

	function canBeSubmitted() {
		// return form.displayName.length > 0;
		return form.displayName && form.displayName.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();

		// dispatch(Actions.updateContact(form));
		closeComposeDialog();
	}

	function handleToggleActiveStatus() {
		// dispatch(Actions.setUserActiveStatus(form.memberId, !form.active));
		closeComposeDialog();
	}

	return (
		<Dialog
			classes={{
				paper: 'm-24 rounded-8 bg-bgDefault'
			}}
			{...userInfoDialog.props}
			onClose={closeComposeDialog}
			PaperComponent={PaperComponent}
			scroll="paper"
			fullWidth
			maxWidth="md"
		>
			<AppBar position="static" elevation={1} id="draggable-dialog" className="mb-24 rounded-8">
				<Toolbar className="flex w-full justify-between cursor-move">
					<Typography variant="subtitle1" color="inherit">
						{userInfoDialog.type === 'new' ? 'New Contact' : '編輯用戶'}
					</Typography>

					<IconButton
						key="close"
						aria-label="關閉編輯頁面"
						className="p-12 mr-0 sm:mr-4"
						color="inherit"
						size="small"
						// TODO fix close bug
						onClick={closeComposeDialog}
					>
						<XCircle size={18} />
					</IconButton>
				</Toolbar>
				<div className="flex flex-col items-center justify-center">
					<Avatar
						className={clsx(classes.avatarWrapper, 'w-64 h-64 -mb-24')}
						alt="user avatar"
						src={form.photoUrl}
					/>
				</div>
			</AppBar>
			<DialogContent classes={{ root: 'px-24 py-12 flex flex-col md:overflow-hidden' }}>
				<div className="flex items-center py-12">
					<div className="min-w-48">
						<Icon color="action">account_circle</Icon>
					</div>
					<CssTextField
						className=""
						label="戶名"
						id="memberId"
						name="memberId"
						value={form.memberId}
						variant="outlined"
						InputProps={{
							readOnly: true
						}}
						fullWidth
					/>
				</div>

				<div className="flex items-center py-12">
					<div className="min-w-48">
						<Icon color="action">account_circle</Icon>
					</div>
					<CssTextField
						className=""
						label="顯示名稱"
						autoFocus
						id="displayName"
						name="displayName"
						value={form.displayName}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>

				<div className="flex items-center py-12">
					<div className="min-w-48">
						<Icon color="action">email</Icon>
					</div>
					<CssTextField
						className=""
						label="信箱"
						id="mail"
						name="mail"
						value={form.email}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>

				<div className="flex items-center py-12">
					<div className="min-w-48">
						<Icon color="action">phone</Icon>
					</div>
					<CssTextField
						className=""
						label="手機"
						id="phone"
						name="phone"
						value={form.phone}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>

				<div className="flex items-center py-12">
					<div className="min-w-48">
						<Icon color="action">emoji_events</Icon>
					</div>
					<CssTextField
						className=""
						label="階級"
						id="class"
						name="class"
						value={form.class}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>

				<div className="flex items-center py-12">
					<div className="min-w-48">
						<Icon color="action">bar_chart</Icon>
					</div>
					<CssTextField
						className=""
						label="交易進度"
						id="progress"
						name="progress"
						value={form.progress}
						variant="outlined"
						fullWidth
					/>
				</div>

				<div className="flex items-center py-12">
					<div className="min-w-48">
						<Icon color="action">local_atm</Icon>
					</div>
					<CssTextField
						className=""
						label="方案"
						id="scheme"
						name="scheme"
						value={form.scheme}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>
			</DialogContent>
			<DialogActions className="justify-between p-8">
				<IconButton onClick={handleToggleActiveStatus}>
					{form.active ? <Icon>lock</Icon> : <Icon>lock_open</Icon>}
				</IconButton>

				<div className="px-16">
					<Button variant="contained" color="primary" onClick={handleSubmit} disabled={!canBeSubmitted()}>
						確定
					</Button>
				</div>
			</DialogActions>
		</Dialog>
	);
}

export default UserDialog;
