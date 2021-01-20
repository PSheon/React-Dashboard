import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CssAvatarBadge from 'app/fuse-layouts/shared-components/CssAvatarBadge';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';
import moment from 'moment';
import UAParse from 'ua-parser-js';

import AccessListMultiSelectMenu from './AccessListMultiSelectMenu';
import AccessListTable from './AccessListTable';

const getMethodColor = method => {
	switch (method.toUpperCase()) {
		case 'GET':
			return 'text-teal-500';
		case 'POST':
			return 'text-yellow-500';
		case 'PUT':
			return 'text-gray-500';
		case 'PATCH':
			return 'text-indigo-500';
		case 'DELETE':
			return 'text-pink-500';
		default:
			return 'text-teal-500';
	}
};

const renderBrowserInfo = INFO => {
	if (!INFO.os.name && !INFO.os.version && !INFO.browser.name && !INFO.browser.version) {
		return <Typography>未知瀏覽器</Typography>;
	}
	return (
		<div className="flex flex-col">
			{INFO.device.type && (
				<Typography>
					<span>{INFO.device.type}</span>
					<span className="text-14 text-grey-400">{` - v${INFO.device.vendor}`}</span>
				</Typography>
			)}
			{INFO.os.name && (
				<Typography>
					<span>{INFO.os.name}</span>
					<span className="text-14 text-grey-400">{` - v${INFO.os.version}`}</span>
				</Typography>
			)}
			{INFO.browser.name && (
				<Typography>
					<span>{INFO.browser.name}</span>
					<span className="text-14 text-grey-400">{` - v${INFO.browser.version}`}</span>
				</Typography>
			)}
		</div>
	);
};

function AccessListTableWrapper() {
	const dispatch = useDispatch();
	const ACCESS_LIST = useSelector(({ accessList }) => accessList);
	const totalAccesses = ACCESS_LIST.totalAccesses ?? 1;
	const totalPages = ACCESS_LIST.totalPages ?? 1;
	const isListLoading = ACCESS_LIST.loading;
	const filteredData = ACCESS_LIST.docs ?? [];

	const columns = React.useMemo(
		() => [
			{
				Header: ({ selectedFlatRows }) => {
					const selectedRowIds = selectedFlatRows.map(row => row.original.id);

					return (
						selectedFlatRows.length > 0 && <AccessListMultiSelectMenu selectedContactIds={selectedRowIds} />
					);
				},
				accessor: 'photoUrl',
				Cell: ({ row }) => {
					return (
						<CssAvatarBadge
							overlap="circle"
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right'
							}}
							dotschema={row.original.user?.active ? 'success' : 'danger'}
							variant="dot"
						>
							<div className="w-48 h-48 border-4 p-2 rounded-full">
								<Avatar
									className="w-36 h-36"
									alt={row.original.user?.displayName}
									src={row.original.user?.photoUrl}
								/>
							</div>
						</CssAvatarBadge>
					);
				},
				className: 'flex justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: '戶名',
				accessor: 'memberId',
				Cell: ({ row }) => {
					return row.original.memberId ? (
						<Typography className="font-16">{row.original.memberId}</Typography>
					) : (
						<Typography className="text-gray-600">匿名</Typography>
					);
				},
				headerClassName: 'text-center',
				className: 'text-center font-bold',
				sortable: true
			},
			{
				Header: '方法',
				accessor: 'method',
				Cell: ({ row }) => {
					return (
						<Typography className={clsx('font-bold text-16', getMethodColor(row.original.method))}>
							{row.original.method}
						</Typography>
					);
				},
				headerClassName: 'text-center',
				className: 'text-left font-bold',
				sortable: true
			},
			{
				Header: '路徑',
				accessor: 'pathname',
				headerClassName: 'text-center',
				className: 'text-left font-bold',
				sortable: true
			},
			{
				Header: '來源IP',
				accessor: 'ip',
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '地區',
				accessor: 'country',
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '瀏覽器',
				accessor: 'browser',
				Cell: ({ row }) => {
					const INFO = UAParse(row.original.browser);
					return renderBrowserInfo(INFO);
				},
				headerClassName: 'text-center',
				className: 'text-left',
				sortable: false
			},
			{
				Header: '時間',
				accessor: 'createAt',
				Cell: ({ row }) => {
					return (
						<div className="flex flex-col">
							<Typography>{moment(row.original.createdAt).fromNow()}</Typography>
							<Typography className="text-grey-400">
								{moment(row.original.createdAt).format('YYYY/MM/DD, a h:mm:ss')}
							</Typography>
						</div>
					);
				},
				headerClassName: 'text-center',
				className: 'text-right',
				sortable: true
			},
			// {
			// 	Header: '排版引擎',
			// 	accessor: 'browser',
			// 	headerClassName: 'text-center',
			// 	className: 'text-center',
			// 	sortable: true
			// },
			// {
			// 	Header: '系統',
			// 	accessor: 'browser',
			// 	headerClassName: 'text-center',
			// 	className: 'text-center',
			// 	sortable: true
			// },
			// {
			// 	Header: '裝置',
			// 	accessor: 'browser',
			// 	headerClassName: 'text-center',
			// 	className: 'text-center',
			// 	sortable: true
			// },
			{
				Header: '操作',
				id: 'action',
				headerClassName: 'text-center',
				className: 'flex justify-center',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex">
						{/* <IconButton
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
						</IconButton> */}
						<IconButton>
							<Icon>error_outline_rounded</Icon>
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
		[dispatch]
	);

	// useEffect(() => {
	// 	function getFilteredArray(entities, _searchText) {
	// 		const arr = Object.keys(entities).map(id => entities[id]);
	// 		if (_searchText.length === 0) {
	// 			return arr;
	// 		}
	// 		return FuseUtils.filterArrayByString(arr, _searchText);
	// 	}

	// 	if (contacts) {
	// 		setFilteredData(getFilteredArray(contacts, searchText));
	// 	}
	// }, [contacts, searchText]);

	if (!filteredData) {
		return <div className="flex justify-center items-center">沒有符合條件的操作記錄</div>;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					沒有符合條件的操作記錄 ...
				</Typography>
			</div>
		);
	}

	return (
		<AccessListTable
			columns={columns}
			data={filteredData}
			loading={isListLoading}
			totalAccesses={totalAccesses}
			totalPages={totalPages}
			onRowClick={(ev, row) => {
				if (row) {
					console.log('123, ', 123);
				}
			}}
		/>
	);
}

export default AccessListTableWrapper;
