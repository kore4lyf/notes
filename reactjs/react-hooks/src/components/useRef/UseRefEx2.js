import { useRef } from 'react'

function UseRefEx2() { 
  const inputRef = useRef(null)

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <h3> Example 2: </h3>
      <p>
        Making reference to an element.
      </p>
      
      <input type="text" ref={ inputRef } />
      <button onClick={focus}> Focus </button>
    </div>
  )
}

export default UseRefEx2