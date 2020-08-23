import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

/* eslint-disable camelcase */
class JwtService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

	setInterceptors = () => {
		axios.defaults.baseURL = process.env.REACT_APP_API_URL;
		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if (err?.response?.status === 401 && err?.config && !err?.config?.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

	handleAuthentication = () => {
		const token = this.getAccessToken();

		if (!token) {
			this.emit('onNoAccessToken');

			return;
		}

		if (this.isAuthTokenValid(token)) {
			this.setSession(token);
			this.emit('onAutoLogin', true);
		} else {
			this.setSession(null);
			this.emit('onAutoLogout', 'token expired');
		}
	};

	createUser = data => {
		return new Promise((resolve, reject) => {
			axios
				.post('/auth/register', data)
				.then(response => {
					if (response.data.user) {
						this.setSession(response.data.token);
						resolve(response.data.user);
					}
				})
				.catch(error => {
					reject(error?.response?.data ?? { msg: 'UNKNOWN_ERROR' });
				});
		});
	};

	signInWithEmailAndPassword = (email, password) => {
		return new Promise((resolve, reject) => {
			axios
				.post('/auth/login', {
					email,
					password
				})
				.then(response => {
					if (response.data.user) {
						console.log('response.data.token, ', response.data.token);
						this.setSession(response.data.token);
						resolve(response.data.user);
					}
				})
				.catch(error => {
					reject(error?.response?.data ?? { msg: 'UNKNOWN_ERROR' });
				});
		});
	};

	// FIXME
	signInWithToken = () => {
		return new Promise((resolve, reject) => {
			axios
				.post('/auth/access-token', {
					token: this.getAccessToken()
				})
				.then(response => {
					if (response.data.user) {
						this.setSession(response.data.token);
						resolve(response.data.user);
					} else {
						this.logout();
						Promise.reject();
					}
				})
				.catch(error => {
					this.logout();
					Promise.reject();
				});
		});
	};

	updateUserData = user => {
		return axios.post('/auth/user/update', {
			user
		});
	};

	setSession = access_token => {
		if (access_token) {
			localStorage.setItem('jwt_access_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		} else {
			localStorage.removeItem('jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};

	logout = () => {
		this.setSession(null);
	};

	isAuthTokenValid = access_token => {
		if (!access_token) {
			return false;
		}
		const decoded = jwtDecode(access_token);
		const currentTime = Date.now() / 1000;
		if (decoded.exp < currentTime) {
			console.warn('access token expired');
			return false;
		}

		return true;
	};

	getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token');
	};
}

const instance = new JwtService();

export default instance;
