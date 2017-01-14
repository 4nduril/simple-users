import express from 'express';
import bodyParser from 'body-parser';
import html from './form';

const users = express.Router();
const urlEncParser = bodyParser.urlencoded({ extended: false });

const root = (req, res) => res.redirect('signin');

const signIn = (req, res) => {
	const { method } = req;
	if (method === 'GET') {
		res.send(html);
	} else if (method === 'POST') {
		if (!req.body) {
			res.send(400);
			return;
		}
		res.send(`You posted ${req.body.username} and ${req.body.password}`);

	}
};

users.get('/', root);
users.use('/signin', urlEncParser, signIn);

export default users;
