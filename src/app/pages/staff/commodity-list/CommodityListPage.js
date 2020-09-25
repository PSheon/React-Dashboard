import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FusePageSimple from '@fuse/core/FusePageSimple';
import { useDeepCompareEffect } from '@fuse/hooks';
import * as Actions from 'app/store/actions';

function CommodityListPage() {
	const dispatch = useDispatch();
	const routeParams = useSelector(({ userList }) => userList.routeParams);

	const pageLayout = useRef(null);

	useDeepCompareEffect(() => {
		dispatch(Actions.getUserList(routeParams));
	}, [dispatch, routeParams]);

	return <>123</>;
}

export default CommodityListPage;
