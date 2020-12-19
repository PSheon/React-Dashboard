import * as Actions from 'app/store/actions/auth';

const initialState = {
	loading: false,
	success: false,
	errors: {
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
				errors: action.payload.errors
			};
		}
		case Actions.RESET_REGISTER_ALERT: {
			return {
				...state,
				loading: false,
				errors: {
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
