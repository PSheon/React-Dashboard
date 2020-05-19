// import axios from 'axios';

// import * as FuseActions from 'app/store/actions/fuse';

export const SET_ME_ROLE_LOADING = '[ME] SET ROLE LOADING';
export const SET_ME_ROLE = '[ME] SET ROLE';

// TODO
// export function refreshMeRole() {
// 	return dispatch => {
// 		dispatch({ type: SET_ME_ROLE_LOADING });
// 		axios
// 			.post('/api/profile/role')
// 			.then(response => {
// 				dispatch({ type: SET_ME_ROLE, payload: { role: response.data } });
// 			})
// 			.catch(error => {
// 				dispatch({
// 					type: FuseActions.SHOW_MESSAGE,
// 					options: { message: `網路出現問題` }
// 				});
// 			});
// 	};
// }
