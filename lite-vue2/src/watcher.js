import Dep from './dep.js'

class Watcher{
  constructor(value, getter) {
    this.getter = getter
    this.value = this.get()
    this.val = value
  }

  get() {
    Dep.depTarget = this

    this.getter()

    Dep.depTarget = null

    return this.val
  }

  update() {
    this.value = this.get()
  }
}

export default Watcher
