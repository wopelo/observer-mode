module.exports = class watcher {
  constructor(name) {
    this.name = name
  }

  onPublished(product) {
    console.log(`观察者${this.name}观察到商品${product}上架`)
  }
}
