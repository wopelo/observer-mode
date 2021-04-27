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
        createElement('span', `${this.$data.name} 说: ${this.$data.info.message}`)
      ]
    )
  }
})

setTimeout(() => {
  App.$data.name = '川宝'
  // App.$data.info.message = 'MAGA'

  // console.log('App.$data.info.message: ', App.$data.info.message)
}, 2000)

setTimeout(() => {
  App.$data.info.message = 'MAGA!!!!'

  // console.log('App.$data.info.message: ', App.$data.info.message)
}, 4000)

const Sub = new Vue({
  el: '#sub',
  data() {
    return {
      name: '拜登',
      info: {
        message: '睡着了',
      },
    }
  },
  render(createElement) {
    return createElement(
      'div',
      [
        createElement('span', `${this.$data.name} 在飞机上 ${this.$data.info.message}`)
      ]
    )
  }
})

setTimeout(() => {
  Sub.$data.info.message = '摔了一跤'
}, 3000)
