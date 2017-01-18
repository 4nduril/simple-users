const baseRoute = (req, res) => {
	console.log("Called!");
	res.sendStatus(200);
};

const signInRoute = (req, res) => {
	console.log("SignIn!");
	baseRoute(req, res);
};

export default {
	base: baseRoute,
	signIn: signInRoute,
	signUp: baseRoute,
	logout: baseRoute,
	forgotPw: baseRoute
}
