import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FusePageSimple from '@fuse/core/FusePageSimple';
import { useDeepCompareEffect } from '@fuse/hooks';
import * as Actions from 'app/store/actions';

import AccessListFilterPanel from './AccessListFilterPanel';
import AccessListHeader from './AccessListHeader';
import AccessListTableWrapper from './AccessListTableWrapper';

function AccessListPage() {
	const dispatch = useDispatch();
	const routeParams = useSelector(({ accessList }) => accessList.routeParams);

	const pageLayout = useRef(null);

	useDeepCompareEffect(() => {
		dispatch(Actions.getAccessList(routeParams));
	}, [dispatch, routeParams]);

	return (
		<FusePageSimple
			classes={{
				contentWrapper: 'p-0 sm:p-24 pb-0 sm:py-0 h-full',
				content: 'flex flex-col h-full',
				leftSidebar: 'w-256 border-0',
				header: 'min-h-128 h-128 sm:h-136 sm:min-h-136',
				wrapper: 'min-h-0'
			}}
			header={<AccessListHeader pageLayout={pageLayout} />}
			content={<AccessListTableWrapper />}
			rightSidebarContent={<AccessListFilterPanel pageLayout={pageLayout} />}
			rightSidebarVariant="temporary"
			sidebarInner
			ref={pageLayout}
			innerScroll
		/>
	);
}

export default AccessListPage;
