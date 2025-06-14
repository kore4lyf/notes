const aToZ = () => {
  const start = "a".charCodeAt(0)
  const end = "z".charCodeAt(0)

  let pointer = start

  while(pointer <= end) {
    console.log(pointer, " : ", String.fromCharCode(pointer))
    console.log()
    pointer++
  }
}

aToZ()