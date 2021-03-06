/* eslint-env node, mocha */

'use strict';

const Assert = require('assert')
const Compilers = require('../index');


describe('auth0-ext-compilers', function () {

    it('has generic api', function () {
        Assert.equal(typeof Compilers['generic'], 'function');
    });

    it('has client-credentials-exchange api', function () {
        Assert.equal(typeof Compilers['client-credentials-exchange'], 'function');
        Assert.equal(typeof Compilers['password-exchange'], 'function');
        Assert.equal(typeof Compilers['post-change-password'], 'function');
        Assert.equal(typeof Compilers['pre-user-registration'], 'function');
        Assert.equal(typeof Compilers['post-user-registration'], 'function');
        Assert.equal(typeof Compilers['generic'], 'function');
    });

});
