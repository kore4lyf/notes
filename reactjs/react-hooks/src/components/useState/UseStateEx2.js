import { useState } from "react";


function UseStateEx2() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Example 2: </h3>
      <button onClick={() => setCount((state) => state + 1)}> Count </button>

    <br/>

    <div>counter: {count}</div>
    </div>
  )
}

export default UseStateEx2;