import * as FuseActions from 'app/store/actions/fuse';
import axios from 'axios';

export const SET_COMMODITY_LIST_LOADING = '[COMMODITY LIST] SET COMMODITY LIST LOADING';
export const SET_COMMODITY_LIST = '[COMMODITY LIST] SET COMMODITY LIST';
export const SET_COMMODITY_LIST_ROUTE_PARAMS = '[COMMODITY LIST] SET ROUTE PARAMS';
export const TOGGLE_IN_SELECTED_COMMODITIES = '[COMMODITY LIST] TOGGLE IN SELECTED COMMODITIES';
export const SELECT_ALL_COMMODITIES = '[COMMODITY LIST] SELECT ALL COMMODITIES';
export const DESELECT_ALL_COMMODITIES = '[COMMODITY LIST] DESELECT ALL COMMODITIES';
export const OPEN_COMMODITY_INFO_DIALOG = '[COMMODITY LIST] OPEN COMMODITY INFO DIALOG';
export const CLOSE_COMMODITY_INFO_DIALOG = '[COMMODITY LIST] CLOSE COMMODITY INFO DIALOG';
export const TOGGLE_COMMODITY_LIST_FILTER_PANEL = '[COMMODITY LIST] TOGGLE FILTER PANEL';

export function getCommodityList(routeParams) {
	/* 
		routeParams
		{
			filter,
			fields,
			page,
			limit,
			sort,
			order
		}
	*/
	const request = axios.get('/api/commodities', {
		params: routeParams
	});

	return dispatch => {
		dispatch({ type: SET_COMMODITY_LIST_LOADING });
		request.then(response => {
			dispatch({
				type: SET_COMMODITY_LIST,
				payload: {
					commodities: response.data.docs,
					routeParams,
					totalPages: response.data.totalPages,
					totalCommodities: response.data.totalDocs
				}
			});
		});
	};
}

export function setCommodityListSearchRouteParams(routeParams) {
	return dispatch => {
		dispatch({
			type: SET_COMMODITY_LIST_ROUTE_PARAMS,
			payload: {
				routeParams
			}
		});
	};
}

export function toggleInSelectedCommodities(commodityId) {
	return {
		type: TOGGLE_IN_SELECTED_COMMODITIES,
		payload: {
			commodityId
		}
	};
}

export function selectAllCommodities() {
	return {
		type: SELECT_ALL_COMMODITIES
	};
}

export function deSelectAllCommodities() {
	return {
		type: DESELECT_ALL_COMMODITIES
	};
}

export function openCommodityInfoDialog(data) {
	return {
		type: OPEN_COMMODITY_INFO_DIALOG,
		payload: {
			data
		}
	};
}

export function closeCommodityInfoDialog() {
	return {
		type: CLOSE_COMMODITY_INFO_DIALOG
	};
}

export function toggleCommodityListFilterPanel() {
	return {
		type: TOGGLE_COMMODITY_LIST_FILTER_PANEL
	};
}
