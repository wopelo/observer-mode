import Dep from './dep.js'

const typeTo = (val) => Object.prototype.toString.call(val)

// 重写属性get/set方法
function defineReactive(obj, key, val) {
  // 每个对象的属性都有一个 Dep 作为该属性变更的发布平台
  let dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    // get时发布平台收集订阅者
    get() {
      console.log(`get ${key}`)

      if (Dep.depTarget && Dep.depTarget.id >= 0) {
        console.log(`当前订阅者id: ${Dep.depTarget.id}`)
      }

      dep.addSub(Dep.depTarget)

      return val
    },
    // set时发布平台dep通知订阅者
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

// observe用于劫持数据
function observe(obj){
  if(typeTo(obj) !== '[object Object]') {
    return null
  }

  walk(obj)
}

export default observe