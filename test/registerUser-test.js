import { default as chai, expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import simpleUsers from '../src';

const testConf = {
	auth: {
		register: sinon.stub().returns(Promise.resolve())
	}
};

const { registerUser } = simpleUsers(testConf);

const req = {
	body: {
		user: 'test',
		pass: '12345'
	}
};

describe('The registerUser method', () => {
	it('is a function', () => {
		expect(registerUser).to.be.a('function');
	});

	it('calls its third argument (next() or callback) if supplied', done => {
		const spy = sinon.spy();
		registerUser(req, {}, spy)
			.then(() => {
				expect(spy).to.have.been.called;
				done();
			})
			.catch(done);

	});

	it('creates an error if req.body is not defined', () => {
		const spy = sinon.spy();
		registerUser({}, {}, spy);
		expect(spy.firstCall.args[0]).to.be.an.instanceof(Error);
	});

	it('gives a User object to register() method of the auth object', () => {
		registerUser(req, {}, () => null);
		expect(testConf.auth.register.firstCall.args[0].user).to.equal(req.body.user);
		expect(testConf.auth.register.firstCall.args[0].pass).to.equal(req.body.pass);
	});
});
