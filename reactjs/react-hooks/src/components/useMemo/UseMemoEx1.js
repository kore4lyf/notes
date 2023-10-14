import { useEffect, useMemo, useState } from 'react'

const UseMemoEx1 = () => {
  const [count, setCount] = useState(0)
  // if useMemo is not used the child component will re run the
  // useEffect() because every time the parent component renders 
  // the fruit gets reassigned
  // const fruit = ['apple', 'orange', 'pear']
  
  const fruit = useMemo(() => ['apple', 'orange', 'pear'], [])


  // First, it takes a callback that returns the array that we want to memoize 
  // The second argument is a dependencies array
  // const fruit = useMemo(() => ['apple', 'orange', 'pear'])

  return (
    <>
      <h3>Example 1: </h3>
      <Child fruit={ fruit } />
      <button onClick={() => setCount((state) => state + 1)}> +1 </button> 
      {count}
    </>
  )
}


const Child = ({ fruit }) => {

  useEffect(() => {
    console.log(fruit )
  }, [fruit])
  return <div>FRUIT!</div>
}



export default UseMemoEx1