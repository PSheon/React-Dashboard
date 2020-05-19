import { combineReducers } from 'redux';
import role from './role.reducer';
import profile from './profile.reducer';
import accessHistory from './accessHistory.reducer';

const meReducers = combineReducers({
	role,
	profile,
	accessHistory
});

export default meReducers;
