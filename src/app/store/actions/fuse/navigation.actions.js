import FuseUtils from '@fuse/utils';

export const GET_NAVIGATION = '[NAVIGATION] GET NAVIGATION';
export const SET_NAVIGATION = '[NAVIGATION] SET NAVIGATION';
export const SET_ADMIN_NAVIGATION = '[NAVIGATION] SET ADMIN NAVIGATION';
export const SET_STAFF_NAVIGATION = '[NAVIGATION] SET STAFF NAVIGATION';
export const RESET_NAVIGATION = '[NAVIGATION] RESET NAVIGATION';

export function getNavigation() {
	return {
		type: GET_NAVIGATION
	};
}

export function setNavigation(navigation) {
	return {
		type: SET_NAVIGATION,
		payload: { navigation }
	};
}

export function resetNavigation() {
	return {
		type: RESET_NAVIGATION
	};
}

export function setAdminNavigation() {
	return {
		type: SET_ADMIN_NAVIGATION
	};
}

export function setStaffNavigation() {
	return {
		type: SET_STAFF_NAVIGATION
	};
}

export function appendNavigationItem(item, parentId) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			payload: { navigation: FuseUtils.appendNavItem(navigation, item, parentId) }
		});
	};
}

export function prependNavigationItem(item, parentId) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			payload: { navigation: FuseUtils.prependNavItem(navigation, item, parentId) }
		});
	};
}

export function updateNavigationItem(id, item) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			payload: { navigation: FuseUtils.updateNavItem(navigation, id, item) }
		});
	};
}

export function removeNavigationItem(id) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			payload: { navigation: FuseUtils.removeNavItem(navigation, id) }
		});
	};
}
