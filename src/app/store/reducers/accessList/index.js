import * as Actions from 'app/store/actions/accessList';

const initialState = {
	loading: true,
	docs: null,
	selectedAccessIds: [],
	routeParams: {
		filter: '',
		fields: 'memberId,ip',
		page: 1,
		limit: 50,
		conditions: {},
		sort: 'createdAt',
		order: -1
	},
	totalPages: 1,
	totalAccesses: 20,
	filterPanel: {
		open: false,
		data: {}
	}
};

const accessListReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ACCESS_LIST_LOADING: {
			return {
				...state,
				loading: true
			};
		}

		case Actions.SET_ACCESS_LIST: {
			const { accesses, routeParams, totalPages, totalAccesses } = action.payload;

			return {
				...state,
				loading: false,
				docs: accesses,
				routeParams,
				totalPages,
				totalAccesses
			};
		}
		case Actions.SET_ACCESS_LIST_ROUTE_PARAMS: {
			return {
				...state,
				routeParams: {
					...state.routeParams,
					...action.payload.routeParams
				}
			};
		}
		case Actions.TOGGLE_IN_SELECTED_ACCESSES: {
			const { accessId } = action.payload;

			let selectedAccessIds = [...state.selectedAccessIds];

			if (selectedAccessIds.find(id => id === accessId) !== undefined) {
				selectedAccessIds = selectedAccessIds.filter(id => id !== accessId);
			} else {
				selectedAccessIds = [...selectedAccessIds, accessId];
			}

			return {
				...state,
				selectedAccessIds
			};
		}
		case Actions.SELECT_ALL_ACCESSES: {
			const arr = Object.keys(state.docs).map(k => state.docs[k]);

			const selectedAccessIds = arr.map(access => access._id);

			return {
				...state,
				selectedAccessIds
			};
		}
		case Actions.DESELECT_ALL_ACCESSES: {
			return {
				...state,
				selectedAccessIds: []
			};
		}
		case Actions.TOGGLE_ACCESS_LIST_FILTER_PANEL: {
			return {
				...state,
				filterPanel: {
					...state.filterPanel,
					open: !state.filterPanel.open
				}
			};
		}
		default: {
			return state;
		}
	}
};

export default accessListReducer;
