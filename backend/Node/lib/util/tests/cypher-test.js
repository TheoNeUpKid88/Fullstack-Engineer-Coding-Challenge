const addContext = require('mochawesome/addContext');
 
describe('test suite', function () {
  it('should add context', function () {
    // context can be a simple string
    addContext(this, 'simple string');
 
    // context can be a url and the report will create a link
    addContext(this, 'http://www.url.com/pathname');
 
    // context can be an image url and the report will show it inline
    addContext(this, 'http://www.url.com/screenshot-maybe.jpg');
 
    // context can be an object with title and value properties
    addContext(this, {
      title: 'expected output',
      value: {
        a: 1,
        b: '2',
        c: 'd'
      }
    });
  })
});