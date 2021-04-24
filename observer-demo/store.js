module.exports = class Store {
  constructor() {
    // 商品列表
    this.products = new Set()
    // 观察者列表
    this.observers = []
  }

  // 注册观察者
  addObserver(watcher) {
    this.observers.push(watcher)
  }

  // 有新商品时通知观察者
  addProduct(name) {
    if (this.products.has(name)) return

    this.products.add(name)

    this.observers.forEach((watcher) => watcher.onPublished(name))
  }
}
