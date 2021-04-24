class Dep {
  constructor() {
    this.watchers = []
  }

  // 添加订阅方法
  depend(watcher) {
    this.watchers.push(watcher)
  }

  // 发布者更新消息，触发所有的订阅方法
  notify(newValue, oldValue) {
    this.watchers.forEach((watcher) => watcher.update(newValue, oldValue))
  }
}