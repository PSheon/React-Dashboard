import * as Actions from '../actions';

const initialState = {
	role: [], // guest
	data: {
		displayName: 'Paul Jiang',
		// photoURL: 'assets/images/avatars/Velazquez.jpg',
		photoURL: 'https://lh3.googleusercontent.com/ogw/ADGmqu_LCNRqkQwBm6RxadnQ_tP114pAFtqCaWH-pR79=s64-c-mo',
		// email: 'johndoe@withinpixels.com',
		email: 'pauljiang@gmail.com',
		// shortcuts: ['calendar', 'mail', 'contacts', 'todo']
		shortcuts: ['dashboard']
	}
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_USER_DATA: {
			const { role, ...data } = action.payload.user;
			return {
				...state,
				role,
				data
			};
		}
		case Actions.REMOVE_USER_DATA: {
			return {
				...initialState
			};
		}
		case Actions.USER_LOGGED_OUT: {
			return initialState;
		}
		default: {
			return state;
		}
	}
};

export default user;
