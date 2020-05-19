import moment from 'moment';

export const userListToCsvConverter = originalJson =>
	originalJson.map(userDetail => ({
		會員編號: userDetail._id,
		顯示名稱: userDetail.displayName,
		信箱: userDetail.email,
		電話: userDetail.phone || '未填寫',

		'連結 Google 帳號': userDetail.google ? userDetail.google.displayName : '未綁定',
		'連結 Facebook 帳號': userDetail.facebook ? userDetail.facebook.displayName : '未綁定',

		加入日期: moment(userDetail.createdAt).format('YYYY-MM-DD'),
		身分驗證: userDetail.verified ? '通過' : '未通過',
		啟用狀態: userDetail.active ? '啟用中' : '未啟用'
	}));

// TODO
export const userListToCsvConvertertemp = () => 'todo';
