import { memo, useCallback, useState } from 'react'

const UseCallbackEx1 = () => {
  const [count, setCount] = useState(0)

  // A variable can be passed as a dependency to determine 
  // when the function should be re-assigned
  const onItemClick = useCallback((e) => console.log(e), []);


  return (
    <div>
      <div>Count: {count} </div>
      <button onClick={() => setCount((state) => state + 1)}> Inc </button>
      <Child onItemClick={onItemClick} />
    </div> 
  )
}

const Child = memo( ({ onItemClick }) => {
  const array = new Array(1000).full(1)
  console.log(array)

  return <div>
    <ul>
      {
        array.map(e => {
          <li onClick={onItemClick }>{e}</li>
        })
      }
    </ul>
  </div>
})

export default UseCallbackEx1