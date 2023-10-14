import { useEffect, useState } from 'react'
//import * as data from '../../todos.json'

function UseEffectEx4() {
  const [count, setCount] = useState(0)
  const [activity, setActivity] = useState('Loading...')

  useEffect(() => {

    let nextIndex = () => Math.floor(Math.random() * 151)
    fetch('http://localhost:3000/todos.json').then(res => res.json()).then(res => setActivity(res[nextIndex()].todo))
  }, [count])


  return (
    <div>
      <h3> Example 4:</h3>
      <p>
        useEffect is usually used to fetch data from an API, updating
        something in the DOM <b>after</b> the page
        has rendered.
      </p>
    
      <button onClick={() => setCount(state => state + 1)}> Plus 1 </button> 
      <br />
      count: {count} <br />
      activity: {activity} 
    </div>
  )
}


export default UseEffectEx4