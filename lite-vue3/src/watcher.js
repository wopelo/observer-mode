import Dep from './dep.js'

let id = 0

class Watcher{
  // 在订阅者创建时，将单例Dep.depTarget指向当前订阅者
  constructor(value, cb) {
    this.cb = cb

    // 创建时调用get方法的目的主要是通过调用cb触发所用到的属性的get
    // 进而在对应属性的发布平台中添加该订阅者
    this.get()

    // this.val指向vue._data
    this.val = value

    // 通过id可以确定是否为同一个订阅者
    this.id = ++id
  }

  get() {
    Dep.depTarget = this

    this.cb()

    // 发布平台收集完订阅者后重置单例
    Dep.depTarget = null
  }

  // 订阅者在更新的时候调用this.cb()触发所用到属性的get
  // 如果该订阅者不在对应属性发布平台的订阅者列表中，则会被添加进列表
  update() {
    this.get()

    console.log('val value', this.val.name, this.val.info.message)
  }
}

export default Watcher
