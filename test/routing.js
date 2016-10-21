var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000');

describe('Health check', function () {
    it('Should return a 200 response', function (done) {
        api.get('/health')
        .set('Accept', 'application/json')
        .expect(200, done);
    })
})
