import React, { useState } from 'react';
import { Meh, Smile, Mail, Eye, EyeOff, XCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import AUTH_BG from 'app/assets/images/auth/background.jpg';
import LOGO from 'app/assets/images/logo/new-logo.svg';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';
import * as AuthActions from 'app/store/actions/auth';
import clsx from 'clsx';

import { isMemberIdFormValid, isEmailFormValid, isPasswordFormValid, isConfirmPasswordFormValid } from 'utils';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '90vh',
		maxHeight: '100vh',
		color: theme.palette.primary.contrastText,
		background: `linear-gradient(to right, ${theme.palette.background.default} 0%, ${darken(
			theme.palette.background.default,
			0.5
		)} 100%)`
	},
	leftSection: {},
	rightSection: {
		background: `url(${AUTH_BG})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
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
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<FuseAnimate animation="transition.expandIn">
				<div className="flex w-full max-w-400 md:max-w-3xl rounded-12 shadow-2xl overflow-hidden">
					<Card
						className={clsx(
							classes.leftSection,
							'flex flex-col w-full max-w-sm items-center justify-center overflow-y-scroll'
						)}
						square
						elevation={0}
					>
						<CardContent className="flex flex-col items-center justify-center w-full py-36 max-w-360">
							<FuseAnimate animation="transition.slideUpIn" delay={300}>
								<div className="flex items-center mb-24 sm:mb-48">
									<img className="logo-icon w-48" src={LOGO} alt="logo" />
									<div className="border-l-1 mx-4 w-4 h-40" />
									<div>
										<Typography className="text-24 font-800 logo-text" color="inherit">
											建立帳號
										</Typography>
										<Typography
											className="text-16 tracking-widest -mt-8 font-700"
											color="textSecondary"
										>
											借貸平台
										</Typography>
									</div>
								</div>
							</FuseAnimate>

							{/* Alert */}
							{!!REGISTER_STATE.errors.global && (
								<Grow in={!!REGISTER_STATE.errors.global}>
									<Alert
										className="w-full flex items-center mb-24 rounded-16"
										severity="error"
										action={
											<IconButton
												aria-label="close"
												className="p-12 mr-4"
												color="inherit"
												size="small"
												onClick={() => {
													dispatch(AuthActions.resetLoginAlert());
												}}
											>
												<XCircle size={18} />
											</IconButton>
										}
									>
										{REGISTER_STATE.errors.global}
									</Alert>
								</Grow>
							)}

							<form
								name="registerForm"
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<CssTextField
									className="mb-0 sm:mb-12"
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
												<Typography component="span">
													會員 ID 需為 5 ~ 15 位英文或數字.
												</Typography>
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
									className="mb-0 sm:mb-12"
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
									className="mb-0 sm:mb-12"
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
												<Typography component="span">
													密碼須包含8~15個英文、數字、特殊字元.
												</Typography>
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
									className="mb-0"
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

							<div className="flex flex-col items-center justify-center pb-0 pt-24 sm:pt-32">
								<span className="font-medium">已有帳號？</span>
								<Link className="font-medium focus:font-black" to="/auth/login">
									登入
								</Link>
							</div>
						</CardContent>
					</Card>

					<div
						className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}
					>
						<div className="max-w-320">
							<FuseAnimate animation="transition.slideUpIn" delay={400}>
								<Typography variant="h3" color="inherit" className="font-800 leading-tight">
									歡迎使用 <br />
									虛擬貨幣 <br /> 借貸平台!
								</Typography>
							</FuseAnimate>

							<FuseAnimate delay={500}>
								<Typography variant="subtitle1" color="inherit" className="mt-32">
									Powerful and professional admin template for Web Applications, CRM, CMS, Admin
									Panels and more.
								</Typography>
							</FuseAnimate>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default RegisterPage;
