// 使用proxy api做数据劫持
import Dep from './dep.js'

const typeTo = (val) => Object.prototype.toString.call(val)

// 重写属性get/set方法
function defineReactive(obj) {
  // 每个对象的属性都有一个 Dep 作为该属性变更的发布平台
  let dep = new Dep()

  if (typeTo(obj) !== '[object Object]') {
      return null
  }

  return new Proxy(obj, {
    get(target, key) {
      console.log('触发get', target, key)

      dep.addSub(Dep.depTarget)

      return target[key]
    },
    set(target, key, value, receiver) {
      console.log('触发set', target, key, value)

      let newValue = Reflect.set(target, key, value, receiver)

      dep.notify()

      return true
    }
  })
}

function walk(obj) {
  const res = {}

  Object.keys(obj).forEach((key) => {
    if (typeTo(obj[key]) === '[object Object]') {
      // 如果值是对象，继续处理对象内部的字段
      res[key] = walk(obj[key])
    } else {
      // 如果不是对象，则赋值
      res[key] = obj[key]
    }
  })

  return defineReactive(res)
}

// observe用于劫持数据
function observe(obj) {
  if(typeTo(obj) !== '[object Object]') {
    return null
  }

  return walk(obj)
}

export default observe
