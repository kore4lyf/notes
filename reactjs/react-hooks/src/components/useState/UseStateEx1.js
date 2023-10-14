import { useState } from "react";


function UseStateEx1() {
  const [message, setMessage] = useState('')
  return (
    <div>
      <h3>Example 1: </h3>
      <button onClick={() => setMessage('Hello')}> Say hello </button>
      <button onClick={() => setMessage('Message')}> Say goodbye </button>

    <br/>

    <div>message: {message}</div>
    </div>
  )
}

export default UseStateEx1;