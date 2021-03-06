/* global angular */
angular.module('App', [])
  .controller('AppListController', function ($scope) {
    $scope.test = 2000
    $scope.check = false
    $scope.books = [
      {
        id: 1,
        name: 'harrypotter 1',
        price: 100,
        img: '1.jpg',
        quantity: 1
      },
      {
        id: 2,
        name: 'harrypotter 2',
        price: 100,
        img: '2.jpg',
        quantity: 1
      },
      {
        id: 3,
        name: 'harrypotter 3',
        price: 100,
        img: '3.jpg',
        quantity: 1
      },
      {
        id: 4,
        name: 'harrypotter 4',
        price: 100,
        img: '4.jpg',
        quantity: 1
      },
      {
        id: 5,
        name: 'harrypotter 5',
        price: 100,
        img: '5.jpg',
        quantity: 1
      },
      {
        id: 6,
        name: 'harrypotter 6',
        price: 100,
        img: '6.jpg',
        quantity: 1
      },
      {
        id: 7,
        name: 'harrypotter 7',
        price: 100,
        img: '7.jpg',
        quantity: 1
      }]
    $scope.num = 0
    $scope.choose = []

    $scope.disAgain = function () {
      var amount = []
      for (var count = 0; count < $scope.choose.length; count++) {
        amount.push($scope.choose[count].quantity)
      }
      var temp = 0
      for (var i = 0; i < amount.length; i++) {
        temp += amount[i]
      }
      $scope.num = temp
      $scope.sell = 0
      var countlist = 0
      var exit = 0
      do {
        for (var a = 0; a < amount.length; a++) {
          if (amount[a] !== 0) {
            countlist += 1
          }
          if (amount[a] === 0) {
            countlist += 0
            break
          }
        }

        if (countlist === 1) {
          console.log('1')
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
          console.log('2')
        } else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
          console.log('3')
        } else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
          console.log('4')
        } else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
          console.log('5')
        } else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
          console.log('6')
        } else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
          console.log('7')
        } else if (countlist === 0) {
          exit = 1
          console.log('exit')
        }
        // // ลบ จำนวนออกทีละ 1
        for (var o = 0; o < amount.length; o++) {
          if (amount[o] > 0) {
            amount[o] -= 1
            countlist = 0 // รีค่าใหม่
          }
        }
      } while (exit !== 1)
    }

    $scope.add = function (data, index) {
      if ($scope.checkadd(data.id)) {
        var indexinsert = $scope.checkindex(data.id)
        $scope.choose.splice(indexinsert, 1, { id: data.id, name: data.name, price: data.price, img: data.img, quantity: $scope.choose[indexinsert].quantity += 1 })
        $scope.num++
      } else {
        $scope.choose.push(data)
        $scope.num++
        $scope.booknum++
      }
      $scope.check = true
      console.log($scope.choose)
      $scope.choose.sort(function (a, b) { // เรียงค่ามาก > น้อย
        if (a.quantity > b.quantity) return -1
        if (a.quantity < b.quantity) return 1
        return 0
      })

      var amount = []
      for (var count = 0; count < $scope.choose.length; count++) {
        amount.push($scope.choose[count].quantity)
      }

      console.log(amount)
      $scope.sell = 0
      var countlist = 0
      var exit = 0
      do {
        for (var i = 0; i < amount.length; i++) {
          if (amount[i] !== 0) {
            countlist += 1
          }
          if (amount[i] === 0) {
            countlist += 0
            break
          }
        }

        if (countlist === 1) {
          console.log('1')
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
          console.log('2')
        } else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
          console.log('3')
        } else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
          console.log('4')
        } else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
          console.log('5')
        } else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
          console.log('6')
        } else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
          console.log('7')
        } else if (countlist === 0) {
          exit = 1
          console.log('exit')
        }
        // // ลบ จำนวนออกทีละ 1
        for (var o = 0; o < amount.length; o++) {
          if (amount[o] > 0) {
            amount[o] -= 1
            countlist = 0 // รีค่าใหม่
          }
        }
      } while (exit !== 1)
      console.log($scope.sell)
    }
    $scope.del = function (data, index) {
      if ($scope.choose[index].quantity > 0) {
        $scope.choose[index].quantity -= 1
        $scope.num -= 1
      } else if ($scope.choose[index].quantity === 1) {
        $scope.choose.splice(index, 1)
        $scope.sell = 0
        $scope.num -= 1
      }
      $scope.disAgain()
    }
    $scope.checkadd = function (id) {
      for (var ch_data = 0; ch_data < $scope.choose.length; ch_data++) {
        if ($scope.choose[ch_data].id === id) {
          return true
        }
      }
    }

    $scope.checkindex = function (id) {
      for (var ch_index = 0; ch_index < $scope.choose.length; ch_index++) {
        if ($scope.choose[ch_index].id === id) {
          return ch_index
        }
      }
    }
  })
