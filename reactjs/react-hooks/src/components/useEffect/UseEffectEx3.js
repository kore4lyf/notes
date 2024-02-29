import { useEffect, useState } from 'react'

function UseEffectEx3() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Hello')
  }, [count])

  return (
    <div>
      <h3> Example 2:</h3>
      <p>To make useEffect run only when certain variable value
        changes, one must include the variables in the an array and
        pass the array as a second parameter to useEffect.
      </p>
      <pre className="code">
{`useEffect(() => {
  console.log('Hello')
}, [count])`}
      </pre>
      <button onClick={() => setCount(state => state + 1)}> Plus 1</button>
    </div>
  )
}


export default UseEffectEx3