import { useLayoutEffect, useState } from "react"

function UseLayoutEffectEx1() {
  const [count, setCount] = useState(0)
  
  useLayoutEffect(() => {
    let width = document.getElementById('hello').offsetWidth
    console.log(width)
  }, [count])

  return (
    <div>
      <h3> Example 1: </h3>
      <button onClick={() => setCount((state) => state + 1 )}>Plus 1</button>
      <div id='hello' style={{ background: 'pink' }}>
        Hello 
      </div>
    </div>  
    
  )
}

export default UseLayoutEffectEx1
