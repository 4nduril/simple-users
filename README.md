# Simple-User

## Usage:

Exported Methods:

### registerUser(req, res, next) or registerUser(user, pass, callback)

The registerUser method can be used as Express middleware function. You can use it like:

```javascript
app.post('/signup', registerUser);
```

Also, you can use it standalone like this:

```javascript
app.post('signup', (req, res, next) => {
	const { user, pass } = req.body;
	const callback = (err, result) => {
		if (err) {
			next(err);
		}
		console.log(result);
		next();
	};
	registerUser(user, pass, callback);
});
```

In the latter case, `result` is what gets returned from the background registering process. Probably a User object or similar. Also, while the previously mentioned middleware usage expects to get called with request and response objects, the latter form expects username and password as Strings.
