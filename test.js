var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:5000')
  .click('#sector-0')
  .wait(1000)
  .evaluate(function () {
    return document.querySelector('#sum-0').innerHTML
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
