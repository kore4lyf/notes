class StackArr {
  storage: unknown[]

  constructor(array: unknown[] = []) {
    this.storage = array
  }

  pop = () => this.storage.pop()

  push = (value: unknown) => {
    this.storage.push(value)
  }

  peek = () => this.storage[this.storage.length - 1]

  size = () => this.storage.length
}

const container3 = new StackArr()
container3.push("hello")
container3.push("Korede")
container3.push(",")
container3.push("how are you")
console.log("container3.peek() ", container3.peek())
console.log("container3.size() ", container3.size())
console.log("container3.storage ", container3.storage)

const container4 = new StackArr([10, 11, 12, 13, 14, 15])
console.log("container4.peek() ", container4.peek())
console.log("container4.pop() ", container4.pop())
console.log("container4.size() ", container4.size())
console.log("container4.storage ", container4.storage)