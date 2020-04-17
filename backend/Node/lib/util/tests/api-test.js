const addContext = require('mochawesome/addContext');
const chai = require('chai');
const expect = chai.expect;

const request = require('request');
const options = {
  url: 'http://localhost:23456/api/encode',
  headers: {
    'User-Agent': 'request'
  }
};

describe('Full-stack-engineer mochawsome Testsuite', function () {
  it('should add context', function () {
    // context can be a simple string
    addContext(this, 'Full-stack-engineer coding challenge q1');

    // context can be an image url and the report will show it inline
    addContext(this, 'https://digitalsynopsis.com/wp-content/uploads/2015/03/web-designer-developer-jokes-humour-funny-48.jpg');

    // context can be an object with title and value properties
    addContext(this, {
      title: 'expected output',
      value: {
        Shift: Number,
        Message: String
      }
    });
  })
});




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
