// import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import * as ProfileActions from 'app/store/actions/profile';

export const SET_REGISTER_LOADING = 'SET_REGISTER_LOADING';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const RESET_REGISTER_ALERT = 'RESET_REGISTER_ALERT';

const ERROR_TABLE = {
	DUPLICATE_KEY: {
		global: '使用者ID已經存在'
	},
	EMAIL_ALREADY_EXISTS: {
		global: '信箱已被註冊'
	},
	UNKNOWN_ERROR: { global: '出現未知錯誤' }
};

export function submitRegister({ memberId, email, password }) {
	return dispatch => {
		dispatch({ type: SET_REGISTER_LOADING });

		jwtService
			.createUser({
				memberId,
				email,
				password
			})
			.then(user => {
				dispatch(ProfileActions.setUserData(user));
				return dispatch({
					type: REGISTER_SUCCESS
				});
			})
			.catch(error => {
				return dispatch({
					type: REGISTER_ERROR,
					payload: { error: ERROR_TABLE[error.msg] }
				});
			});
	};
}

export function resetRegisterAlert() {
	return dispatch => {
		dispatch({ type: RESET_REGISTER_ALERT });
	};
}

// export function registerWithFirebase(model) {
// 	if (!firebaseService.auth) {
// 		console.warn("Firebase Service didn't initialize, check your configuration");

// 		return () => false;
// 	}

// 	const { email, password, displayName } = model;
// 	return dispatch =>
// 		firebaseService.auth
// 			.createUserWithEmailAndPassword(email, password)
// 			.then(response => {
// 				dispatch(
// 					ProfileActions.createUserSettingsFirebase({
// 						...response.user,
// 						displayName,
// 						email
// 					})
// 				);

// 				return dispatch({
// 					type: REGISTER_SUCCESS
// 				});
// 			})
// 			.catch(error => {
// 				const usernameErrorCodes = ['auth/operation-not-allowed', 'auth/user-not-found', 'auth/user-disabled'];

// 				const emailErrorCodes = ['auth/email-already-in-use', 'auth/invalid-email'];

// 				const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

// 				const response = {
// 					email: emailErrorCodes.includes(error.code) ? error.message : null,
// 					displayName: usernameErrorCodes.includes(error.code) ? error.message : null,
// 					password: passwordErrorCodes.includes(error.code) ? error.message : null
// 				};

// 				if (error.code === 'auth/invalid-api-key') {
// 					dispatch(Actions.showMessage({ message: error.message }));
// 				}

// 				return dispatch({
// 					type: REGISTER_ERROR,
// 					payload: response
// 				});
// 			});
// }
