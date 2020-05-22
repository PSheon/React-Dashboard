import * as Actions from 'app/store/actions/profile';

const initialState = {
	loading: false,

	data: [] // guest
};

const role = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ME_ROLE_LOADING: {
			return { ...state, loading: true };
		}
		case Actions.SET_ME_ROLE: {
			return { ...state, loading: false, data: action.payload.role };
		}
		case Actions.RESET_ME_ROLE: {
			return initialState;
		}

		default: {
			return state;
		}
	}
};

export default role;
