const Dep = require('./dep')

class Observer {
  constructor({ data, watch, methods }) {
    this.data = data
    this.watch = watch
    this.methods = methods

    this.defineReactive()
  }

  defineReactive(obj) {
    const keys = Object.keys(obj)

    for (let i = 0; i < keys.length; i++) {
      const dep = new Dep()
      const oldValue = obj[keys[i]]
      
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
          return oldValue
        },
        set(newValue) {
          if (newValue === oldValue) {
            return
          }

          oldValue = newValue
          dep.notify()
        },
      })
    }
  }
}
