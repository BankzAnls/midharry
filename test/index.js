/* global describe, it*/
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect // jshint ignore:line

describe('test yahoo search results', function () {
  it('buy one book equal 100 bath', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
    .goto('http://localhost:5000')
    .click('#sector-0')
    .wait(1000)
    .evaluate(function () {
      return document.querySelector('#sum-0').innerHTML
    })
    expect(link).to.equal('100')
  })
  it('buy one book each sector equal 280', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
    .goto('http://localhost:5000')
    .click('#sector-0')
    .click('#sector-1')
    .click('#sector-2')
    .click('#sector-3')
    .click('#sector-4')
    .click('#sector-5')
    .click('#sector-6')
    .wait(1000)
    .evaluate(function () {
      return document.querySelector('#total').innerHTML
    })
    expect(link).to.equal('280')
  })
})
