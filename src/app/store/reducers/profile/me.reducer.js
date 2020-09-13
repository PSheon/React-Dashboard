import * as Actions from 'app/store/actions/profile';

const initialState = {
	loading: false,

	data: {
		displayName: 'Paul Jiang',
		// photoURL: 'assets/images/avatars/Velazquez.jpg',
		photoURL: 'https://lh3.googleusercontent.com/ogw/ADGmqu_LCNRqkQwBm6RxadnQ_tP114pAFtqCaWH-pR79=s64-c-mo',
		// email: 'johndoe@withinpixels.com',
		email: 'pauljiang61020@gmail.com',
		// shortcuts: ['calendar', 'mail', 'contacts', 'todo']
		shortcuts: ['bots-board', 'strategies-market', 'leader-board', 'referrals']
	}
};

const profile = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ME_PROFILE_LOADING: {
			return { ...state, loading: true };
		}
		case Actions.SET_ME_PROFILE: {
			return { ...state, loading: false, data: { ...state.data, ...action.payload.me } };
		}
		case Actions.RESET_ME_PROFILE: {
			return initialState;
		}

		default: {
			return state;
		}
	}
};

export default profile;
