// import * as MessageActions from 'app/store/actions/fuse/message.actions';
// import axios from 'axios';

export const SET_SETTING_TAB_INDEX = '[SETTING] SET TAB INDEX';

export function setSettingTabIndex(tabIndex) {
	return dispatch => {
		dispatch({ type: SET_SETTING_TAB_INDEX, payload: { tabIndex } });
	};
}
