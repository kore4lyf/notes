import { useMemo, useState } from 'react'

const UseMemoEx2 = () => {
  const [num, setNum] = useState(0)

  // Fibonacci Sequence
  // 0 1 1 2 3 5 8 13
  
  const calcNthFib = (n) => {
    if (n < 2) return 1
    return calcNthFib(n - 1) + calcNthFib(n - 2)
  }

  // By using memoization we are telling it to only calculate
  // a number if it is not the same or equal to the previous one
   const fibNum = useMemo(() => calcNthFib(num), [num])

  return (
    <>
      <h3>Example 2: </h3>
      <button onClick={() => setNum(5)}> 5th </button>
      <button onClick={() => setNum(10)}> 10th </button>
      <button onClick={() => setNum(35)}> 35th </button>
      <button onClick={() => setNum(40)}> 40th </button> 

      <br /> 
      <div> {fibNum} </div>
    </>
  )
}


export default UseMemoEx2