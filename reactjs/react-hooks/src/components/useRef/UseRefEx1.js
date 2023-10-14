import { useRef } from 'react'

function UseRefEx1() { 
  const countRef = useRef(0)

  const countClicks = () => {
    countRef.current++
    console.log(countRef.current)
  }

  return (
    <div>
      <h3> Example 1:</h3>
      <p>
        As the value of countRef changes, it doesn't cause
        the component to re-render. If useState was used then 
        updating the state will cause the compoonent to render.
        <br /> 
        Reference update is synchronous, therefore it can be accessed 
        immediately after the update. 
        <br /> 
        But in the case of use of useState, it is accessed aschronously.
      </p>

      <button onClick={countClicks}> Count in the console </button>
    </div>
  )
}

export default UseRefEx1