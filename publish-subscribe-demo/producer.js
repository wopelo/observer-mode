module.exports = class Producer {
  constructor() {
    this.publishers = []
  }

  addPublisher(publisher) {
    this.publishers.push(publisher)
  }

  publish(value) {
    this.publishers.forEach((publisher) => publisher.publish(value))
  }
}