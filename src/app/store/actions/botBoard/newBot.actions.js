// import * as MessageActions from 'app/store/actions/fuse/message.actions';
// import axios from 'axios';

export const SET_NEW_BOT_LOADING = '[BOT BOARD] SET NEW BOT LOADING';
export const SET_NEW_BOT_SETTING_STEP = '[BOT BOARD] SET NEW BOT STEP';
export const SET_NEW_BOT_PACKAGE = '[BOT BOARD] SET NEW BOT PACKAGE';
export const SET_NEW_BOT_CURRENCY = '[BOT BOARD] SET NEW BOT CURRENCY';
export const SET_NEW_BOT_PROPORTION = '[BOT BOARD] SET NEW BOT PROPORTION';
export const SET_NEW_BOT_PERIOD = '[BOT BOARD] SET NEW BOT PERIOD';

export function submitNewBotPackageAndCurrency({ botPackage, botCurrency }) {
	return dispatch => {
		dispatch({ type: SET_NEW_BOT_PACKAGE, payload: { botPackage } });
		dispatch({ type: SET_NEW_BOT_CURRENCY, payload: { botCurrency } });
		dispatch({ type: SET_NEW_BOT_SETTING_STEP, payload: { step: 1 } });
	};
}

export function submitNewBotProportionAndPeriod({ botProportion, botPeriod }) {
	return dispatch => {
		dispatch({ type: SET_NEW_BOT_PROPORTION, payload: { botProportion } });
		dispatch({ type: SET_NEW_BOT_PERIOD, payload: { botPeriod } });
		dispatch({ type: SET_NEW_BOT_SETTING_STEP, payload: { step: 2 } });
	};
}

export function createNewBotNewBot() {
	return (dispatch, getState) => {
		const { settings } = getState().botBoard.newBot;
		dispatch({ type: SET_NEW_BOT_LOADING, payload: { loading: true } });
		// TODO
		// axios
		// 	.post('/api/bot', {
		// 		settings
		// 	})
		// 	.then(response => Promise.all([dispatch({ type: SET_NEW_BOT_LOADING, payload: { loading: false } })]));
	};
}
