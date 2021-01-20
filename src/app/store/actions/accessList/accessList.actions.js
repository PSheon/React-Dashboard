import * as FuseActions from 'app/store/actions/fuse';
import axios from 'axios';

export const SET_ACCESS_LIST_LOADING = '[ACCESS LIST] SET LIST LOADING';
export const SET_ACCESS_LIST = '[ACCESS LIST] SET ACCESS LIST';
export const SET_ACCESS_LIST_ROUTE_PARAMS = '[ACCESS LIST] SET ROUTE PARAMS';
export const TOGGLE_IN_SELECTED_ACCESSES = '[ACCESS LIST] TOGGLE IN SELECTED ACCESSES';
export const SELECT_ALL_ACCESSES = '[ACCESS LIST] SELECT ALL ACCESSES';
export const DESELECT_ALL_ACCESSES = '[ACCESS LIST] DESELECT ALL ACCESSES';
export const TOGGLE_ACCESS_LIST_FILTER_PANEL = '[ACCESS LIST] TOGGLE FILTER PANEL';

export function getAccessList(routeParams) {
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
	const request = axios.get('/api/accesses', {
		params: routeParams
	});

	return dispatch => {
		dispatch({ type: SET_ACCESS_LIST_LOADING });
		request.then(response => {
			dispatch({
				type: SET_ACCESS_LIST,
				payload: {
					accesses: response.data.docs,
					routeParams,
					totalPages: response.data.totalPages,
					totalAccesses: response.data.totalDocs
				}
			});
		});
	};
}

export function setAccessListSearchRouteParams(routeParams) {
	return dispatch => {
		dispatch({
			type: SET_ACCESS_LIST_ROUTE_PARAMS,
			payload: {
				routeParams
			}
		});
	};
}

export function toggleInSelectedAccesses(accessId) {
	return {
		type: TOGGLE_IN_SELECTED_ACCESSES,
		payload: {
			accessId
		}
	};
}

export function selectAllAccesses() {
	return {
		type: SELECT_ALL_ACCESSES
	};
}

export function deSelectAllAccesses() {
	return {
		type: DESELECT_ALL_ACCESSES
	};
}

// export function deleteUser({ userId }) {
// 	return (dispatch, getState) => {
// 		const request = axios.delete(`/api/users/${userId}`);

// 		dispatch({ type: SET_USER_LIST_LOADING });

// 		return request
// 			.then(response => {
// 				/* NOTE */
// 				// Promise.all([
// 				//   dispatch({
// 				//     type: UPDATE_USER_ACTIVE
// 				//   }),
// 				//   dispatch({
// 				//     type: Actions.CLOSE_DIALOG
// 				//   })
// 				// ]).then(() => dispatch(getUserList(routeParams)))
// 				dispatch({
// 					type: DELETE_USER,
// 					payload: {
// 						userId
// 					}
// 				});
// 				dispatch({
// 					type: FuseActions.SHOW_MESSAGE,
// 					payload: { options: { message: `已刪除使用者` } }
// 				});
// 				dispatch({
// 					type: FuseActions.CLOSE_DIALOG
// 				});
// 			})
// 			.catch(err => {
// 				dispatch({
// 					type: FuseActions.SHOW_MESSAGE,
// 					payload: { options: { message: `刪除使用者時出現錯誤` } }
// 				});
// 			});
// 	};
// }
