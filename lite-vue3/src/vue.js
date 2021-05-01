import observe from './observer.js'
import Watcher from './watcher.js'

class Vue {
  constructor(options) {
    this.$options = options
    this._data = options.data()
    this.render = options.render
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el

    this.$data = observe(this._data)

    // 创建一个订阅者，订阅_data的变更
    // 订阅者收到变更通知时重新渲染组件
    new Watcher(this.$data, ()=> {
      this.$mount()
    })
  }

  createElement(tagName, children) {
    let element = document.createElement(tagName)

    if (Object.prototype.toString.call(children) === '[object Array]') {
      children.forEach((child) => {
        element.appendChild(child)
      })
    } else {
      element.textContent = children
    }

    return element
  }

  $mount() {
    const elements = this.render(this.createElement)
    this.$el.innerHTML = ''
    this.$el.appendChild(elements)
  }
}

export default Vue
