import React, { useState } from 'react';
import { XCircle, Mail, Eye, EyeOff } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import AUTH_BG from 'app/assets/images/auth/background.jpg';
import GOOGLE_ICON from 'app/assets/images/auth/google-icon.png';
import LINE_ICON from 'app/assets/images/auth/line-icon.png';
import MARACAS_ICON from 'app/assets/images/auth/maracas-icon.png';
import MOUNTAIN_ICON from 'app/assets/images/auth/mountain-icon.png';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';
import * as AuthActions from 'app/store/actions/auth';
import clsx from 'clsx';

import { isEmailFormValid, isPasswordFormValid } from 'utils';

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
	},
	googleBtn: {
		backgroundColor: '#db4437',
		'&:hover': {
			backgroundColor: lighten('#db4437', 0.1)
		}
	},
	lineBtn: {
		backgroundColor: '#00b900',
		'&:hover': {
			backgroundColor: lighten('#00b900', 0.1)
		}
	},
	loginIconBackground: {
		right: '2.4rem'
	}
}));

function LoginPage() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const LOGIN_STATE = useSelector(({ auth }) => auth.login);
	const [showPassword, setShowPassword] = useState(false);

	const { form, handleChange } = useForm({
		email: 'demo@1788.app',
		password: '!@demo1788',
		remember: true
	});

	function isFormValid() {
		return form.email && form.password && isEmailFormValid(form.email) && isPasswordFormValid(form.password);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(AuthActions.submitLogin(form));
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
							'flex flex-col w-full max-w-sm items-center justify-center'
						)}
						square
						elevation={0}
					>
						<CardContent className="flex flex-col items-center justify-center w-full px-24 py-48 max-w-360">
							<FuseAnimate animation="transition.slideUpIn" delay={300}>
								<div className="flex items-center mb-24 sm:mb-36">
									<img className="logo-icon w-48" src="assets/images/logos/fuse.svg" alt="logo" />
									<div className="border-l-1 mx-4 w-4 h-40" />
									<div>
										<Typography className="text-24 font-800 logo-text" color="inherit">
											登入您的帳號
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

							<div className="w-full flex flex-col justify-around items-center mb-8">
								<Button
									variant="contained"
									className={clsx(
										classes.googleBtn,
										'w-full flex justify-start normal-case px-24 my-6 sm:my-12 text-white'
									)}
								>
									<img src={GOOGLE_ICON} alt="google icon" width={36} height={36} />
									<div className="flex flex-col ml-24 justify-center items-start">
										<Typography className="text-16">使用 Google</Typography>
										<Typography className="text-12" color="textSecondary">
											登入
										</Typography>
									</div>
									<img
										src={MOUNTAIN_ICON}
										alt="mountain decorator"
										width={40}
										className={clsx(classes.loginIconBackground, 'absolute')}
									/>
								</Button>
								<Button
									variant="contained"
									className={clsx(
										classes.lineBtn,
										'w-full flex justify-start normal-case px-24 my-6 sm:my-12 text-white'
									)}
								>
									<img src={LINE_ICON} alt="line icon" width={36} height={36} />
									<div className="flex flex-col ml-24 justify-center items-start">
										<Typography className="text-16">使用 Line</Typography>
										<Typography className="text-12" color="textSecondary">
											登入
										</Typography>
									</div>
									<img
										src={MARACAS_ICON}
										alt="maracas decorator"
										width={40}
										className={clsx(classes.loginIconBackground, 'absolute')}
									/>
								</Button>
							</div>

							<div className="w-full mt-8 mb-16 flex items-center justify-center">
								<Divider className="w-full max-w-96" />
								<span className="mx-8 font-bold">或者</span>
								<Divider className="w-full max-w-96" />
							</div>

							{/* Alert */}
							{!!LOGIN_STATE.error.global && (
								<Grow in={!!LOGIN_STATE.error.global}>
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
										{LOGIN_STATE.error.global}
									</Alert>
								</Grow>
							)}

							<form
								name="loginForm"
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<CssTextField
									className="mb-0 sm:mb-16"
									label="信箱"
									autoFocus
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
											<InputAdornment position="end" classes={{ root: 'p-4 sm:p-12' }}>
												<Mail size={18} />
											</InputAdornment>
										)
									}}
									variant="outlined"
									required
									fullWidth
								/>

								<CssTextField
									className="mb-0 sm:mb-16"
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
												<IconButton
													className="p-4 sm:p-12"
													onClick={() => setShowPassword(!showPassword)}
												>
													{showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
												</IconButton>
											</InputAdornment>
										)
									}}
									variant="outlined"
									required
									fullWidth
								/>

								<div className="flex items-center justify-between">
									<FormControl>
										<FormControlLabel
											control={
												<Checkbox
													name="remember"
													checked={form.remember}
													onChange={handleChange}
												/>
											}
											label="保持登入"
										/>
									</FormControl>

									<Link className="font-medium" to="/forgot-password">
										忘記密碼？
									</Link>
								</div>

								<Button
									type="submit"
									variant="contained"
									color="primary"
									className="w-full mx-auto mt-16"
									aria-label="登入"
									disabled={!isFormValid() || LOGIN_STATE.loading}
								>
									{LOGIN_STATE.loading === true ? <LoadingIcon /> : '登入'}
								</Button>
							</form>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<span className="font-medium">尚未擁有帳號？</span>
								<Link className="font-medium" to="/auth/register">
									加入會員
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

export default LoginPage;
