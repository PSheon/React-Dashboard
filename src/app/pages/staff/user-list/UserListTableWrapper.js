import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import UserListTable from './UserListTable';
import * as Actions from './store/actions';

function UserListTableWrapper(props) {
	const dispatch = useDispatch();
	const contacts = useSelector(({ contactsApp }) => contactsApp.contacts.entities);
	const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
	const user = useSelector(({ contactsApp }) => contactsApp.user);

	const [filteredData, setFilteredData] = useState(null);

	const columns = React.useMemo(
		() => [
			{
				Header: ({ selectedFlatRows }) => {
					const selectedRowIds = selectedFlatRows.map(row => row.original.id);

					return (
						selectedFlatRows.length > 0 && <ContactsMultiSelectMenu selectedContactIds={selectedRowIds} />
					);
				},
				accessor: 'photoUrl',
				Cell: ({ row }) => {
					return <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />;
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: '用戶名',
				accessor: 'displayName',
				headerClassName: 'text-center',
				className: 'text-center font-bold',
				sortable: true
			},
			{
				Header: '信箱',
				accessor: 'mail',
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '電話',
				accessor: 'phone',
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '階級',
				accessor: 'class',
				headerClassName: 'text-center',
				className: 'text-center font-bold',
				sortable: true
			},
			{
				Header: '交易進度',
				accessor: 'progress',
				headerClassName: 'text-center',
				customized: true,
				sortable: true
			},
			{
				Header: '方案',
				accessor: 'scheme',
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '操作',
				id: 'action',
				headerClassName: 'text-center',
				className: 'flex justify-center',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<>
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
					</>
				)
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			const arr = Object.keys(entities).map(id => entities[id]);
			if (_searchText.length === 0) {
				return arr;
			}
			return FuseUtils.filterArrayByString(arr, _searchText);
		}

		if (contacts) {
			setFilteredData(getFilteredArray(contacts, searchText));
		}
	}, [contacts, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					沒有符合的會員
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<UserListTable
				columns={columns}
				data={filteredData}
				onRowClick={(ev, row) => {
					if (row) {
						dispatch(Actions.openEditContactDialog(row.original));
					}
				}}
			/>
		</FuseAnimate>
	);
}

export default UserListTableWrapper;
