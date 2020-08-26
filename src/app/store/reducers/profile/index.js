import { combineReducers } from 'redux';

import accessHistory from './accessHistory.reducer';
import me from './me.reducer';
import role from './role.reducer';
import shortcuts from './shortcuts.reducer';

const meReducers = combineReducers({
	role,
	me,
	shortcuts,
	accessHistory
});

export default meReducers;
