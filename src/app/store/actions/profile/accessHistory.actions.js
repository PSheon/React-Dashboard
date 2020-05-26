import axios from 'axios';

import * as FuseActions from 'app/store/actions/fuse';

export const SET_ME_ACCESS_HISTORY_LOADING = '[PROFILE] SET ME ACCESS HISTORY LOADING';
export const SET_ME_ACCESS_HISTORY = '[PROFILE] SET ME ACCESS HISTORY DATA';
export const RESET_ME_ACCESS_HISTORY = '[PROFILE] SET ME ACCESS HISTORY DATA';

export function setAccessHistory() {
	return dispatch => {
		dispatch({ type: SET_ME_ACCESS_HISTORY_LOADING });
		axios
			.post('/api/profile/access-history')
			.then(response => {
				dispatch({ type: SET_ME_ACCESS_HISTORY, payload: { accessHistory: response.data } });
			})
			.catch(error => {
				dispatch({
					type: FuseActions.SHOW_MESSAGE,
					payload: { options: { message: `網路出現問題` } }
				});
			});
	};
}
