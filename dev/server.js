import express from 'express';
import users from '../src/userMiddleware';

const app = express();

app.use('/users', users);
app.get('/', (req, res) => {
	res.send('Hello. Try "/users" instead.\n');
});

app.listen(3000);
console.log('Server running…');
