import { useEffect, useState } from 'react'

function UseEffectEx1() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Hello')
  })

  return (
    <div>
      <h3> Example 1:</h3>
      <p>Pressing 'Plus 1' makes the component rerender. Rerendering causes 'Hello' to be written to the console as a side effect 
        to the change in the value of count.
      </p>
      <pre className="code">
{`useEffect(() => {
  console.log('Hello')
})`}
      </pre>
      <button onClick={() => setCount(state => state + 1)}> Plus 1 </button> 
      <br />
      {count} 
    </div>
  )
}


export default UseEffectEx1