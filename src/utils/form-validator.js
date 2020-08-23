import validator from 'validator';

export const isMemberIdFormValid = memberId => {
	const { length: LENGTH } = memberId;

	if (LENGTH) {
		if (LENGTH < 5 || LENGTH > 15) {
			return false;
		}
		if (!validator.isAlphanumeric(memberId)) {
			return false;
		}
	}
	return true;
};

export const isEmailFormValid = email => {
	const { length: LENGTH } = email;

	if (LENGTH) {
		if (!validator.isEmail(email)) {
			return false;
		}
	}
	return true;
};

export const isPasswordFormValid = password => {
	const { length: LENGTH } = password;

	if (LENGTH) {
		if (LENGTH < 8 || LENGTH > 15) {
			return false;
		}
		if (!new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).test(password)) {
			return false;
		}
	}
	return true;
};

export const isConfirmPasswordFormValid = (password, confirmPassword) => {
	if (password !== confirmPassword) {
		return false;
	}
	return true;
};
