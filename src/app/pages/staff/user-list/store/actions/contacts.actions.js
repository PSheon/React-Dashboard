import axios from 'axios';
import { getUserData } from './user.actions';

export const GET_CONTACTS = '[CONTACTS APP] GET CONTACTS';
export const SET_SEARCH_TEXT = '[CONTACTS APP] SET SEARCH TEXT';
export const OPEN_NEW_CONTACT_DIALOG = '[CONTACTS APP] OPEN NEW CONTACT DIALOG';
export const CLOSE_NEW_CONTACT_DIALOG = '[CONTACTS APP] CLOSE NEW CONTACT DIALOG';
export const OPEN_EDIT_CONTACT_DIALOG = '[CONTACTS APP] OPEN EDIT CONTACT DIALOG';
export const CLOSE_EDIT_CONTACT_DIALOG = '[CONTACTS APP] CLOSE EDIT CONTACT DIALOG';
export const ADD_CONTACT = '[CONTACTS APP] ADD CONTACT';
export const UPDATE_CONTACT = '[CONTACTS APP] UPDATE CONTACT';
export const REMOVE_CONTACT = '[CONTACTS APP] REMOVE CONTACT';
export const REMOVE_CONTACTS = '[CONTACTS APP] REMOVE CONTACTS';
export const TOGGLE_STARRED_CONTACT = '[CONTACTS APP] TOGGLE STARRED CONTACT';
export const TOGGLE_STARRED_CONTACTS = '[CONTACTS APP] TOGGLE STARRED CONTACTS';
export const SET_CONTACTS_STARRED = '[CONTACTS APP] SET CONTACTS STARRED ';

const contactsDB = {
	contacts: [
		{
			id: '5725a680b3249760ea21de52',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680606588342058356d',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a68009e20d0a9e9acf2a',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a6809fdd915739187ed5',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a68007920cf75051da64',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a68031fdbb1db2c1af47',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680bc670af746c435e2',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680e7eb988a58ddf303',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680dcb077889f758961',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a6806acf030f9341e925',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680ae1ae9a3c960d487',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680b8d240c011dd224b',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a68034cb3968e1f79eac',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a6801146cce777df2a08',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a6808a178bfd034d6ecf',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680653c265f5c79b5a9',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680bbcec3cc32a8488a',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a6803d87f1b77e17b62b',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680e87cb319bd9bd673',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a6802d10e277a0f35775',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680aef1e5cf26dd3d1f',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680cd7efa56a45aea5d',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a680fb65c91a82cb35e2',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a68018c663044be49cbf',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		},
		{
			id: '5725a6809413bf8a0a5272b1',
			photoUrl: 'assets/images/avatars/default.jpg',
			displayName: 'Arnold',
			mail: 'arnold@withinpixels.com',
			phone: '+886-908091511',
			class: 'vip2',
			progress: 0.8,
			scheme: 'new'
		}
	],
	user: [
		{
			id: '5725a6802d10e277a0f35724',
			name: 'John Doe',
			avatar: 'assets/images/avatars/profile.jpg',
			starred: [
				'5725a680ae1ae9a3c960d487',
				'5725a6801146cce777df2a08',
				'5725a680bbcec3cc32a8488a',
				'5725a680bc670af746c435e2',
				'5725a68009e20d0a9e9acf2a'
			],
			frequentContacts: [
				'5725a6809fdd915739187ed5',
				'5725a68031fdbb1db2c1af47',
				'5725a680606588342058356d',
				'5725a680e7eb988a58ddf303',
				'5725a6806acf030f9341e925',
				'5725a68034cb3968e1f79eac',
				'5725a6801146cce777df2a08',
				'5725a680653c265f5c79b5a9'
			],
			groups: [
				{
					id: '5725a6802d10e277a0f35739',
					name: 'Friends',
					contactIds: ['5725a680bbcec3cc32a8488a', '5725a680e87cb319bd9bd673', '5725a6802d10e277a0f35775']
				},
				{
					id: '5725a6802d10e277a0f35749',
					name: 'Clients',
					contactIds: [
						'5725a680cd7efa56a45aea5d',
						'5725a68018c663044be49cbf',
						'5725a6809413bf8a0a5272b1',
						'5725a6803d87f1b77e17b62b'
					]
				},
				{
					id: '5725a6802d10e277a0f35329',
					name: 'Recent Workers',
					contactIds: [
						'5725a680bbcec3cc32a8488a',
						'5725a680653c265f5c79b5a9',
						'5725a6808a178bfd034d6ecf',
						'5725a6801146cce777df2a08'
					]
				}
			]
		}
	]
};

export function getContacts(routeParams) {
	const request = axios.get('/api/contacts-app/contacts', {
		params: routeParams
	});

	let responseData;
	const { id } = routeParams;

	switch (id) {
		case 'frequent': {
			responseData = contactsDB.contacts.filter(contact =>
				contactsDB.user[0].frequentContacts.includes(contact.id)
			);
			break;
		}
		case 'starred': {
			responseData = contactsDB.contacts.filter(contact => contactsDB.user[0].starred.includes(contact.id));
			break;
		}
		default: {
			responseData = contactsDB.contacts;
		}
	}

	return dispatch =>
		dispatch({
			type: GET_CONTACTS,
			payload: responseData,
			routeParams
		});
	// request.then(response =>
	// 	dispatch({
	// 		type: GET_CONTACTS,
	// 		payload: response.data,
	// 		routeParams
	// 	})
	// );
}

export function setSearchText(newSearchText) {
	return {
		type: SET_SEARCH_TEXT,
		searchText: newSearchText
	};
}

export function openNewContactDialog() {
	return {
		type: OPEN_NEW_CONTACT_DIALOG
	};
}

export function closeNewContactDialog() {
	return {
		type: CLOSE_NEW_CONTACT_DIALOG
	};
}

export function openEditContactDialog(data) {
	return {
		type: OPEN_EDIT_CONTACT_DIALOG,
		data
	};
}

export function closeEditContactDialog() {
	return {
		type: CLOSE_EDIT_CONTACT_DIALOG
	};
}

export function addContact(newContact) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/add-contact', {
			newContact
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: ADD_CONTACT
				})
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}

export function updateContact(contact) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/update-contact', {
			contact
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: UPDATE_CONTACT
				})
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}

export function removeContact(contactId) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/remove-contact', {
			contactId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_CONTACT
				})
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}

export function removeContacts(contactIds) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/remove-contacts', {
			contactIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_CONTACTS
				})
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}

export function toggleStarredContact(contactId) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/toggle-starred-contact', {
			contactId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: TOGGLE_STARRED_CONTACT
				}),
				dispatch(getUserData())
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}

export function toggleStarredContacts(contactIds) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/toggle-starred-contacts', {
			contactIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: TOGGLE_STARRED_CONTACTS
				}),
				dispatch(getUserData())
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}

export function setContactsStarred(contactIds) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/set-contacts-starred', {
			contactIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: SET_CONTACTS_STARRED
				}),
				dispatch(getUserData())
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}

export function setContactsUnstarred(contactIds) {
	return (dispatch, getState) => {
		const { routeParams } = getState().contactsApp.contacts;

		const request = axios.post('/api/contacts-app/set-contacts-unstarred', {
			contactIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: SET_CONTACTS_STARRED
				}),
				dispatch(getUserData())
			]).then(() => dispatch(getContacts(routeParams)))
		);
	};
}
