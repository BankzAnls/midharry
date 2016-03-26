/* global describe, it*/
require('mocha-generators').install();
var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line

describe('test yahoo search results', function() {
  it('should find the nightmare github link first', function*() {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare

    expect(link).to.equal('https://github.com/segmentio/nightmare');
  });
});
