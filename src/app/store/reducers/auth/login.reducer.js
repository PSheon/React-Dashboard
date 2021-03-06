import * as Actions from 'app/store/actions/auth';

const initialState = {
	loading: false,
	success: false,
	errors: {
		global: null,
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
				...state,
				loading: false,
				success: false,
				errors: action.payload.errors
			};
		}
		case Actions.RESET_LOGIN_ALERT: {
			return {
				...state,
				loading: false,
				errors: {
					global: null,
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

export default login;
