import ForgotPasswordPageConfig from './forgot-password/ForgotPasswordPageConfig';
import LockPageConfig from './lock/LockPageConfig';
import LoginPageConfig from './login/LoginPageConfig';
import MailConfirmPageConfig from './mail-confirm/MailConfirmPageConfig';
import RegisterPageConfig from './register/RegisterPageConfig';
import ResetPasswordPageConfig from './reset-password/ResetPasswordPageConfig';

const authConfigs = [
	LoginPageConfig,
	RegisterPageConfig,
	ForgotPasswordPageConfig,
	LockPageConfig,
	MailConfirmPageConfig,
	ResetPasswordPageConfig
];

export default authConfigs;
