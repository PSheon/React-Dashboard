import DEFAULT_SECTION, { ADMIN_NAVIGATION, STAFF_NAVIGATION } from 'app/fuse-configs/navigationConfig';
import * as Actions from '../../actions/fuse';

const initialState = DEFAULT_SECTION;

const navigation = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_NAVIGATION: {
			return [...state];
		}
		case Actions.SET_NAVIGATION: {
			return [...action.navigation];
		}
		case Actions.RESET_NAVIGATION: {
			return [...initialState];
		}
		case Actions.SET_ADMIN_NAVIGATION: {
			return [ADMIN_NAVIGATION, STAFF_NAVIGATION, ...state];
		}
		/* Staff Navigation View */
		case Actions.SET_STAFF_NAVIGATION: {
			return [STAFF_NAVIGATION, ...state];
		}
		default: {
			return state;
		}
	}
};

export default navigation;
