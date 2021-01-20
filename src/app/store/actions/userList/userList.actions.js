import * as FuseActions from 'app/store/actions/fuse';
import axios from 'axios';

export const SET_USER_LIST_LOADING = '[USER LIST] SET USER LIST LOADING';
export const SET_USER_LIST = '[USER LIST] SET USER LIST';
export const SET_USER_LIST_ROUTE_PARAMS = '[USER LIST] SET ROUTE PARAMS';
export const TOGGLE_IN_SELECTED_USERS = '[USER LIST] TOGGLE IN SELECTED USERS';
export const SELECT_ALL_USERS = '[USER LIST] SELECT ALL USERS';
export const DESELECT_ALL_USERS = '[USER LIST] DESELECT ALL USERS';
export const OPEN_USER_INFO_DIALOG = '[USER LIST] OPEN USER INFO DIALOG';
export const CLOSE_USER_INFO_DIALOG = '[USER LIST] CLOSE USER INFO DIALOG';
export const UPDATE_USER_PERMISSION = '[USER LIST] UPDATE USER PERMISSION';
export const UPDATE_USER_ACTIVE = '[USER LIST] UPDATE USER ACTIVE';
export const TOGGLE_USER_LIST_FILTER_PANEL = '[USER LIST] TOGGLE FILTER PANEL';
export const DELETE_USER = '[USER LIST] DELETE USER';

export function getUserList(routeParams) {
	/* 
		routeParams
		{
			filter,
			fields,
			page,
			limit,
			sort,
			order
		}
	*/
	const request = axios.get('/api/users', {
		params: routeParams
	});

	return dispatch => {
		dispatch({ type: SET_USER_LIST_LOADING });
		request.then(response => {
			dispatch({
				type: SET_USER_LIST,
				payload: {
					users: response.data.docs,
					routeParams,
					totalPages: response.data.totalPages,
					totalUsers: response.data.totalDocs
				}
			});
		});
	};
}

export function setUserListSearchRouteParams(routeParams) {
	return dispatch => {
		dispatch({
			type: SET_USER_LIST_ROUTE_PARAMS,
			payload: {
				routeParams
			}
		});
	};
}

export function toggleInSelectedUsers(userId) {
	return {
		type: TOGGLE_IN_SELECTED_USERS,
		payload: {
			userId
		}
	};
}

export function selectAllUsers() {
	return {
		type: SELECT_ALL_USERS
	};
}

export function deSelectAllUsers() {
	return {
		type: DESELECT_ALL_USERS
	};
}

export function openUserInfoDialog(data) {
	return {
		type: OPEN_USER_INFO_DIALOG,
		payload: {
			data
		}
	};
}

export function closeUserInfoDialog() {
	return {
		type: CLOSE_USER_INFO_DIALOG
	};
}

export function updateUserPermission({ userId, email, role }) {
	return (dispatch, getState) => {
		const request = axios.patch(`/api/users/permission/${userId}`, {
			email,
			role
		});

		dispatch({ type: SET_USER_LIST_LOADING });

		return request.then(response =>
			/* NOTE */
			// Promise.all([
			//   dispatch({
			//     type: UPDATE_USER_PERMISSION,
			//     payload: {
			//       userId,
			//       role
			//     }
			//   })
			// ]).then(() => dispatch(getUserList(routeParams)))
			dispatch({
				type: UPDATE_USER_PERMISSION,
				payload: {
					userId,
					role
				}
			})
		);
	};
}

export function toggleUserActivation({ userId, email, active }) {
	return (dispatch, getState) => {
		const request = axios.patch(`/api/users/activation/${userId}`, {
			email,
			active
		});

		dispatch({ type: SET_USER_LIST_LOADING });

		return request.then(response => {
			/* NOTE */
			// Promise.all([
			//   dispatch({
			//     type: UPDATE_USER_ACTIVE
			//   }),
			//   dispatch({
			//     type: Actions.CLOSE_DIALOG
			//   })
			// ]).then(() => dispatch(getUserList(routeParams)))
			dispatch({
				type: UPDATE_USER_ACTIVE,
				payload: {
					userId,
					activeAction: active
				}
			});
			dispatch({
				type: FuseActions.SHOW_MESSAGE,
				payload: { options: { message: `更新成功` } }
			});
			dispatch({
				type: FuseActions.CLOSE_DIALOG
			});
		});
	};
}

export function deleteUser({ userId }) {
	return (dispatch, getState) => {
		const request = axios.delete(`/api/users/${userId}`);

		dispatch({ type: SET_USER_LIST_LOADING });

		return request
			.then(response => {
				/* NOTE */
				// Promise.all([
				//   dispatch({
				//     type: UPDATE_USER_ACTIVE
				//   }),
				//   dispatch({
				//     type: Actions.CLOSE_DIALOG
				//   })
				// ]).then(() => dispatch(getUserList(routeParams)))
				dispatch({
					type: DELETE_USER,
					payload: {
						userId
					}
				});
				dispatch({
					type: FuseActions.SHOW_MESSAGE,
					payload: { options: { message: `已刪除使用者` } }
				});
				dispatch({
					type: FuseActions.CLOSE_DIALOG
				});
			})
			.catch(err => {
				dispatch({
					type: FuseActions.SHOW_MESSAGE,
					payload: { options: { message: `刪除使用者時出現錯誤` } }
				});
			});
	};
}

export function deactiveUsers(userIds) {
	return (dispatch, getState) => {
		const { routeParams } = getState().userList;

		const request = axios.post('/api/contacts-app/remove-contacts', {
			userIds
		});

		dispatch({ type: SET_USER_LIST_LOADING });

		return request.then(response =>
			Promise.all([
				dispatch({
					type: DESELECT_ALL_USERS
				})
			]).then(() => dispatch(getUserList(routeParams)))
		);
	};
}

export function toggleUserListFilterPanel() {
	return {
		type: TOGGLE_USER_LIST_FILTER_PANEL
	};
}
