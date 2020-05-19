import axios from 'axios';

import * as FuseActions from 'app/store/actions/fuse';

export const SET_ME_PROFILE_LOADING = '[ME] SET PROFILE LOADING';
export const SET_ME_PROFILE = '[ME] SET PROFILE';

export function updateMeProfile(newProfile) {
	return dispatch => {
		dispatch({ type: SET_ME_PROFILE_LOADING });
		axios
			.patch('/api/profile', newProfile)
			.then(response => {
				dispatch({ type: SET_ME_PROFILE, payload: { meProfile: response.data } });
			})
			.catch(error => {
				dispatch({
					type: FuseActions.SHOW_MESSAGE,
					options: { message: `網路出現問題` }
				});
			});
	};
}
