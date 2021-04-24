module.exports = class Publisher {
  constructor() {
    this.subscribers = []
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber)
  }

  publish(value) {
    this.subscribers.forEach((subscribe) =>{
			subscribe.update(value)
		})
  }
}