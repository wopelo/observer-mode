const Producer = require('./producer')
const Publisher = require('./publisher')
const Subscriber = require('./subscriber')

const newspaper = new Producer()

const postOfficeA = new Publisher()
const postOfficeB = new Publisher()

const readerA = new Subscriber((value) => {
  console.log(`读者A收到${value}`)
})
const readerB = new Subscriber((value) => {
  console.log(`读者B收到${value}`)
})
const readerC = new Subscriber((value) => {
  console.log(`读者C收到${value}`)
})

readerA.subscribe(postOfficeA)
readerA.subscribe(postOfficeB)
readerB.subscribe(postOfficeB)
readerC.subscribe(postOfficeB)

newspaper.addPublisher(postOfficeA)
newspaper.addPublisher(postOfficeB)

newspaper.publish('新青年')