import axios from 'axios';

import * as FuseActions from 'app/store/actions/fuse';

export const SET_ME_ACCESS_HISTORY_LOADING = '[ME] SET ACCESS HISTORY LOADING';
export const SET_ME_ACCESS_HISTORY = '[ME] SET ACCESS HISTORY';

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
					options: { message: `網路出現問題` }
				});
			});
	};
}
