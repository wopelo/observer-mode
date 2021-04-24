class Watcher {
  constructor(cb) {
    this.cb = cb
  }

  update(newValue, oldValue) {
    this.cb(newValue, oldValue)
  }
}