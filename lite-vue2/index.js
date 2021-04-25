import Vue from './src/vue.js'

const App = new Vue({
  el: '#app',
  data() {
    return {
      name: '特朗普',
      info: {
        message: '没有人比他更懂',
      },
    }
  },
  render(createElement) {
    return createElement(
      'div',
      [
        createElement('span', `${this._data.name} 说: ${this._data.info.message}`)
      ]
    )
  }
})

setTimeout(() => {
  App._data.name = '川宝'
  App._data.info.message = 'MAGA'
  
  console.log('App._data.info.message: ', App._data.info.message)
}, 2000)
