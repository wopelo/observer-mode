// 发布订阅模型中的发布平台
class Dep{
  constructor() {
    // 订阅者列表
    this.subs = []
  }

  addSub(sub) {
    if(sub && (this.subs.indexOf(sub) === -1)) {
      this.subs.push(sub)
    }
  }

  notify() {
    console.log('通知变更', this.subs.length)
    this.subs.length > 0 && this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

Dep.depTarget = null

export default Dep
