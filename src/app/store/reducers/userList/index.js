import * as Actions from 'app/store/actions/userList';

const initialState = {
	loading: true,
	docs: null,
	selectedUserIds: [],
	routeParams: {
		filter: '',
		fields: 'displayName,email',
		page: 1,
		limit: 20,
		conditions: {},
		sort: 'createdAt',
		order: -1
	},
	totalPages: 1,
	totalUsers: 20,
	userInfoDialog: {
		type: 'edit',
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

const userListReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_USER_LIST_LOADING: {
			return {
				...state,
				loading: true
			};
		}

		case Actions.SET_USER_LIST: {
			const { users, routeParams, totalPages, totalUsers } = action.payload;

			return {
				...state,
				loading: false,
				docs: users,
				routeParams,
				totalPages,
				totalUsers
			};
		}
		case Actions.SET_USER_LIST_ROUTE_PARAMS: {
			return {
				...state,
				routeParams: {
					...state.routeParams,
					...action.payload.routeParams
				}
			};
		}
		case Actions.TOGGLE_IN_SELECTED_USERS: {
			const { userId } = action.payload;

			let selectedUserIds = [...state.selectedUserIds];

			if (selectedUserIds.find(id => id === userId) !== undefined) {
				selectedUserIds = selectedUserIds.filter(id => id !== userId);
			} else {
				selectedUserIds = [...selectedUserIds, userId];
			}

			return {
				...state,
				selectedUserIds
			};
		}
		case Actions.SELECT_ALL_USERS: {
			const arr = Object.keys(state.docs).map(k => state.docs[k]);

			const selectedUserIds = arr.map(user => user._id);

			return {
				...state,
				selectedUserIds
			};
		}
		case Actions.DESELECT_ALL_USERS: {
			return {
				...state,
				selectedUserIds: []
			};
		}
		case Actions.OPEN_USER_INFO_DIALOG: {
			return {
				...state,
				userInfoDialog: {
					...state.userInfoDialog,
					props: {
						open: true
					},
					data: action.payload.data
				}
			};
		}
		case Actions.CLOSE_USER_INFO_DIALOG: {
			return {
				...state,
				userInfoDialog: {
					...state.userInfoDialog,
					props: {
						open: false
					},
					data: null
				}
			};
		}
		case Actions.UPDATE_USER_ACTIVE: {
			const { userId, activeAction } = action.payload;
			const newdocs = state.docs.map(user => {
				if (user._id === userId) {
					return {
						...user,
						active: activeAction
					};
				}
				return user;
			});

			return {
				...state,
				loading: false,
				docs: newdocs
			};
		}
		case Actions.DELETE_USER: {
			const { userId } = action.payload;
			const newdocs = state.docs.filter(user => user._id !== userId);

			return {
				...state,
				loading: false,
				docs: newdocs
			};
		}
		case Actions.UPDATE_USER_PERMISSION: {
			// eslint-disable-next-line
			const { userId, role } = action.payload;
			const newdocs = state.docs.filter(user => user._id !== userId);

			return {
				...state,
				loading: false,
				docs: newdocs
			};
		}
		case Actions.TOGGLE_USER_LIST_FILTER_PANEL: {
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

export default userListReducer;
