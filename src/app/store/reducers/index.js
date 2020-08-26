import { combineReducers } from 'redux';

import auth from './auth';
import botBoard from './botBoard';
import fuse from './fuse';
import profile from './profile';
import userList from './userList';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,

		botBoard,
		profile,
		userList,

		...asyncReducers
	});

export default createReducer;
