import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '@fuse/hooks';
import clsx from 'clsx';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Mail, Eye, EyeOff } from 'react-feather';

import * as AuthActions from 'app/auth/store/actions';
import { isEmailFormValid, isPasswordFormValid } from 'utils';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';

const useStyles = makeStyles(theme => ({
	root: {
		// background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
		// 	theme.palette.primary.dark,
		// 	0.5
		// )} 100%)`,
		background: 'url(assets/images/auth/money-tool.png)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		color: theme.palette.primary.contrastText
	}
}));

function LoginPage() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const LOGIN_STATE = useSelector(({ auth }) => auth.login);
	const [alertOpen, setAlertOpen] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	const { form, handleChange } = useForm({
		email: '',
		password: '',
		remember: true
	});

	function isFormValid() {
		return isEmailFormValid(form.email) && isPasswordFormValid(form.password);
	}

	function handleSubmit(event) {
		event.preventDefault();

		dispatch(AuthActions.submitLogin(form));
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
					<CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-88 rounded-8 sm:rounded-0">
						<Typography variant="h1" className="h1 font-medium md:w-full mb-32 text-center">
							登入您的帳號
						</Typography>

						<div className="w-full sm:w-4/5 flex justify-around items-center mb-8">
							<Button variant="contained" color="secondary" size="small" className="normal-case p-12">
								使用 Google 登入
							</Button>
							<Button variant="contained" color="primary" size="small" className="normal-case p-12">
								使用 Line 登入
							</Button>
						</div>

						<div className="w-full my-24 flex items-center justify-center">
							<Divider className="w-full max-w-96" />
							<span className="mx-8 font-bold">或者</span>
							<Divider className="w-full max-w-96" />
						</div>

						{/* Alert */}
						<Grow in={alertOpen}>
							<Alert
								className="mb-20 rounded-16 w-full"
								severity="error"
								action={
									<IconButton
										aria-label="close"
										color="inherit"
										size="small"
										onClick={() => {
											setAlertOpen(false);
										}}
									>
										<CloseIcon fontSize="inherit" />
									</IconButton>
								}
							>
								Close me!
							</Alert>
						</Grow>

						<form name="loginForm" className="flex flex-col justify-center w-full" onSubmit={handleSubmit}>
							<CssTextField
								className="mb-16"
								label="信箱"
								autoFocus
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								error={!isEmailFormValid(form.email)}
								helperText={
									!isEmailFormValid(form.email) && (
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
									!isPasswordFormValid(form.password) && (
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

							<div className="flex items-center justify-between">
								<FormControl>
									<FormControlLabel
										control={
											<Checkbox name="remember" checked={form.remember} onChange={handleChange} />
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
			</FuseAnimate>
		</div>
	);
}

export default LoginPage;
