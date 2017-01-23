export default function createRegisterUser({ auth }) {
	return (req, res, next) => {
		if (typeof req !== 'string' && !req.body) {
			const err = new Error('No request body found. Use bodyParser middleware or similar.');
			return next(err);
		}
		return auth.register({
			user: req.body.user,
			pass: req.body.pass
		})
		.then(result => {
			next();
		})
		.catch(next);

	};
}
