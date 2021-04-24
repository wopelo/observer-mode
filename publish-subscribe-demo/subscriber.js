module.exports = class Subscriber {
  constructor(cb) {
    this.cb = cb
  }

  update(val) {
    this.cb(val)
  }

  // 订阅者主动订阅发布者
  subscribe(publisher) {
    publisher.addSubscriber(this)
  }
}