import * as Actions from '../actions';

const initialState = {
	loading: false,
	success: false,
	error: {
		global: null,
		memberId: null,
		email: null,
		password: null
	}
};

const register = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_REGISTER_LOADING: {
			return {
				...initialState,
				loading: true
			};
		}
		case Actions.REGISTER_SUCCESS: {
			return {
				...initialState,
				loading: false,
				success: true
			};
		}
		case Actions.REGISTER_ERROR: {
			return {
				success: false,
				loading: false,
				error: action.payload.error
			};
		}
		case Actions.RESET_REGISTER_ALERT: {
			return {
				...state,
				loading: false,
				error: {
					global: null,
					memberId: null,
					email: null,
					password: null
				}
			};
		}
		default: {
			return state;
		}
	}
};

export default register;
