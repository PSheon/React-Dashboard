import * as ProfileActions from 'app/store/actions/profile';
import * as MessageActions from 'app/store/actions/fuse/message.actions';
import jwtService from 'app/services/jwtService';

export function logoutUser() {
	return dispatch => {
		jwtService.logout();
		dispatch({ type: ProfileActions.RESET_ME_ROLE });
		dispatch({ type: ProfileActions.RESET_ME_PROFILE });
		dispatch({ type: ProfileActions.RESET_ME_ACCESS_HISTORY });
		dispatch(MessageActions.showMessage({ message: '下次再回來喔~' }));
	};
}

export function removeMeData() {
	return dispatch => {
		dispatch({ type: ProfileActions.RESET_ME_ROLE });
		dispatch({ type: ProfileActions.RESET_ME_PROFILE });
		dispatch({ type: ProfileActions.RESET_ME_ACCESS_HISTORY });
		dispatch(MessageActions.showMessage({ message: '使用者資料已清空' }));
	};
}
