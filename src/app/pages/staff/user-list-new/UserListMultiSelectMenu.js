import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Icon, IconButton, ListItemIcon, Menu, MenuItem, MenuList } from '@material-ui/core';

import { userListToCsvConverter, CsvDownload } from 'utils';

function UserListMultiSelectMenu() {
	const USERS = useSelector(({ userList }) => userList.docs);
	const selectedUserIds = useSelector(({ userList }) => userList.selectedUserIds);
	const csvSource = USERS.filter(user => selectedUserIds.includes(user._id));

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedUserMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedUsersMenu() {
		setAnchorEl(null);
	}

	return (
		<>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedUsersMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedUserMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu id="selectedUsersMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeSelectedUsersMenu}>
				<MenuList>
					<MenuItem>
						<ListItemIcon className="min-w-40">
							<Icon>cloud_download</Icon>
						</ListItemIcon>
						<CsvDownload data={userListToCsvConverter(csvSource)} filename="會員列表.csv">
							匯出 會員名單
						</CsvDownload>
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}

export default UserListMultiSelectMenu;
