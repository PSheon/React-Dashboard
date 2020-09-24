import * as Actions from 'app/store/actions/setting';

const initialState = {
	tabIndex: 0
};

const tab = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_SETTING_TAB_INDEX: {
			return { ...state, tabIndex: action.payload.tabIndex };
		}

		default: {
			return state;
		}
	}
};

export default tab;
