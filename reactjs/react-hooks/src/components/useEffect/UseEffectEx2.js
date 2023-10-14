import { useEffect, useState } from 'react'

function UseEffectEx2() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Hello')
  }, [])

  return (
    <div>
      <h3> Example 2:</h3>
      <p>To make useEffect run on the first render, pass an empty array to 
        useEffect as a second parameter.
      </p>
      <pre className="code">
{`useEffect(() => {
  console.log('Hello')
}, [])`}
      </pre>
      <button onClick={() => setCount(state => state + 1)}> Plus 1 </button> 
      <br />
      {count} 

    </div>
  )
}


export default UseEffectEx2