import * as Actions from 'app/store/actions/profile';

const initialState = {
	loading: false,

	data: []
};

const accessHistory = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ME_ACCESS_HISTORY_LOADING: {
			return { ...state, loading: true };
		}
		case Actions.SET_ME_ACCESS_HISTORY: {
			return { ...state, loading: false, data: action.payload.accessHistory };
		}
		case Actions.RESET_ME_ACCESS_HISTORY: {
			return initialState;
		}

		default: {
			return state;
		}
	}
};

export default accessHistory;
