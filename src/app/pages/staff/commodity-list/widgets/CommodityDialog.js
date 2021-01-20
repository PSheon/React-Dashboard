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
	displayName: '',
	codeName: ''
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

function CommodityDialog(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();
	const commodityInfoDialog = useSelector(({ commodityList }) => commodityList.commodityInfoDialog);

	const { form, handleChange, setForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (commodityInfoDialog.data) {
			setForm({ ...commodityInfoDialog.data });
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
	}, [commodityInfoDialog.data, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (commodityInfoDialog.props.open) {
			initDialog();
		}
	}, [commodityInfoDialog.props.open, initDialog]);

	function closeComposeDialog() {
		dispatch(Actions.closeCommodityInfoDialog());
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

	return (
		<Dialog
			classes={{
				paper: 'm-24 rounded-8 bg-bgPaper'
			}}
			{...commodityInfoDialog.props}
			onClose={closeComposeDialog}
			PaperComponent={PaperComponent}
			scroll="paper"
			fullWidth
			maxWidth="sm"
		>
			<AppBar position="static" elevation={1} id="draggable-dialog" className="mb-24 rounded-8">
				<Toolbar className="flex w-full justify-between cursor-move">
					<Typography variant="subtitle1" color="inherit">
						建立新商品
					</Typography>

					<IconButton
						key="close"
						aria-label="關閉建立商品視窗"
						className="p-12 mr-0 sm:mr-4"
						color="inherit"
						size="small"
						onClick={closeComposeDialog}
						onTouchEnd={closeComposeDialog}
					>
						<XCircle size={18} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<DialogContent classes={{ root: 'px-24 py-12 flex flex-col' }}>
				<Typography className="pb-12 text-gray-300 font-600">
					完整的顯示名稱會加深用戶對商品的第一印象，此欄位不可與其他商品重複
				</Typography>
				<div className="flex items-center pb-24">
					<div className="min-w-48">
						<Icon color="action">account_circle</Icon>
					</div>
					<CssTextField
						className="shadow-lg"
						label="商品顯示名稱"
						id="displayName"
						name="displayName"
						value={form.displayName}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>

				<Typography className="pb-12 text-gray-300 font-600">
					清楚、簡短的代號會加深用戶對商品的記憶，此欄位不可與其他代號重複
				</Typography>
				<div className="flex items-center">
					<div className="min-w-48">
						<Icon color="action">account_circle</Icon>
					</div>
					<CssTextField
						className="shadow-lg"
						label="商品代號"
						autoFocus
						id="codeName"
						name="codeName"
						value={form.codeName}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>
			</DialogContent>
			<DialogActions className="justify-center py-16">
				{/* <IconButton onClick={handleToggleActiveStatus}>
					{form.active ? <Icon>lock</Icon> : <Icon>lock_open</Icon>}
				</IconButton> */}

				<div className="px-16">
					<Button variant="contained" color="primary" onClick={handleSubmit} disabled={!canBeSubmitted()}>
						建立商品
					</Button>
				</div>
			</DialogActions>
		</Dialog>
	);
}

export default CommodityDialog;
