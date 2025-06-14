class Queue {
  storage: unknown[]

  constructor(storage: unknown[]) {
    this.storage = storage
  }

  peek = () => this.storage[0]
  
  enqueue = (value: unknown) => {
    this.storage.push(value)
  }

  dequeue = () => this.storage.unshift()

  size = () => this.storage.length
}

const queue = new Queue()
queue.enqueue("hello")
queue.enqueue("Korede")
queue.enqueue(",")
queue.enqueue("how are you")
console.log("queue.peek() ", queue.peek())
console.log("queue.size() ", queue.size())
console.log("queue.storage ", queue.storage)

const queue2 = new Queue([10, 11, 12, 13, 14, 15])
console.log("queue2.peek() ", queue2.peek())
console.log("queue2.pop() ", queue2.dequeue())
console.log("queue2.size() ", queue2.size())
console.log("queue2.storage ", container4.storage)