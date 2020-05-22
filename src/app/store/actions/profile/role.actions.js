// import axios from 'axios';

// import * as FuseActions from 'app/store/actions/fuse';

export const SET_ME_ROLE_LOADING = '[PROFILE] SET ME ROLE LOADING';
export const SET_ME_ROLE = '[PROFILE] SET ME ROLE DATA';
export const RESET_ME_ROLE = '[PROFILE] RESET ME ROLE DATA';

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
