const baseRoute = (req, res) => {
	console.log('Called!');
	res.sendStatus(200);
};

const signInRoute = (req, res) => {
	console.log('SignIn!');
	baseRoute(req, res);
};

const signUp = (req, res) => {
	res.send();
};

export default {
	base: baseRoute,
	signIn: signInRoute,
	signUp: signUp,
	logout: baseRoute,
	forgotPw: baseRoute
};
