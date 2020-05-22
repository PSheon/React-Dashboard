import axios from 'axios';
import _ from '@lodash';
import * as MessageActions from 'app/store/actions/fuse/message.actions';

export const SET_ME_PROFILE_LOADING = '[PROFILE] SET ME LOADING';
export const SET_ME_PROFILE = '[PROFILE] SET ME DATA';
export const RESET_ME_PROFILE = '[PROFILE] RESET ME DATA';

export function updateProfileMe(me) {
	return dispatch => {
		dispatch({ type: SET_ME_PROFILE_LOADING });
		axios
			.patch('/api/profile', me)
			.then(response => {
				dispatch({ type: SET_ME_PROFILE, payload: { me: response.data } });
			})
			.catch(error => {
				dispatch({
					type: MessageActions.SHOW_MESSAGE,
					options: { message: `網路出現問題` }
				});
			});
	};
}
