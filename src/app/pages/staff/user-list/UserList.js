import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FusePageSimple from '@fuse/core/FusePageSimple';
import { useDeepCompareEffect } from '@fuse/hooks';
import * as Actions from 'app/store/actions';

import UserDialog from './UserDialog';
import UserListFilterPanel from './UserListFilterPanel';
import UserListHeader from './UserListHeader';
import UserListTableWrapper from './UserListTableWrapper';

function UserList() {
	const dispatch = useDispatch();
	const searchText = useSelector(({ userList }) => userList.searchText);
	const searchCondition = useSelector(({ userList }) => userList.searchCondition);

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		dispatch(
			Actions.getUserList({
				filter: searchText,
				fields: 'displayName,email',
				conditions: searchCondition,
				page: 1,
				limit: 20,
				sort: 'updatedAt',
				order: -1
			})
		);
	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 pb-12 sm:py-0 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-128 h-128 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<UserListHeader pageLayout={pageLayout} />}
				content={<UserListTableWrapper />}
				rightSidebarContent={<UserListFilterPanel pageLayout={pageLayout} />}
				rightSidebarVariant="temporary"
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>

			<UserDialog />
		</>
	);
}

export default UserList;
