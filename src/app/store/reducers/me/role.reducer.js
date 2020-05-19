import * as Actions from 'app/store/actions/me/role.actions';

const initialState = {
	loading: false,

	data: [] // guest
};

const profile = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ME_ROLE_LOADING: {
			return { ...state, loading: true };
		}
		case Actions.SET_ME_ROLE: {
			return { ...state, loading: false, data: action.payload.role };
		}

		default: {
			return state;
		}
	}
};

export default profile;
