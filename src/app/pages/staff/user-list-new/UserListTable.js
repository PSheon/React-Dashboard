import React from 'react';
import { Avatar, Checkbox, Icon, Typography, Chip } from '@material-ui/core';
import FuseAnimate from '@fuse/core/FuseAnimate';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from 'react-table';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import moment from 'moment';
import clsx from 'clsx';

import * as Actions from 'app/store/actions';
import { socialLogoConverter, avatarNameToPathConverter } from 'utils';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';
import UserListMultiSelectMenu from './UserListMultiSelectMenu';

const useStyles = makeStyles(theme => ({
	logoImgWrapper: {
		width: '1.5em'
	},
	unLinkImg: {
		filter: 'grayscale(100%)'
	},
	scrollbarWrapper: {
		'& .rt-tbody::-webkit-scrollbar': {
			width: 0,
			backgroundColor: 'rgba(0, 0, 0, 0)'
		}
	}
}));

function UserListTable() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const USER_LIST = useSelector(({ userList }) => userList);
	const currentPageIndex = USER_LIST.routeParams.page || 1;
	const totalPages = USER_LIST.totalPages || 1;
	const isListLoading = USER_LIST.loading;
	const filteredData = USER_LIST.docs || [];
	const { searchText, selectedUserIds, searchCondition } = USER_LIST;

	function handlePageChange(wantedPageIndex) {
		if (wantedPageIndex === currentPageIndex) return;

		dispatch(
			Actions.updateUserListWithPageIndex({
				filter: searchText,
				fields: 'displayName,email,phone',
				conditions: searchCondition,
				page: wantedPageIndex,
				limit: 20,
				sort: 'updatedAt',
				order: -1
			})
		);
	}
	function handleSortChange(newSorted) {
		const sortDetail = newSorted[0];

		dispatch(
			Actions.getUserList({
				filter: searchText,
				fields: 'displayName,email,phone',
				conditions: searchCondition,
				page: 1,
				limit: 20,
				sort: sortDetail.id,
				order: sortDetail.desc ? 1 : -1
			})
		);
	}

	const columns = React.useMemo(
		() => [
			{
				Header: ({ selectedFlatRows }) => {
					const selectedRowIds = selectedFlatRows.map(row => row.original.id);

					return (
						selectedFlatRows.length > 0 && <ContactsMultiSelectMenu selectedContactIds={selectedRowIds} />
					);
				},
				accessor: 'photoURL',
				Cell: ({ row }) => {
					return <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />;
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: 'First Name',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Company',
				accessor: 'company',
				sortable: true
			},
			{
				Header: 'Job Title',
				accessor: 'jobTitle',
				sortable: true
			},
			{
				Header: 'Email',
				accessor: 'email',
				sortable: true
			},
			{
				Header: 'Phone',
				accessor: 'phone',
				sortable: true
			},
			{
				id: 'action',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(Actions.toggleStarredContact(row.original.id));
							}}
						>
							{user.starred && user.starred.includes(row.original.id) ? (
								<Icon>star</Icon>
							) : (
								<Icon>star_border</Icon>
							)}
						</IconButton>
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(Actions.removeContact(row.original.id));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	if (!filteredData) {
		return (
			<div className="flex justify-center items-center">
				<LoadingIcon width={128} height={128} />
			</div>
		);
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					沒有符合條件的會員 ...
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			{/* TODO */}
			<ReactTable
				manual
				className={clsx(classes.scrollbarWrapper, '-striped -highlight h-full sm:rounded-16 overflow-hidden')}
				getTrProps={(state, rowInfo, column) => {
					return {
						className: 'cursor-pointer',
						onClick: (e, handleOriginal) => {
							if (rowInfo) {
								const removeOriginalIDProperties = ({
									// eslint-disable-next-line no-unused-vars
									_id,
									// eslint-disable-next-line no-unused-vars
									shortcuts,
									// eslint-disable-next-line no-unused-vars
									google,
									// eslint-disable-next-line no-unused-vars
									facebook,
									// eslint-disable-next-line no-unused-vars
									updatedAt,
									// eslint-disable-next-line no-unused-vars
									createdAt,
									...rest
								}) => rest;
								dispatch(Actions.syncActivityLogsByUserId(rowInfo.original._id));
								dispatch(
									Actions.openUserInfoDialog({
										...removeOriginalIDProperties(rowInfo.original),
										id: rowInfo.original._id
									})
								);
							}
						}
					};
				}}
				data={filteredData}
				columns={[
					{
						Header: () => (
							<Checkbox
								onClick={event => {
									event.stopPropagation();
								}}
								onChange={event => {
									if (event.target.checked) {
										dispatch(Actions.selectAllUsers());
									} else {
										dispatch(Actions.deSelectAllUsers());
									}
								}}
								checked={selectedUserIds.length === filteredData.length && selectedUserIds.length > 0}
								indeterminate={
									selectedUserIds.length !== filteredData.length && selectedUserIds.length > 0
								}
							/>
						),
						accessor: '',
						Cell: row => {
							return (
								<Checkbox
									onClick={event => {
										event.stopPropagation();
									}}
									checked={selectedUserIds.includes(row.value._id)}
									onChange={() => dispatch(Actions.toggleInSelectedUsers(row.value._id))}
								/>
							);
						},
						className: 'justify-center',
						sortable: false,
						width: 64
					},
					{
						Header: () => selectedUserIds.length > 0 && <UserListMultiSelectMenu />,
						accessor: 'photoURL',
						Cell: row => (
							<div className="flex justify-around items-center w-full">
								<p className="font-600 text-lg"># {row.index + 1}</p>
								<Avatar
									className="mr-8"
									alt={row.original.displayName}
									src={avatarNameToPathConverter(row.value)}
								/>
							</div>
						),
						className: 'justify-center',
						sortable: false,
						minWidth: 128
					},
					{
						Header: '顯示名稱',
						accessor: 'displayName',
						Cell: ({ value }) => <span className="text-gray">{value}</span>,
						className: 'flex items-center justify-center font-bold',
						// filterable: true,
						minWidth: 128
					},
					{
						Header: '信箱',
						accessor: 'email',
						Cell: ({ value }) => <span className="text-600 text-lg">{value}</span>,
						className: 'flex items-center justify-center',
						// filterable: true
						minWidth: 240
					},
					{
						Header: '綁定 Google',
						accessor: 'google',
						Cell: row =>
							row.original.google == null ? (
								<div className={classes.logoImgWrapper}>
									<img
										className={classes.unLinkImg}
										alt="Google Icon"
										src={socialLogoConverter('google')}
									/>
								</div>
							) : (
								<div className="flex items-center">
									<Chip
										avatar={<Avatar src={socialLogoConverter('google')} className="p-2" />}
										label={row.original.google.displayName}
										className="px-8 bg-transparent"
									/>
								</div>
							),
						className: 'flex items-center justify-center font-bold',
						// filterable: true,
						minWidth: 128
					},
					// {
					// 	Header: '綁定 Facebook',
					// 	accessor: 'facebook',
					// 	Cell: row =>
					// 		row.original.facebook == null ? (
					// 			<div className={classes.logoImgWrapper}>
					// 				<img
					// 					className={classes.unLinkImg}
					// 					alt="Google Icon"
					// 					src={socialLogoConverter('facebook')}
					// 				/>
					// 			</div>
					// 		) : (
					// 			<div className="flex items-center">
					// 				<Chip
					// 					avatar={<Avatar src={socialLogoConverter('facebook')} className="p-2" />}
					// 					label={row.original.facebook.displayName}
					// 					className="px-8 bg-transparent"
					// 				/>
					// 			</div>
					// 		),
					// 	className: 'flex items-center justify-center font-bold',
					// 	// filterable: true
					// 	minWidth: 128
					// },
					{
						Header: '加入日期',
						accessor: 'createdAt',
						Cell: ({ value }) => (
							<span className="text-600 text-lg">{moment(value).format('YYYY-MM-DD')}</span>
						),
						className: 'flex items-center justify-center font-bold'
						// filterable: true
					},
					{
						Header: '通過驗證',
						accessor: 'verified',
						Cell: row =>
							row.original.verified ? (
								<Icon className="text-green pr-10">check_circle</Icon>
							) : (
								<Icon className="text-amber-600 pr-10">cancel</Icon>
							),
						className: 'flex items-center justify-center font-bold'
						// filterable: true
					}
					// {
					// 	Header: '接收信件',
					// 	accessor: 'receivingEmail',
					// 	Cell: row =>
					// 		row.original.receivingEmail ? (
					// 			<Icon className="text-green pr-10">check_circle</Icon>
					// 		) : (
					// 			<Icon className="text-amber-600 pr-10">cancel</Icon>
					// 		),
					// 	className: 'flex items-center justify-center font-bold'
					// 	// filterable: true
					// }
					// {
					// 	Header: '啟用狀態',
					// 	Cell: row => (
					// 		<div className="flex items-center">
					// 			<IconButton
					// 				onClick={ev => {
					// 					ev.stopPropagation();
					// 					const { _id, displayName, email, active } = row.original;

					// 					handleChangeUserActivation({ _id, displayName, email, active });

					// 					// dispatch(Actions.toggleUserActivation({ userId: _id, email, active: !active }));
					// 				}}
					// 			>
					// 				{row.original.active ? (
					// 					<Icon className="text-green">lock_open</Icon>
					// 				) : (
					// 					<Icon className="text-red">lock</Icon>
					// 				)}
					// 			</IconButton>
					// 		</div>
					// 	),
					// 	className: 'flex items-center justify-center font-bold'
					// }
				]}
				defaultPageSize={20}
				loading={isListLoading}
				loadingText="載入資料中..."
				noDataText="沒有符合條件的會員"
				showPageSizeOptions={false}
				showPageJump={false}
				pageText=""
				ofText="，"
				page={currentPageIndex - 1}
				pages={totalPages}
				renderCurrentPage={page => <span>第 {page + 1} 頁</span>}
				renderTotalPagesCount={pages => <span>共 {pages} 頁</span>}
				onFetchData={({ page }) => {
					handlePageChange(page + 1);
				}}
				onSortedChange={newSorted => {
					handleSortChange(newSorted);
				}}
			/>
		</FuseAnimate>
	);
}

export default UserListTable;
