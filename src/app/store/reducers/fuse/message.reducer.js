import * as Actions from '../../actions/fuse';

const initialState = {
	state: null,
	options: {
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left'
		},
		//
		autoHideDuration: 6000,
		message: '嗨！歡迎回來~',
		variant: null
	}
};

const message = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SHOW_MESSAGE: {
			return {
				state: true,
				options: {
					...initialState.options,
					...action.payload.options
				}
			};
		}
		case Actions.HIDE_MESSAGE: {
			return {
				...state,
				state: null
			};
		}
		default: {
			return state;
		}
	}
};

export default message;
