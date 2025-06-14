class StackObj {
  length: number
  storage: {[index: number]: unknown}

  constructor(storage:unknown[] = []) {
    this.length = storage.length 
    if(storage.length) this.storage = Object.fromEntries(storage.entries())
    else this.storage = {}
  }

  pop = () => {
    if(this.length === 0) return undefined

    this.length--
    const poppedValue = this.storage[this.length]

    delete this.storage[this.length]
    return poppedValue
  }

  push = (value: unknown) => {
    this.storage[this.length] = value
    this.length++
  }

  peek = () => this.storage[this.length - 1]

  size = () => this.length
}

const container = new StackObj()
container.push("hello")
container.push("Korede")
container.push(",")
container.push("how are you")
console.log("container.peek() ", container.peek())
console.log("container.size() ", container.size())
console.log("container.storage ", container.storage)

const container2 = new StackObj([10, 11, 12, 13, 14, 15])
console.log("container2.peek() ", container2.peek())
console.log("container2.pop() ", container2.pop())
console.log("container2.size() ", container2.size())
console.log("container2.storage ", container2.storage)