import { combineReducers } from 'redux';
import auth from 'app/auth/store/reducers';
import me from './me';
import fuse from './fuse';
import userList from './userList';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,

		me,
		userList,

		...asyncReducers
	});

export default createReducer;
