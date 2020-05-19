import * as Actions from '../actions';

const initialState = {
	loading: false,
	success: false,
	error: {
		global: false,
		email: null,
		password: null
	}
};

const login = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_LOGIN_LOADING: {
			return {
				...initialState,
				loading: true
			};
		}
		case Actions.LOGIN_SUCCESS: {
			return {
				...initialState,
				loading: false,
				success: true
			};
		}
		case Actions.LOGIN_ERROR: {
			return {
				loading: false,
				success: false,
				error: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default login;
