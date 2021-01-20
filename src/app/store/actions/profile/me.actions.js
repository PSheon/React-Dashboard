import * as MessageActions from 'app/store/actions/fuse/message.actions';
import axios from 'axios';

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
					payload: { options: { message: `網路出現問題` } }
				});
			});
	};
}
