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
  it('buy three book one sector per one book equal 240 ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
    .goto('http://localhost:5000')
    .click('#sector-0')
    .click('#sector-1')
    .click('#sector-2')
    .wait(1000)
    .evaluate(function () {
      return document.querySelector('#total').innerHTML
    })
    expect(link).to.equal('240')
  })
  it('buy one sector 3 books and buy four sector 3 books equal 540 ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
    .goto('http://localhost:5000')
    .click('#sector-0')
    .click('#sector-0')
    .click('#sector-0')
    .click('#sector-3')
    .click('#sector-3')
    .click('#sector-3')
    .wait(1000)
    .evaluate(function () {
      return document.querySelector('#total').innerHTML
    })
    expect(link).to.equal('540')
  })
  it('buy two sector 2 books and buy seven sector 1 books equal 280 ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
    .goto('http://localhost:5000')
    .click('#sector-1')
    .click('#sector-1')
    .click('#sector-6')

    .wait(1000)
    .evaluate(function () {
      return document.querySelector('#total').innerHTML
    })
    expect(link).to.equal('280')
  })
  it('buy five sector 10 books equal 1000 ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
    .goto('http://localhost:5000')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .click('#sector-4')
    .wait(1000)
    .evaluate(function () {
      return document.querySelector('#total').innerHTML
    })
    expect(link).to.equal('1000')
  })
})
