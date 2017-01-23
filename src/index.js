import registerUser from './register-user';

const db = new Map();
const defaults = {
	auth: {
		register(user) {
			return new Promise((resolve, reject) => {
				if (!db.has(user.username)) {
					db.set(user.username, user);
					resolve(user);
				} else {
					reject(new Error('User already exists!'));
				}

			});
		}
	}
};

const simpleUsers = (options = defaults) => {
	return {
		registerUser: registerUser(options)
	};
};

export default simpleUsers;
