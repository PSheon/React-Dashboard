import jwtService from 'app/services/jwtService';
import * as FuseActions from 'app/store/actions/fuse';

import * as MeActions from './me.actions';
import * as RoleActions from './role.actions';

import history from '@history';
import _ from '@lodash';

export * from './me.actions';
export * from './shortcuts.actions';
export * from './role.actions';
export * from './accessHistory.actions';

/**
 * Set User Data
 */
export function setUserData(userData) {
	return dispatch => {
		/*
			You can redirect the logged-in user to a specific route depending on his role
    */
		dispatch({ type: RoleActions.SET_ME_ROLE_LOADING });
		dispatch({ type: MeActions.SET_ME_PROFILE_LOADING });

		// history.location.state = {
		//     redirectUrl: user.redirectUrl // for example 'apps/academy'
		// }

		/*
			Set User Settings
		*/
		// dispatch(FuseActions.setDefaultSettings(user.data.settings));

		/* Set User Navigation */
		switch (userData.role) {
			case 'trial':
				dispatch({ type: RoleActions.SET_ME_ROLE, payload: { role: 'trial' } });
				break;
			case 'user':
				dispatch({ type: RoleActions.SET_ME_ROLE, payload: { role: 'user' } });
				break;
			case 'staff':
				dispatch({ type: RoleActions.SET_ME_ROLE, payload: { role: 'staff' } });
				dispatch(FuseActions.setStaffNavigation());
				break;
			case 'admin':
				dispatch({ type: RoleActions.SET_ME_ROLE, payload: { role: 'admin' } });
				dispatch(FuseActions.setAdminNavigation());
				break;
			default:
				dispatch(FuseActions.resetNavigation());
				break;
		}

		/*
			Set User Data
		*/
		dispatch({
			type: MeActions.SET_ME_PROFILE,
			payload: { me: userData }
		});
	};
}

/**
 * Update User Settings
 */
export function updateUserSettings(settings) {
	return (dispatch, getState) => {
		const oldUser = getState().auth.user;
		const user = _.merge({}, oldUser, { data: { settings } });

		updateUserData(user, dispatch);

		return dispatch(setUserData(user));
	};
}

/**
 * Update User Shortcuts
 */
export function updateUserShortcuts(shortcuts) {
	return (dispatch, getState) => {
		const { user } = getState().auth;
		const newUser = {
			...user,
			data: {
				...user.data,
				shortcuts
			}
		};

		updateUserData(newUser, dispatch);

		return dispatch(setUserData(newUser));
	};
}

/**
 * Remove User Data
 */
export function removeUserData() {
	return dispatch => {
		dispatch({ type: RoleActions.RESET_ME_ROLE });
		dispatch({ type: MeActions.RESET_ME_PROFILE });
	};
}

/**
 * Logout
 */
export function logoutUserProfile() {
	return (dispatch, getState) => {
		const { user } = getState().auth;

		if (!user.role || user.role.length === 0) {
			// is guest
			return null;
		}

		history.push({
			pathname: '/'
		});

		switch (user.from) {
			// case 'firebase': {
			// 	firebaseService.signOut();
			// 	break;
			// }
			// case 'auth0': {
			// 	auth0Service.logout();
			// 	break;
			// }
			default: {
				jwtService.logout();
			}
		}

		dispatch(FuseActions.setInitialSettings());

		return dispatch(removeUserData());
	};
}

/**
 * Update User Data
 */
function updateUserData(user, dispatch) {
	if (!user.role || user.role.length === 0) {
		// is guest
		return;
	}

	switch (user.from) {
		// case 'firebase': {
		// 	firebaseService
		// 		.updateUserData(user)
		// 		.then(() => {
		// 			dispatch(MessageActions.showMessage({ message: 'User data saved to firebase' }));
		// 		})
		// 		.catch(error => {
		// 			dispatch(MessageActions.showMessage({ message: error.message }));
		// 		});
		// 	break;
		// }
		// case 'auth0': {
		// 	auth0Service
		// 		.updateUserData({
		// 			settings: user.data.settings,
		// 			shortcuts: user.data.shortcuts
		// 		})
		// 		.then(() => {
		// 			dispatch(MessageActions.showMessage({ message: 'User data saved to auth0' }));
		// 		})
		// 		.catch(error => {
		// 			dispatch(MessageActions.showMessage({ message: error.message }));
		// 		});
		// 	break;
		// }
		default: {
			jwtService
				.updateUserData(user)
				.then(() => {
					dispatch(FuseActions.showMessage({ message: 'User data saved with api' }));
				})
				.catch(error => {
					dispatch(FuseActions.showMessage({ message: error.message }));
				});
			break;
		}
	}
}
