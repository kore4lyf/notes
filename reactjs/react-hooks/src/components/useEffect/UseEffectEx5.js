import { useEffect, useState } from 'react'
//import * as data from '../../todos.json'

function UseEffectEx5() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will log every five seconds.')
    }, 5000) 

    return () => clearInterval((interval))
  }, [])

  useEffect(() => {
    document.title = 'Count is ' + count
  }, [count])


  return (
    <div>
      <h3> Example 5: Clean Up Function</h3>
      <p>
        If you have a partcular code that runs on a particular page, 
        and you do not want it to run on other pages, you can use a 
        clean up function to prevent the code from running, by returning 
        a function that terminates the code with in the useEffect. 
        e.g. <br /> 
        If a setInterval is used in useEffect, to clean up the function 
        and prevent it from running on other pages, the useEffect must 
        return a function that clear that interval.
      </p>

      <p>
        <b>You can also have multiple side effects.</b> e.g. Right now
        useEffect is used to log 'This will log every five seconds' to the console
        every five minutes and another useEffect is used to change the title of the
        webpage when Plus 1 is clicked is clicked.
      </p>
    
      <button onClick={() => setCount(state => state + 1)}> Plus 1 </button> 
      <br />
      count: {count} <br />
    </div>
  )
}


export default UseEffectEx5