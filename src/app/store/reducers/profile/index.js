import { combineReducers } from 'redux';
import role from './role.reducer';
import me from './me.reducer';
import shortcuts from './shortcuts.reducer';
import accessHistory from './accessHistory.reducer';

const meReducers = combineReducers({
	role,
	me,
	shortcuts,
	accessHistory
});

export default meReducers;
