import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';

const users = express.Router();

/*const urlEncParser = bodyParser.urlencoded({ extended: false });
const db = new Map();

const root = (req, res) => res.send(JSON.stringify(req.cookies));

const getUser = req => {

}

const signIn = (req, res) => {
	const { method } = req;
	if (method === 'GET') {
		const user = getUser(req);
		res.send(isKnownUser(user) ? 'Eingeloggt' : html);
	} else if (method === 'POST') {
		if (!req.body) {
			res.send(400);
			return;
		}

		res.send(`You posted ${req.body.username} and ${req.body.password}`);

	}
};

users.use(cookieParser());*/

users.all('/signin', routes.signIn);
users.all('/signup', routes.signUp);
users.all('/logout', routes.logout);
users.all('/forgotpw', routes.forgotPw);
users.all('*', routes.base);

export default users;
