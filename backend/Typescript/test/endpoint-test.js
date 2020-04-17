const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const options = {
    url: 'http://localhost:23456/api/encode',
    headers: {
        'User-Agent': 'request'
    }
};

describe('Typescript endpoint testing', function () {
    it('test encode endoint', function (done) {
        request.post(options, { timeout: 1500 }, function (error, response, body) {
            console.log('BODY', error, response, body);
            expect(body).to.equal('payload not correct');
            done();
        });
    });

    it('test encode endoint', function (done) {
        options.headers['content-type'] = 'application/json'
        options['body'] = { 'Shift': 3, 'Message': 'Test' };
        request.post(options, { timeout: 1500 }, function (error, response, body) {
            console.log('BODY', body);
            expect(body)
            done();
        });
    });
})
