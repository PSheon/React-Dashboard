// import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
// import * as Actions from 'app/store/actions';
import * as ProfileActions from 'app/store/actions/profile';

export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const RESET_LOGIN_ALERT = 'RESET_LOGIN_ALERT';

const ERROR_TABLE = {
	USER_DOES_NOT_EXIST: {
		global: '使用者不存在'
	},
	UNKNOWN_ERROR: { global: '出現未知錯誤' }
};

export function submitLogin({ email, password }) {
	return dispatch => {
		dispatch({ type: SET_LOGIN_LOADING });

		jwtService
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch(ProfileActions.setUserData(user));

				return dispatch({
					type: LOGIN_SUCCESS
				});
			})
			.catch(error => {
				return dispatch({
					type: LOGIN_ERROR,
					payload: { error: ERROR_TABLE[error.msg] }
				});
			});
	};
}

export function resetLoginAlert() {
	return dispatch => {
		dispatch({ type: RESET_LOGIN_ALERT });
	};
}

// export function submitLoginWithFireBase({ username, password }) {
// 	if (!firebaseService.auth) {
// 		console.warn("Firebase Service didn't initialize, check your configuration");

// 		return () => false;
// 	}

// 	return dispatch =>
// 		firebaseService.auth
// 			.signInWithEmailAndPassword(username, password)
// 			.then(() => {
// 				return dispatch({
// 					type: LOGIN_SUCCESS
// 				});
// 			})
// 			.catch(error => {
// 				console.info('error');
// 				const usernameErrorCodes = [
// 					'auth/email-already-in-use',
// 					'auth/invalid-email',
// 					'auth/operation-not-allowed',
// 					'auth/user-not-found',
// 					'auth/user-disabled'
// 				];
// 				const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

// 				const response = {
// 					username: usernameErrorCodes.includes(error.code) ? error.message : null,
// 					password: passwordErrorCodes.includes(error.code) ? error.message : null
// 				};

// 				if (error.code === 'auth/invalid-api-key') {
// 					dispatch(Actions.showMessage({ message: error.message }));
// 				}

// 				return dispatch({
// 					type: LOGIN_ERROR,
// 					payload: response
// 				});
// 			});
// }
