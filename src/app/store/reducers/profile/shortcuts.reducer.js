import * as Actions from 'app/store/actions/profile';

const initialState = {
	loading: false,

	data: ['bot-board', 'market', 'leader-board', 'referrals']
};

const shortcuts = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ME_SHORTCUTS_LOADING: {
			return { ...state, loading: true };
		}
		case Actions.SET_ME_SHORTCUTS: {
			return { ...state, loading: false, data: action.payload.shortcuts };
		}
		case Actions.RESET_ME_SHORTCUTS: {
			return initialState;
		}

		default: {
			return state;
		}
	}
};

export default shortcuts;
