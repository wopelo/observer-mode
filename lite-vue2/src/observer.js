import Dep from './dep.js'

const typeTo = (val) => Object.prototype.toString.call(val)

function defineReactive(obj, key, val) {
  // 每个对象的属性都有一个 Dep，用来存放依赖的该属性的函数
  let dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`get ${key}`)
      dep.addSub(Dep.depTarget)

      return val
    },
    set(newValue) {
      console.log(`set ${key}`)

      if (newValue === val) return

      val = newValue
      dep.notify()
    },
  })
}

function walk(obj) {
  Object.keys(obj).forEach((key) => {
    // 如果值是对象，继续处理对象内部的字段
    if(typeTo(obj[key]) === '[object Object]'){
      walk(obj[key])
    }

    // 处理对象本身
    defineReactive(obj, key, obj[key])
  })
}

function observe(obj){
  if(typeTo(obj) !== '[object Object]') {
    return null
  }

  walk(obj)
}

export default observe