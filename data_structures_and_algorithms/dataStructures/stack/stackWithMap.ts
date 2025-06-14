class StackMap {
  length: number
  storage: Map<number, unknown>

  constructor(storage: unknown[] = []) {
    this.length = storage.length
    
    if(storage.length) this.storage = new Map(storage.entries())
    else this.storage = new Map()
  }

  push = (value: unknown) => {
    this.storage.set(this.length, value)
    this.length++
  }

  pop = () => {
    this.length--
    const poppedValue = this.storage.get(this.length)
    this.storage.delete(this.length)
    return poppedValue
  }

  peek = () => this.storage.get(this.length - 1)

  size = () => this.length
}

const container5 = new StackMap()
container5.push("hello")
container5.push("Korede")
container5.push(",")
container5.push("how are you")
console.log("container5.peek() ", container5.peek())
console.log("container5.size() ", container5.size())
console.log("container5.storage ", container5.storage)

const container6 = new StackMap([10, 11, 12, 13, 14, 15])
console.log("container6.peek() ", container6.peek())
console.log("container6.pop() ", container6.pop())
console.log("container6.size() ", container6.size())
console.log("container6.storage ", container6.storage)