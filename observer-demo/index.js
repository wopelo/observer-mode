const Store = require('./store')
const Watcher = require('./watcher')

const supermarket = new Store()
const watchA = new Watcher('A')
const watchB = new Watcher('B')

supermarket.addObserver(watchA)
supermarket.addObserver(watchB)

supermarket.addProduct('香蕉')

setTimeout(() => {
  supermarket.addProduct('苹果')
}, 3000)
