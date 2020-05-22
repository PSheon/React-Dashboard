import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '@fuse/hooks';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Grow from '@material-ui/core/Grow';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { XCircle, Meh, Smile, Mail, Eye, EyeOff } from 'react-feather';

import * as AuthActions from 'app/store/actions/auth';
import { isMemberIdFormValid, isEmailFormValid, isPasswordFormValid, isConfirmPasswordFormValid } from 'utils';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';

const useStyles = makeStyles(theme => ({
	root: {
		background: 'url(assets/images/auth/money-tool.png)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		color: theme.palette.primary.contrastText
	}
}));

function RegisterPage() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const REGISTER_STATE = useSelector(({ auth }) => auth.register);
	const [showPassword, setShowPassword] = useState(false);

	const { form, handleChange } = useForm({
		memberId: '',
		email: '',
		password: '',
		passwordConfirm: '',
		acceptTermsConditions: false
	});

	function isFormValid() {
		return (
			form.memberId &&
			form.email &&
			form.password &&
			form.acceptTermsConditions &&
			isMemberIdFormValid(form.memberId) &&
			isEmailFormValid(form.email) &&
			isPasswordFormValid(form.password) &&
			isConfirmPasswordFormValid(form.password, form.passwordConfirm)
		);
	}

	function handleSubmit(ev) {
		ev.preventDefault();

		dispatch(AuthActions.submitRegister(form));
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0')}>
			<div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
				<FuseAnimate animation="transition.expandIn">
					<img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo" />
				</FuseAnimate>

				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<Typography variant="h3" color="inherit" className="font-light">
						這一頁還要修!
					</Typography>
				</FuseAnimate>
			</div>

			<FuseAnimate animation={{ translateX: [0, '100%'] }}>
				<Card className="w-full max-w-512 mx-auto m-16 md:m-0 rounded-8 sm:rounded-0">
					<CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
						<Typography variant="h1" className="h1 font-medium md:w-full mb-32 text-center">
							建立帳號
						</Typography>

						<div className="w-full sm:w-4/5 flex justify-around items-center mb-8">
							<Button
								variant="contained"
								color="secondary"
								size="small"
								className="flex-1 mx-12 p-12 normal-case"
							>
								使用 Google 登入
							</Button>
							<Button
								variant="contained"
								color="primary"
								size="small"
								className="flex-1 mx-12 p-12 normal-case"
							>
								使用 Line 登入
							</Button>
						</div>

						<div className="w-full my-24 flex items-center justify-center">
							<Divider className="w-full max-w-96" />
							<span className="mx-8 font-bold">或者</span>
							<Divider className="w-full max-w-96" />
						</div>

						{/* Alert */}
						{!!REGISTER_STATE.error.global && (
							<Grow in={!!REGISTER_STATE.error.global}>
								<Alert
									className="mb-20 rounded-16 w-full"
									severity="error"
									action={
										<IconButton
											aria-label="close"
											className="p-12 mr-4"
											color="inherit"
											size="small"
											onClick={() => {
												dispatch(AuthActions.resetRegisterAlert());
											}}
										>
											<XCircle size={18} />
										</IconButton>
									}
								>
									{REGISTER_STATE.error.global}
								</Alert>
							</Grow>
						)}

						<form
							name="registerForm"
							className="flex flex-col justify-center w-full"
							onSubmit={handleSubmit}
						>
							<CssTextField
								className="mb-16"
								label="會員 ID"
								autoFocus
								type="memberId"
								name="memberId"
								value={form.memberId}
								onChange={handleChange}
								error={!isMemberIdFormValid(form.memberId)}
								helperText={
									isMemberIdFormValid(form.memberId) ? (
										<span className="block min-h-24" />
									) : (
										<FuseAnimate animation="transition.expandIn">
											<Typography component="span">會員 ID 需為 5 ~ 15 位英文或數字.</Typography>
										</FuseAnimate>
									)
								}
								InputProps={{
									inputProps: {
										'aria-label': '請輸入您的會員 ID'
									},
									placeholder: '請輸入您的會員 ID',
									endAdornment: (
										<InputAdornment position="end" classes={{ root: 'p-12' }}>
											{isMemberIdFormValid(form.memberId) ? (
												<Smile size={18} />
											) : (
												<Meh size={18} />
											)}
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
								fullWidth
							/>

							<CssTextField
								className="mb-16"
								label="信箱"
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								error={!isEmailFormValid(form.email)}
								helperText={
									isEmailFormValid(form.email) ? (
										<span className="block min-h-24" />
									) : (
										<FuseAnimate animation="transition.expandIn">
											<Typography component="span">請輸入正確的信箱.</Typography>
										</FuseAnimate>
									)
								}
								InputProps={{
									inputProps: {
										'aria-label': '請輸入您的信箱'
									},
									placeholder: '使用信箱登入',
									endAdornment: (
										<InputAdornment position="end" classes={{ root: 'p-12' }}>
											<Mail size={18} />
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
								fullWidth
							/>

							<CssTextField
								className="mb-16"
								label="密碼"
								type="password"
								name="password"
								value={form.password}
								onChange={handleChange}
								error={!isPasswordFormValid(form.password)}
								helperText={
									isPasswordFormValid(form.password) ? (
										<span className="block min-h-24" />
									) : (
										<FuseAnimate animation="transition.expandIn">
											<Typography component="span">密碼須包含8~15個英文或數字.</Typography>
										</FuseAnimate>
									)
								}
								InputProps={{
									inputProps: {
										'aria-label': '請輸入您的密碼'
									},
									placeholder: '輸入您的密碼',
									type: showPassword ? 'text' : 'password',
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={() => setShowPassword(!showPassword)}>
												{showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
											</IconButton>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
								fullWidth
							/>

							<CssTextField
								className="mb-16"
								label="確認密碼"
								type="password"
								name="passwordConfirm"
								value={form.passwordConfirm}
								onChange={handleChange}
								error={!isConfirmPasswordFormValid(form.password, form.passwordConfirm)}
								helperText={
									isConfirmPasswordFormValid(form.password, form.passwordConfirm) ? (
										<span className="block min-h-24" />
									) : (
										<FuseAnimate animation="transition.expandIn">
											<Typography component="span">兩次輸入的密碼不相同.</Typography>
										</FuseAnimate>
									)
								}
								InputProps={{
									inputProps: {
										'aria-label': '請輸入您的密碼'
									},
									placeholder: '輸入您的密碼',
									type: showPassword ? 'text' : 'password',
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={() => setShowPassword(!showPassword)}>
												{showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
											</IconButton>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
								fullWidth
							/>

							<FormControl className="items-center">
								<FormControlLabel
									control={
										<Checkbox
											name="acceptTermsConditions"
											checked={form.acceptTermsConditions}
											onChange={handleChange}
										/>
									}
									label="我已閱讀並同意 服務條款"
								/>
							</FormControl>

							<Button
								type="submit"
								variant="contained"
								color="primary"
								className="w-full mx-auto mt-16"
								aria-label="建立帳號"
								disabled={!isFormValid() || REGISTER_STATE.loading}
							>
								{REGISTER_STATE.loading === true ? <LoadingIcon /> : '建立帳號'}
							</Button>
						</form>

						<div className="flex flex-col items-center justify-center pt-32 pb-24">
							<span className="font-medium">已有帳號？</span>
							<Link className="font-medium focus:font-black" to="/auth/login">
								登入
							</Link>
						</div>
					</CardContent>
				</Card>
			</FuseAnimate>
		</div>
	);
}

export default RegisterPage;
