import { combineReducers } from 'redux';

import accessList from './accessList';
import auth from './auth';
import botBoard from './botBoard';
import fuse from './fuse';
import profile from './profile';
import setting from './setting';
import userList from './userList';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,

		botBoard,
		profile,
		userList,
		accessList,
		setting,

		...asyncReducers
	});

export default createReducer;
