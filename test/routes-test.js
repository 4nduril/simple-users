import { default as chai, expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import routes from '../src/routes.js';

describe('The exported Routes object', () => {
	it('should have a \'signUp\' method', () => {
		expect(routes).to.have.property('signUp');
		expect(routes.signUp).to.be.a('function');
	});
});

describe('The \'signUp\' method', () => {
	it('calls res.send()', () => {
		const res = {
			send: sinon.spy()
		};
		routes.signUp(null, res);
		expect(res.send).to.have.been.called;
	});
});
