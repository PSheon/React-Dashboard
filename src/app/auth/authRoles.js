/**
 * Authorization Roles
 * 可以進入頁面的權限
 */
const authRoles = {
	admin: ['admin'],
	staff: ['admin', 'staff'],
	user: ['admin', 'staff', 'user'],
	trial: ['admin', 'staff', 'user', 'trial'],
	onlyGuest: []
};

export default authRoles;
