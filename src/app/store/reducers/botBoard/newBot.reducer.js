import * as Actions from 'app/store/actions/botBoard';

const initialState = {
	loading: false,
	step: 0,

	settings: {
		botPackage: -1,
		botCurrency: -1,
		botProportion: -1,
		botPeriod: -1
	}
};

const newBot = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_NEW_BOT_LOADING: {
			return { ...state, loading: action.payload.loading };
		}
		case Actions.SET_NEW_BOT_SETTING_STEP: {
			return { ...state, step: action.payload.step };
		}
		case Actions.SET_NEW_BOT_PACKAGE: {
			return { ...state, settings: { ...state.settings, botPackage: action.payload.botPackage } };
		}
		case Actions.SET_NEW_BOT_CURRENCY: {
			return { ...state, settings: { ...state.settings, botCurrency: action.payload.botCurrency } };
		}
		case Actions.SET_NEW_BOT_PROPORTION: {
			return { ...state, settings: { ...state.settings, botProportion: action.payload.botProportion } };
		}
		case Actions.SET_NEW_BOT_PERIOD: {
			return { ...state, settings: { ...state.settings, botPeriod: action.payload.botPeriod } };
		}

		default: {
			return state;
		}
	}
};

export default newBot;
