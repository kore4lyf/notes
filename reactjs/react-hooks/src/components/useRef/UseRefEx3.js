import { useRef, useState, useEffect } from 'react'

function UseRefEx3() { 
  const [seconds, setSeconds] = useState(0) 
  
  const intervalIdRef = useRef(0)

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setSeconds((state) => state + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    // Clear up function
    return () => clearInterval(intervalIdRef.current)
  }, [])

  return (
    <div>
      <h3> Example 3: </h3>
      {seconds}
      <br/>
      <button onClick={() => clearInterval(intervalIdRef.current)}> Stop Timer </button>
    </div>
  )
}

export default UseRefEx3