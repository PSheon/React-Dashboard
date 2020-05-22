import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import fuse from './fuse';
import userList from './userList';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,

		profile,
		userList,

		...asyncReducers
	});

export default createReducer;
