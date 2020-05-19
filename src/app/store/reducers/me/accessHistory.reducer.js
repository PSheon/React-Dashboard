import * as Actions from 'app/store/actions/me/accessHistory.actions';

const initialState = {
	loading: false,
	docs: []
};

const accessHistory = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ME_ACCESS_HISTORY_LOADING: {
			return { ...state, loading: true };
		}
		case Actions.SET_ME_ACCESS_HISTORY: {
			return { ...state, loading: false, docs: action.payload.accessHistory };
		}

		default: {
			return state;
		}
	}
};

export default accessHistory;
