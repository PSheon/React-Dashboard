import React, { useCallback, useEffect } from 'react';
import Draggable from 'react-draggable';
import { XCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
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
import clsx from 'clsx';

import * as Actions from './store/actions';

const defaultFormState = {
	id: '',
	photoUrl: 'assets/images/avatars/default.jpg',
	displayName: '',
	mail: '',
	phone: '',
	class: '',
	progress: 0,
	scheme: ''
};

function PaperComponent(props) {
	return (
		<Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
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
	const classes = useStyles();
	const dispatch = useDispatch();
	const contactDialog = useSelector(({ contactsApp }) => contactsApp.contacts.contactDialog);

	const { form, handleChange, setForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (contactDialog.type === 'edit' && contactDialog.data) {
			setForm({ ...contactDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (contactDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...contactDialog.data,
				id: FuseUtils.generateGUID()
			});
		}
	}, [contactDialog.data, contactDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (contactDialog.props.open) {
			initDialog();
		}
	}, [contactDialog.props.open, initDialog]);

	function closeComposeDialog() {
		return contactDialog.type === 'edit'
			? dispatch(Actions.closeEditContactDialog())
			: dispatch(Actions.closeNewContactDialog());
	}

	function canBeSubmitted() {
		return form.displayName.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (contactDialog.type === 'new') {
			dispatch(Actions.addContact(form));
		} else {
			dispatch(Actions.updateContact(form));
		}
		closeComposeDialog();
	}

	function handleRemove() {
		dispatch(Actions.removeContact(form.id));
		closeComposeDialog();
	}

	return (
		<Dialog
			classes={{
				paper: 'm-24 rounded-8 bg-bgDefault'
			}}
			{...contactDialog.props}
			onClose={closeComposeDialog}
			PaperComponent={PaperComponent}
			fullWidth
			maxWidth="md"
		>
			<AppBar position="static" elevation={1} id="draggable-dialog-title" className="mb-48 rounded-8">
				<Toolbar className="flex w-full justify-between">
					<Typography variant="subtitle1" color="inherit">
						{contactDialog.type === 'new' ? 'New Contact' : '編輯用戶'}
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
					{contactDialog.type === 'edit' && (
						<Avatar
							className={clsx(classes.avatarWrapper, 'w-96 h-96 -mb-36')}
							alt="contact avatar"
							src={form.photoUrl}
						/>
					)}
				</div>
			</AppBar>
			<form noValidate onSubmit={handleSubmit} className="flex flex-col md:overflow-hidden">
				<DialogContent classes={{ root: 'p-24' }}>
					<div className="flex">
						<div className="min-w-48 pt-12">
							<Icon color="action">account_circle</Icon>
						</div>
						<CssTextField
							className="mb-24"
							label="用戶名"
							autoFocus
							id="displayName"
							name="displayName"
							value={form.displayName}
							onChange={handleChange}
							variant="outlined"
							required
							fullWidth
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-12">
							<Icon color="action">email</Icon>
						</div>
						<CssTextField
							className="mb-24"
							label="信箱"
							id="mail"
							name="mail"
							value={form.mail}
							onChange={handleChange}
							variant="outlined"
							fullWidth
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-12">
							<Icon color="action">phone</Icon>
						</div>
						<CssTextField
							className="mb-24"
							label="手機"
							id="phone"
							name="phone"
							value={form.phone}
							onChange={handleChange}
							variant="outlined"
							fullWidth
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-12">
							<Icon color="action">emoji_events</Icon>
						</div>
						<CssTextField
							className="mb-24"
							label="階級"
							id="class"
							name="class"
							value={form.class}
							onChange={handleChange}
							variant="outlined"
							fullWidth
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-12">
							<Icon color="action">bar_chart</Icon>
						</div>
						<CssTextField
							className="mb-24"
							label="交易進度"
							id="progress"
							name="progress"
							value={form.progress}
							onChange={handleChange}
							variant="outlined"
							fullWidth
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-12">
							<Icon color="action">local_atm</Icon>
						</div>
						<CssTextField
							className="mb-24"
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

				{contactDialog.type === 'new' ? (
					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button
								variant="contained"
								color="primary"
								onClick={handleSubmit}
								type="submit"
								disabled={!canBeSubmitted()}
							>
								Add
							</Button>
						</div>
					</DialogActions>
				) : (
					<DialogActions className="justify-between p-8">
						<IconButton onClick={handleRemove}>
							<Icon>delete</Icon>
						</IconButton>

						<div className="px-16">
							<Button
								variant="contained"
								color="primary"
								type="submit"
								onClick={handleSubmit}
								disabled={!canBeSubmitted()}
							>
								確定
							</Button>
						</div>
					</DialogActions>
				)}
			</form>
		</Dialog>
	);
}

export default UserDialog;
