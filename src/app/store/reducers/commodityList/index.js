import * as Actions from 'app/store/actions/commodityList';

const initialState = {
	loading: true,
	docs: null,
	selectedCommodityIds: [],
	routeParams: {
		filter: '',
		fields: 'displayName,codeName',
		page: 1,
		limit: 20,
		conditions: {},
		sort: 'createdAt',
		order: -1
	},
	totalPages: 1,
	totalCommodities: 20,
	commodityInfoDialog: {
		type: 'new',
		props: {
			open: false
		},
		data: null
	},
	filterPanel: {
		open: false,
		data: {}
	}
};

const commodityListReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_COMMODITY_LIST_LOADING: {
			return {
				...state,
				loading: true
			};
		}

		case Actions.SET_COMMODITY_LIST: {
			const { commodities, routeParams, totalPages, totalCommodities } = action.payload;

			return {
				...state,
				loading: false,
				docs: commodities,
				routeParams,
				totalPages,
				totalCommodities
			};
		}
		case Actions.SET_COMMODITY_LIST_ROUTE_PARAMS: {
			return {
				...state,
				routeParams: {
					...state.routeParams,
					...action.payload.routeParams
				}
			};
		}
		case Actions.TOGGLE_IN_SELECTED_COMMODITIES: {
			const { commodityId } = action.payload;

			let selectedCommodityIds = [...state.selectedCommodityIds];

			if (selectedCommodityIds.find(id => id === commodityId) !== undefined) {
				selectedCommodityIds = selectedCommodityIds.filter(id => id !== commodityId);
			} else {
				selectedCommodityIds = [...selectedCommodityIds, commodityId];
			}

			return {
				...state,
				selectedCommodityIds
			};
		}
		case Actions.SELECT_ALL_COMMODITIES: {
			const arr = Object.keys(state.docs).map(k => state.docs[k]);

			const selectedCommodityIds = arr.map(commodity => commodity._id);

			return {
				...state,
				selectedCommodityIds
			};
		}
		case Actions.DESELECT_ALL_COMMODITIES: {
			return {
				...state,
				selectedCommodityIds: []
			};
		}
		case Actions.OPEN_COMMODITY_INFO_DIALOG: {
			return {
				...state,
				commodityInfoDialog: {
					...state.commodityInfoDialog,
					props: {
						open: true
					},
					data: action.payload.data
				}
			};
		}
		case Actions.CLOSE_COMMODITY_INFO_DIALOG: {
			return {
				...state,
				commodityInfoDialog: {
					...state.commodityInfoDialog,
					props: {
						open: false
					},
					data: null
				}
			};
		}
		case Actions.TOGGLE_COMMODITY_LIST_FILTER_PANEL: {
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

export default commodityListReducer;
