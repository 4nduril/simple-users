import express from 'express';
import users from './userMiddleware';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello. Try "/users" instead.\n');
});
app.use('/users', users);

app.listen(3000);
